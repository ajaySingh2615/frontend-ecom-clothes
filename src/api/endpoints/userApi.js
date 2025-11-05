import apiClient from "../client.js";
import { API_ENDPOINTS } from "../../constants/apiEndpoints.js";

/**
 * User API
 * Mirrors backend's UserController
 */
export const userApi = {
  /**
   * Get current user profile
   * GET /api/v1/users/profile
   */
  getProfile: async () => {
    const response = await apiClient.get(API_ENDPOINTS.USER.PROFILE);
    return response.data; // Returns User
  },

  /**
   * Update user profile
   * PUT /api/v1/users/profile
   */
  updateProfile: async (data) => {
    const response = await apiClient.put(API_ENDPOINTS.USER.PROFILE, data);
    return response.data; // Returns User
  },

  /**
   * Update password
   * PUT /api/v1/users/password
   */
  updatePassword: async (currentPassword, newPassword) => {
    await apiClient.put(API_ENDPOINTS.USER.PASSWORD, null, {
      params: { currentPassword, newPassword },
    });
  },

  /**
   * Delete user account
   * DELETE /api/v1/users/profile
   */
  deleteAccount: async () => {
    await apiClient.delete(API_ENDPOINTS.USER.PROFILE);
  },

  /**
   * Get user by ID (Admin only)
   * GET /api/v1/users/:id
   */
  getUserById: async (userId) => {
    const response = await apiClient.get(API_ENDPOINTS.USER.BY_ID(userId));
    return response.data;
  },

  /**
   * Get user by email (Admin only)
   * GET /api/v1/users/email/:email
   */
  getUserByEmail: async (email) => {
    const response = await apiClient.get(API_ENDPOINTS.USER.BY_EMAIL(email));
    return response.data;
  },

  /**
   * Verify email
   * POST /api/v1/users/verify-email
   */
  verifyEmail: async (token) => {
    await apiClient.post(API_ENDPOINTS.USER.VERIFY_EMAIL, { token });
  },
};
