import { config } from "../config/env.js";

/**
 *  Token Storage Utilities
 * Manages JWT Tokens in localstorage
 */

export const tokenStorage = {
  /**
   * Get access token
   */
  getAccessToken: () => {
    return localStorage.getItem(config.accessTokenKey);
  },

  /**
   * Get refresh token
   */
  getRefreshToken: () => {
    return localStorage.getItem(config.refreshTokenKey);
  },

  /**
   * Set tokens
   */
  setTokens: (accessToken, refreshToken) => {
    localStorage.setItem(config.accessTokenKey, accessToken);
    localStorage.setItem(config.refreshTokenKey, refreshToken);
  },

  /**
   * Remove tokens
   */
  removeTokens: () => {
    localStorage.removeItem(config.accessTokenKey);
    localStorage.removeItem(config.refreshTokenKey);
  },

  /**
   * Get stored user
   */
  getUser: () => {
    const userStr = localStorage.getItem(config.userKey);
    return userStr ? JSON.parse(userStr) : null;
  },

  /**
   * Set user
   */
  setUser: (user) => {
    localStorage.setItem(config.userKey, JSON.stringify(user));
  },

  /**
   * Remove user
   */
  removeUser: () => {
    localStorage.removeItem(config.userKey);
  },

  /**
   * Clear all auth data
   */
  clearAll: () => {
    tokenStorage.removeTokens();
    tokenStorage.removeUser();
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: () => {
    return !!tokenStorage.getAccessToken();
  },
};
