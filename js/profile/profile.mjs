import { dofetch } from "../Functions/fetch.mjs";
import { toggleSysMsg } from "../Functions/profileMediaUpdate.mjs";
import {
    PROFILE_URL,
    profileDiv,
    systemMessage,
    userName,
} from "../globleFolder/constans.mjs";
import { displayProfileContent } from "./profileContent.mjs";
import { mediaInUse } from "./updateProfile.mjs";

export async function getProfile() {
    try {
        const profileInfo = `${PROFILE_URL}/${userName}`;

        const profileRes = await dofetch(profileInfo, true);

        displayProfile(profileRes);

        mediaInUse();

        const mediaBtn = document.querySelector(".media-btn");
        toggleSysMsg(mediaBtn, systemMessage);
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}

export function displayProfile(profile) {
    profileDiv.innerHTML = displayProfileContent(profile);
}

getProfile();
