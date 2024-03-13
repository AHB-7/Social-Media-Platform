import { PROFILE_URL, userName } from "../globleFolder/constans.mjs";
import { updateUserProfile } from "../profile/updateProfile.mjs";

/**
 * Toggles the visibility of a system message element.
 *
 * @param closeButton - The button element that, when clicked, will toggle the visibility of the system message element.
 * @param systemMsgElement - The DOM element representing the system message. Its visibility is controlled by toggling a CSS class.
 *
 * This function attaches an event listener to the `closeButton` parameter. When the `closeButton` is clicked,
 * the `visually-hidden` CSS class is toggled on the `systemMsgElement`. This class should be defined in your CSS
 * to properly hide or show the element (usually by setting display: none or visibility: hidden when the class is applied).
 *
 * Usage:
 * - Ensure you have a CSS class `.visually-hidden` defined in your stylesheet to control the visibility.
 * - Pass a reference to the close button and the system message element when calling `toggleSysMsg`.
 */
export function toggleSysMsg(closeButton, systemMsgElement) {
    closeButton.addEventListener("click", function () {
        systemMsgElement.classList.toggle("visually-hidden");
    });
}

/**
 * Updates the profile avatar image based on the input from a specified input element.
 *
 * @remarks
 * This function assumes the presence of an `<input>` element for the avatar URL
 * and an `<img>` element to display the avatar. It updates the avatar display
 * when the user inputs a valid URL and presses "Enter" or moves out of the input field.
 *
 * @param mediaRes - (Optional) The initial media resource URL to be displayed as the avatar.
 */

export function changeProfileAvatar(mediaRes) {
    const avatarImageShow = document.querySelector("#avatarImageShow");
    const avatarImageInput = document.querySelector("#avatarImageInput");
    avatarImageInput.addEventListener("keyup", (e) => {
        avatarImageShow.src = e.target.value;
    });
}

// This function work in the same way as `changeProfileAvatar

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
