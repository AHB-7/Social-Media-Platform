import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import { createAndShowAlert } from "../validation/alert.mjs";

/**
 * Performs an HTTP request to a specified URL with optional authentication and custom options.
 * This function is an abstraction over the Fetch API, simplifying the inclusion of common headers
 * and authorization tokens.
 *
 * @async
 * @param {string} url - The URL to which the request will be sent.
 * @param {boolean} [isAuth=false] - A flag indicating whether the request requires authentication.
 *                                   If `true`, an Authorization header with a bearer token is added to the request.
 * @param {Object} [options={}] - Additional options for the fetch request. This can include any
 *                                Fetch API options such as method, body, etc.
 * @returns {Promise<Object>} A promise that resolves to the JSON-parsed response of the request.
 * @throws {Error} Throws an error if the fetch operation fails or if the response is not OK (status code outside 200-299 range).
 *
 * @example
 * // Fetching data without authentication
 * dofetch('https://api.example.com/data')
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Fetch error:', error));
 *
 * @example
 * // Fetching data with authentication
 * dofetch('https://api.example.com/protected', true)
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Fetch error:', error));
 */

export async function dofetch(url, isAuth = false, options = {}) {
    try {
        const headers = { "Content-type": "application/json" };
        if (isAuth === true) {
            const authToke = getAuthToken();
            headers["Authorization"] = `Bearer ${authToke}`;
        }
        const combinedOptions = { headers, ...options };
        const response = await fetch(url, combinedOptions);
        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`HTTP error ${response.status}: ${errorDetails}`);
        }
        const json = await response.json();
        return json;
    } catch (e) {
        createAndShowAlert();
    }
}
