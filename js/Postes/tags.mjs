import { dropdownTagsBtn, tagToUse } from "../globleFolder/constans.mjs";
import { sendToLocalStorage } from "../validation/validationFeed.mjs";

/**
 * Handles tag selection for categorizing .
 * It sets the dropdown button text to the selected tag, toggles styling classes,
 * and manages the selected tag state in localStorage. Clicking a "clear" tag resets
 * to default state and removes the tag from localStorage.
 * This function were the key for me to make a filtering system but The server crached
 */

export function selectTags() {
    tagToUse.forEach((tag) => {
        tag.addEventListener("click", function () {
            if (this.textContent.trim() === "clear") {
                dropdownTagsBtn.textContent = "Game Tager";
                dropdownTagsBtn.classList.remove("btn-brand");
                dropdownTagsBtn.classList.add("dropdown-toggle");
                localStorage.removeItem("selectedTagOC");
            } else {
                dropdownTagsBtn.textContent = this.textContent.trim();
                dropdownTagsBtn.classList.add("btn-brand");
                dropdownTagsBtn.classList.remove("dropdown-toggle");
                sendToLocalStorage("selectedTagOC", this.textContent.trim());
            }
        });
    });
}
