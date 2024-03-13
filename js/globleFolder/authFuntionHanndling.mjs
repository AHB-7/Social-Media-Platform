/**
 * Stores the provided authentication token in localStorage under the key "Access-Token".
 * @param {string} token - The authentication token to be stored.
 */

export const addAuthToken = (token) => {
    localStorage.setItem("Access-Token", token);
};

/**
 * Retrieves the authentication token stored in localStorage under the key "Access-Token".
 * @returns {string | null} The stored authentication token, or null if not found.
 */

export const getAuthToken = () => {
    const accessToken = localStorage.getItem("Access-Token");
    return accessToken;
};
