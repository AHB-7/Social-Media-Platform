import { dofetch } from "../fetch/fetch.mjs";
import { POSTS_URL, postDiv, postLike } from "../globleFolder/constans.mjs";
import { postsInfo } from "./singlePost.mjs";

export function displayPostes(posts) {
    let postContent = "";
    posts.forEach((post) => {
        postContent += postsInfo(post);
    });

    postDiv.innerHTML = postContent;
}
let globalPosts = [];

const searchInput = document.getElementById("searchInput");

function displaySearch() {
    const inputValue = searchInput.value.toLowerCase();
    const filteredPosts = globalPosts.filter((post) =>
        post.body.toLowerCase().includes(inputValue)
    );
    displayPostes(filteredPosts);
}
searchInput.addEventListener("input", displaySearch);

async function getPostes() {
    try {
        const postWithAuthor = `${POSTS_URL}?_author=true`;
        const posts = await dofetch(postWithAuthor, true);
        if (posts) {
            globalPosts = posts;
            displayPostes(posts);
        }
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}

export function main() {
    getPostes();
}
