import apiClient from "../client.js";
import { API_ENDPOINTS } from "../../constants/apiEndpoints.js";

/**
 * Address API
 * Mirrors backend's AddressController
 */
export const addressApi = {
  /**
   * Get all addresses for current user
   * GET /api/v1/addresses
   */
  getAddresses: async () => {
    const response = await apiClient.get(API_ENDPOINTS.ADDRESS.BASE);
    return response.data; // Returns Address[]
  },

  /**
   * Get single address by ID
   * GET /api/v1/addresses/:id
   */
  getAddress: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.ADDRESS.BY_ID(id));
    return response.data; // Returns Address
  },

  /**
   * Add new address
   * POST /api/v1/addresses
   */
  addAddress: async (data) => {
    const response = await apiClient.post(API_ENDPOINTS.ADDRESS.BASE, data);
    return response.data; // Returns Address
  },

  /**
   * Update address
   * PUT /api/v1/addresses/:id
   */
  updateAddress: async (id, data) => {
    const response = await apiClient.put(API_ENDPOINTS.ADDRESS.BY_ID(id), data);
    return response.data; // Returns Address
  },

  /**
   * Delete address
   * DELETE /api/v1/addresses/:id
   */
  deleteAddress: async (id) => {
    await apiClient.delete(API_ENDPOINTS.ADDRESS.BY_ID(id));
  },

  /**
   * Set default address
   * PATCH /api/v1/addresses/:id/default
   */
  setDefaultAddress: async (id) => {
    const response = await apiClient.patch(
      API_ENDPOINTS.ADDRESS.SET_DEFAULT(id)
    );
    return response.data; // Returns Address
  },
};
