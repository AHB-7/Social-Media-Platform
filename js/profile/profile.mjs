import { dofetch } from "../Functions/fetch.mjs";
import {
    PROFILE_URL,
    profileDiv,
    userName,
} from "../globleFolder/constans.mjs";
import { displayProfileContent } from "./profileContent.mjs";

function displayProfile(profile) {
    profileDiv.innerHTML = displayProfileContent(profile);
}

async function getProfile() {
    try {
        const profileInfo = `${PROFILE_URL}/${userName}`;
        const profileRes = await dofetch(profileInfo, true);
        console.log(profileRes);
        displayProfile(profileRes);
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}

getProfile();
