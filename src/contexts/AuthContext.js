import { createContext, useState, useEffect, useCallback } from "react";
import { authApi } from "../api/endpoints/authApi.js";
import { tokenStorage } from "../utils/tokenStorage.js";

/**
 * Auth Context
 * Mirrors backend's SecurityContextHolder
 */
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Initialize auth state on mount
   */
  useEffect(() => {
    const initAuth = () => {
      const storedUser = tokenStorage.getUser();
      const hasToken = tokenStorage.isAuthenticated();

      if (storedUser && hasToken) {
        setUser(storedUser);
        setIsAuthenticated(true);
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  /**
   * Login user
   * Mirrors backend's AuthenticationService.login()
   */
  const login = useCallback(async (credentials) => {
    try {
      const response = await authApi.login(credentials);
      const { user: userData, accessToken, refreshToken } = response;

      // Store tokens and user
      tokenStorage.setTokens(accessToken, refreshToken);
      tokenStorage.setUser(userData);

      // Update state
      setUser(userData);
      setIsAuthenticated(true);

      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  /**
   * Register user
   * Mirrors backend's AuthenticationService.register()
   */
  const register = useCallback(async (userData) => {
    try {
      const response = await authApi.register(userData);
      const { user: newUser, accessToken, refreshToken } = response;

      // Store tokens and user
      tokenStorage.setTokens(accessToken, refreshToken);
      tokenStorage.setUser(newUser);

      // Update state
      setUser(newUser);
      setIsAuthenticated(true);

      return response;
    } catch (error) {
      throw error;
    }
  }, []);

  /**
   * Logout user from current device
   * Mirrors backend's AuthenticationService.logout()
   */
  const logout = useCallback(async () => {
    try {
      const refreshToken = tokenStorage.getRefreshToken();
      if (refreshToken) {
        await authApi.logout(refreshToken);
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear local state regardless of API call result
      tokenStorage.clearAll();
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  /**
   * Logout from all devices
   * Mirrors backend's AuthenticationService.logoutFromAllDevices()
   */
  const logoutAll = useCallback(async () => {
    try {
      if (user?.id) {
        await authApi.logoutAll(user.id);
      }
    } catch (error) {
      console.error("Logout all error:", error);
    } finally {
      // Clear local state
      tokenStorage.clearAll();
      setUser(null);
      setIsAuthenticated(false);
    }
  }, [user]);

  /**
   * Refresh access token
   * Mirrors backend's JwtService token refresh
   */
  const refreshToken = useCallback(async () => {
    try {
      const refresh = tokenStorage.getRefreshToken();
      if (!refresh) {
        throw new Error("No refresh token available");
      }

      const response = await authApi.refreshToken(refresh);
      const { accessToken } = response;

      // Update access token only
      tokenStorage.setTokens(accessToken, refresh);

      return accessToken;
    } catch (error) {
      // Refresh failed - logout
      await logout();
      throw error;
    }
  }, [logout]);

  /**
   * Update user in context
   */
  const updateUser = useCallback((updatedUser) => {
    setUser(updatedUser);
    tokenStorage.setUser(updatedUser);
  }, []);

  /**
   * Check if user has specific role
   * Mirrors backend's SecurityUtils role check
   */
  const hasRole = useCallback(
    (role) => {
      return user?.role === role;
    },
    [user]
  );

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    logoutAll,
    refreshToken,
    updateUser,
    hasRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
