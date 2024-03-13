import { dofetch } from "../Functions/fetch.mjs";
import {
    changeProfile,
    changeProfileAvatar,
    changeProfileBanner,
    newMedia,
    toggleSysMsg,
} from "../Functions/profileMediaUpdate.mjs";
import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import {
    PROFILE_URL,
    systemMessage,
    userName,
} from "../globleFolder/constans.mjs";
import { createAndShowAlert } from "../validation/alert.mjs";
import { getProfile } from "./profile.mjs";
import { editProfileContainer } from "./updateMediaContainer.mjs";

/**
 * Asynchronously updates a user's profile on the server by sending a PUT request.
 * This function assumes the presence of a `dofetch` utility function and a `getAuthToken` function
 * for making the HTTP request and retrieving the authorization token, respectively.
 *
 * @param {string} url - The URL endpoint to which the PUT request is sent. This URL should be the API endpoint for updating the user's profile.
 * @param {Object} userData - An object containing the user's profile data that needs to be updated. The structure of this object depends on the server's expected payload for the profile update.
 *
 * @returns {Promise<void>} A promise that resolves with no value if the update is successful or rejects with an error if the update fails.
 *
 * */

export async function updateUserProfile(url, userData) {
    try {
        const authToken = getAuthToken();
        const response = await dofetch(url, true, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(userData),
        });
    } catch (error) {
        createAndShowAlert();
    }
}

/**
 * Initializes media-related functionality for a user profile. This function fetches
 * the user's media data, updates the profile container, avatar, and banner based on the fetched data,
 * and sets up event listeners for saving changes and closing the media editor.
 *
 * @param {Object} mediaRes - The initial media data passed to the function.
 *
 * mediaInUse();
 */
export async function mediaInUse(mediaRes) {
    try {
        const mediaRes = await dofetch(`${PROFILE_URL}/${userName}`, true);

        editProfileContainer(mediaRes);

        changeProfileAvatar(mediaRes);

        changeProfileBanner(mediaRes);

        newMedia();

        const saveMedia = document.querySelector("#saveMedia");
        saveMedia.addEventListener("click", async (e) => {
            e.preventDefault();
            await changeProfile();
            getProfile();
        });

        const closeBtn = document.querySelector("#closeBtn");
        toggleSysMsg(closeBtn, systemMessage);
    } catch (error) {
        createAndShowAlert();
    }
}
