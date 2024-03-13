import { delet, deletPost } from "../Functions/delet.mjs";
import { dofetch } from "../Functions/fetch.mjs";
import { createPost, inputField } from "../Functions/publish.mjs";
import {
    POSTS_URL,
    postDiv,
    publishForm,
    searchInput,
} from "../globleFolder/constans.mjs";
import { validator } from "../validation/validation.mjs";
import { postImageToView } from "../validation/postValidation.mjs";
import { postsInfo } from "./singlePost.mjs";
import { selectTags } from "./tags.mjs";
let globalPosts = [];

export function displayPostes(posts) {
    let postContent = "";
    posts.forEach((post) => {
        postContent += postsInfo(post);
    });

    postDiv.innerHTML = postContent;
}

export function searchF() {
    function displaySearch() {
        const inputValue = searchInput.value.toLowerCase();
        const filteredPosts = globalPosts.filter((post) =>
            post.body.toLowerCase().includes(inputValue)
        );
        displayPostes(filteredPosts);
    }
    searchInput.addEventListener("keyup", displaySearch);
}

export async function getPostes() {
    try {
        const postWithAuthor = `${POSTS_URL}?_author=true&_reactions=true&_comments=true`;
        globalPosts = await dofetch(postWithAuthor, true);
        if (globalPosts) {
            displayPostes(globalPosts);
            delet();
        }
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}
export async function main() {
    createPost;
    searchF();
    getPostes();
    selectTags();
    inputField();
    postImageToView();
    validator();
}
