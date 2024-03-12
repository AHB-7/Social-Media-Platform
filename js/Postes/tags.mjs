import { dropdownTagsBtn, tagToUse } from "../globleFolder/constans.mjs";
import { sendToLocalStorage } from "../validation/validationFeed.mjs";

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
