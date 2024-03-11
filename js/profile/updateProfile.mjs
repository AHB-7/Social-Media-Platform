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
import { getProfile } from "./profile.mjs";
import { editProfileContainer } from "./updateMediaContainer.mjs";

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
        console.error("Could not update profile:", error);
    }
}

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
    } catch (error) {}
}
