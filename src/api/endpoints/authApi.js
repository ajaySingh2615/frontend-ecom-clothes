import apiClient from "../client.js";
import { API_ENDPOINTS } from "../../constants/apiEndpoints.js";

/**
 * Authentication API
 * Mirrors backend's AuthController
 */
export const authApi = {
  /**
   * Register new user
   * POST /api/v1/auth/register
   */
  register: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, data);
    return response.data; // returns AuthResponse
  },

  /**
   * Login user
   * POST /api/v1/auth/login
   */
  login: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, data);
    return response.data; // returns AuthResponse
  },

  /**
   * Refresh access token
   * POST /api/v1/auth/refresh
   */
  refreshToken: async (refreshToken) => {
    const response = await apiClient.post(
      API_ENDPOINTS.AUTH.REFRESH,
      {},
      {
        headers: {
          "Refresh-Token": refreshToken,
        },
      }
    );
    return response.data; // Returns AuthResponse
  },

  /**
   * Logout from current device
   * POST /api/v1/auth/logout
   */
  logout: async (refreshToken) => {
    await apiClient.post(
      API_ENDPOINTS.AUTH.LOGOUT,
      {},
      {
        headers: { "Refresh-Token": refreshToken },
      }
    );
  },

  /**
   * Logout from all devices
   * POST /api/v1/auth/logout-all
   */
  logoutAll: async (userId) => {
    await apiClient.post(
      API_ENDPOINTS.AUTH.LOGOUT_ALL,
      {},
      {
        headers: { "User-Id": userId },
      }
    );
  },

  /**
   * Health check
   * GET /api/v1/auth/health
   */
  health: async () => {
    const response = await apiClient.get(API_ENDPOINTS.AUTH.HEALTH);
    return response.data;
  },
};
