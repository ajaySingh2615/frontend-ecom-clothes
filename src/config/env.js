// Environment configuration
export const config = {
  apiBaseUrl:
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1",
  appName: import.meta.env.VITE_APP_NAME || "Ecom App",
  appVersion: import.meta.env.VITE_APP_VERSION || "1.0.0",

  // Token keys
  accessTokenKey: import.meta.env.VITE_ACCESS_TOKEN_KEY || "access_token",
  refreshTokenKey: import.meta.env.VITE_REFRESH_TOKEN_KEY || "refresh_token",
  userKey: import.meta.env.VITE_USER_KEY || "user",

  // Feature flags
  enableGoogleAuth: import.meta.env.VITE_ENABLE_GOOGLE_AUTH === "true",

  // API timeouts
  apiTimeout: 10000, // 10 seconds

  // Token expiration (matching backend)
  accessTokenExpiry: 15 * 60 * 1000, // 15 minutes
  refreshTokenExpiry: 30 * 24 * 60 * 60 * 1000, // 30 days
};
