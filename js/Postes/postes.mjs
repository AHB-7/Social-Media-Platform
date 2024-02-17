// 1. get postes

import { dofetch } from "../fetc/fetch.mjs";
import { POSTS_URL } from "../globleFolder/constans.mjs";

// 2. display postes
function displayPostes(posts) {
    console.log(posts);
}
async function getPostes() {
    console.log("getPostes");
    const posts = await dofetch(POSTS_URL, true);
    if (posts) {
        displayPostes(posts);
    }
}

function main() {
    getPostes();
}
main();
