import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import { POSTS_URL } from "../globleFolder/constans.mjs";
import { getPostes } from "../postes/postes.mjs";
import { dofetch } from "./fetch.mjs";

getAuthToken();
export async function deletPost(url) {
    const response = await dofetch(url, true, {
        method: "DELETE",
    });
    if (response) {
        getPostes();
    } else {
        console.log("Failed to create post");
    }
}

export function delet() {
    const deleteBtns = document.querySelectorAll(".deletBtn");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault();
            const postId = btn.getAttribute("data-post-id");
            try {
                deletPost(`${POSTS_URL}/${postId}`);
                window.reload();
            } catch {}
        });
    });
}
