import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import {
    POSTS_URL,
    addImgButton,
    bodyElement,
    forms,
    publishForm,
    titleElement,
} from "../globleFolder/constans.mjs";
import { getPostes } from "../postes/postes.mjs";
import { dofetch } from "./fetch.mjs";

getAuthToken();

export function inputField() {
    const textarea = document.getElementById("validationTooltip1");
    textarea.addEventListener("input", autoResize, false);

    function autoResize() {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    }
}

export async function createPost(title, body, tags = [], media = "") {
    const response = await dofetch(POSTS_URL, true, {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            tags,
            media,
        }),
    });
    if (response) {
    } else {
        console.log("Failed to create post");
    }
}

/**
 * Checks if the input for the post's title is valid (not empty).
 * @returns {boolean} True if the title input is valid, false otherwise.
 */

publishForm.addEventListener("submit", async (event) => {
    function postInputValidationCheck() {
        return titleElement.value.length > 0;
    }

    if (!postInputValidationCheck()) {
        return;
    }

    event.preventDefault();

    const tagBeenSelected = localStorage.getItem("selectedTagOC");
    const tags = [tagBeenSelected || ""];
    const title = titleElement.value;
    const body = bodyElement.value;
    const media = addImgButton.value;

    publishForm.reset();

    await createPost(title, body, tags, media);
    getPostes();
});
