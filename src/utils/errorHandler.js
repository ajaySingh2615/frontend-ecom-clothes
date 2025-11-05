export const handleApiError = (error) => {
  if (error.response) {
    // Backend returned error response
    const { status, data } = error.response;

    switch (status) {
      case 400:
        return data.message || "Invalid request";
      case 401:
        return "Unauthorized. Please login again.";
      case 403:
        return "You do not have permission to perform this action";
      case 404:
        return data.message || "Resource not found";
      case 409:
        return data.message || "Resource already exists";
      case 500:
        return "Server error. Please try again later.";
      default:
        return data.message || "An error occurred";
    }
  } else if (error.request) {
    // Request made but no response
    return "Network error. Please check your connection.";
  } else {
    // Other errors
    return error.message || "An unexpected error occurred";
  }
};
