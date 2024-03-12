import { dofetch } from "../Functions/fetch.mjs";
import { createPost } from "../Functions/publish.mjs";
import { POSTS_URL, postDiv, searchInput } from "../globleFolder/constans.mjs";
import { postsInfo } from "./singlePost.mjs";

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
        }
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}
getPostes();

