import { dofetch } from "../fetch/fetch.mjs";
import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import { PUBLISH_URL, publishForm } from "../globleFolder/constans.mjs";
getAuthToken();
async function createPost(title, body, tags = [], media = "") {
    const response = await dofetch(PUBLISH_URL, true, {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            tags,
            media,
        }),
    });
    if (response) {
        console.log(response);
    } else {
        console.log("Failed to create post"); // Adding a log for failure case
    }
    console.log(response);
}

publishForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const titleElement = document.getElementById("validationTooltip1");
    const title = titleElement.value;
    const body = "";
    const media =
        "https://live.staticflickr.com/8446/7991872876_55cd9e7b25_n.jpg";
    const tags = [];
    await createPost(title, body, ["exampleTag"], media);
    console.log(title);
});
