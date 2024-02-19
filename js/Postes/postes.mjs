import { dofetch } from "../fetch/fetch.mjs";
import { POSTS_URL } from "../globleFolder/constans.mjs";
import { postsInfo } from "./singlePost.mjs";

function displayPostes(posts) {
    const postDiv = document.querySelector("#posts");

    let postContent = "";

    posts.forEach((post) => {
        postContent += postsInfo(post);
    });

    postDiv.innerHTML = postContent;
}

async function getPostes() {
    try {
        const postWithAuthor = `${POSTS_URL}?_author=true`;
        const posts = await dofetch(postWithAuthor, true);
        if (posts) {
            displayPostes(posts);
        }
    } catch (error) {
        console.error("Failed to fetch posts or profiles", error);
    }
}

export function main() {
    getPostes();
}
