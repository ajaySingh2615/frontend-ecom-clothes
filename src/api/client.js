import axios from "axios";
import { config } from "../config/env.js";

// Create axios instance (like creating a DataSource in backend)
const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: config.apiTimeout,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - Add auth token
apiClient.interceptors.request.use(
  (requestConfig) => {
    const token = localStorage.getItem(config.accessTokenKey);
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle token refresh
apiClient.interceptors.response.use(
  (response) => {
    // Return data directly (like Spring's ResponseEntity)
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 - Token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem(config.refreshTokenKey);
        if (refreshToken) {
          // Call refresh endpoint
          const response = await axios.post(
            `${config.apiBaseUrl}/auth/refresh`,
            {},
            {
              headers: { "Refresh-Token": refreshToken },
            }
          );

          const { accessToken } = response.data.data;
          localStorage.setItem(config.accessTokenKey, accessToken);

          // Retry original request
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed - logout user
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
