import { delet, deletPost } from "../Functions/delet.mjs";
import { dofetch } from "../Functions/fetch.mjs";
import { createPost } from "../Functions/publish.mjs";
import { POSTS_URL, postDiv, searchInput } from "../globleFolder/constans.mjs";
import { validator } from "../validation/validation.mjs";
import { postsInfo } from "./singlePost.mjs";
import { selectTags } from "./tags.mjs";

function displayPostes(posts) {
    let postContent = "";
    posts.forEach((post) => {
        postContent += postsInfo(post);
    });

    postDiv.innerHTML = postContent;
}

let globalPosts = [];

function displaySearch() {
    const inputValue = searchInput.value.toLowerCase();
    const filteredPosts = globalPosts.filter((post) =>
        post.body.toLowerCase().includes(inputValue)
    );
    displayPostes(filteredPosts);
}
searchInput.addEventListener("keyup", displaySearch);

export async function getPostes() {
    try {
        const postWithAuthor = `${POSTS_URL}?_author=true`;
        const posts = await dofetch(postWithAuthor, true);
        if (posts) {
            globalPosts = await dofetch(postWithAuthor, true);
            displayPostes(globalPosts);
            delet();
        }
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}

getPostes();
selectTags();
const textarea = document.getElementById("validationTooltip1");
textarea.addEventListener("input", autoResize, false);

function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
}

validator();
