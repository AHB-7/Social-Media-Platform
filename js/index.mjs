import { main } from "./Postes/postes.mjs";
import { validator } from "./validation/validation.mjs";

validator();
if (window.location.pathname !== "/html/signup.html" && window.location.pathname !== "/index.html") {
   main();
}

// function setupSearch(posts) {
//     const searchInput = document.getElementById("searchInput");

//     searchInput.addEventListener("keydown", function () {
//         const filteredPosts = posts.filter(
//             (post) => post.id === searchInput.value
//         );
//         displayPosts(filteredPosts);
//     });
// }
// setupSearch(posts);
