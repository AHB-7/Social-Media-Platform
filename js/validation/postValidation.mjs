import { addImgButton, imageToPost } from "../globleFolder/constans.mjs";

export function postImageToView() {
    addImgButton.addEventListener("input", (e) => {
        try {
            const inputUrl = new URL(e.target.value);
            imageToPost.src = inputUrl.href;
            addImgButton.style.color = "";
            imageToPost.classList.remove("d-none");
        } catch (error) {
            addImgButton.style.color = "red";
            imageToPost.classList.add("d-none");
        }
    });
}
