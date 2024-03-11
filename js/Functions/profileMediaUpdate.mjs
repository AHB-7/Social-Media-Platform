import { PROFILE_URL, userName } from "../globleFolder/constans.mjs";
import { updateUserProfile } from "../profile/updateProfile.mjs";

export function toggleSysMsg(closeButton, systemMsgElement) {
    closeButton.addEventListener("click", function () {
        systemMsgElement.classList.toggle("visually-hidden");
    });
}

export function changeProfileAvatar(mediaRes) {
    const avatarImageShow = document.querySelector("#avatarImageShow");
    const avatarImageInput = document.querySelector("#avatarImageInput");
    avatarImageInput.addEventListener("keyup", (e) => {
        avatarImageShow.src = e.target.value;
    });
}

export function changeProfileBanner(mediaRes) {
    const bannerImageInput = document.querySelector("#bannerImageInput");
    const bannerImgShow = document.querySelector("#bannerImgShow");

    bannerImageInput.addEventListener("input", (e) => {
        bannerImgShow.style.backgroundImage = `url(${e.target.value})`;
    });
}

export function newMedia() {
    const bannerImageInput = document.querySelector("#bannerImageInput");
    const avatarImageInput = document.querySelector("#avatarImageInput");

    bannerImageInput.addEventListener("keyup", (e) => {
        localStorage.setItem("bannerURL", e.target.value);
    });
    avatarImageInput.addEventListener("keyup", (e) => {
        localStorage.setItem("avatarURL", e.target.value);
    });
}
export async function changeProfile() {
    const newAvatar = localStorage.getItem("avatarURL");
    const newBanner = localStorage.getItem("bannerURL");

    const newProfileMedia = {
        avatar: newAvatar,
        banner: newBanner,
    };

    await updateUserProfile(
        `${PROFILE_URL}/${userName}/media`,
        newProfileMedia
    );
}
