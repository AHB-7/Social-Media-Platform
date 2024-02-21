export function reAct() {
    postLike.addEventListener("click", function postRact(event) {
        if (event.target.closest(".post-like")) {
            // Perform your action here, e.g., logging post interaction
            console.log("Post action clicked");

            // Here, you could differentiate further based on the type of button clicked
            // For example, checking if it's the like button specifically
            if (event.target.id === "post-like") {
                console.log("Like button clicked");
                // Here you can call a function to handle the like action
            }
        }
    });
}
