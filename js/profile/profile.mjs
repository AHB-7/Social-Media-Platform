import { dofetch } from "../Functions/fetch.mjs";
import {
    PROFILE_URL,
    profileDiv,
    userName,
} from "../globleFolder/constans.mjs";
import { systemMsgForm } from "../globleFolder/systemMsg.mjs";
import { displayProfileContent } from "./profileContent.mjs";

async function getProfile() {
    try {
        const profileInfo = `${PROFILE_URL}/${userName}`;
        const profileRes = await dofetch(profileInfo, true);
        displayProfile(profileRes);
        const editMediaBtn = document.querySelector(".media-btn");
        editMediaBtn.addEventListener("click", () => {
            systemMsgForm();
        });
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}

function displayProfile(profile) {
    profileDiv.innerHTML = displayProfileContent(profile);
}
getProfile();
