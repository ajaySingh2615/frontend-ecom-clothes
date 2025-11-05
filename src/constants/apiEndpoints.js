// API endpoints (mirrors backend controllers)
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    REFRESH: "/auth/refresh",
    LOGOUT: "/auth/logout",
    LOGOUT_ALL: "/auth/logout-all",
    HEALTH: "/auth/health",
  },

  // User endpoints
  USER: {
    PROFILE: "/users/profile",
    PASSWORD: "/users/password",
    BY_ID: (id) => `/users/${id}`,
    BY_EMAIL: (email) => `/users/email/${email}`,
    VERIFY_EMAIL: "/users/verify-email",
  },

  // Address endpoints
  ADDRESS: {
    BASE: "/addresses",
    BY_ID: (id) => `/addresses/${id}`,
    SET_DEFAULT: (id) => `/addresses/${id}/default`,
  },
};
