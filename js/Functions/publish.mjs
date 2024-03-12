import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import { PUBLISH_URL, publishForm } from "../globleFolder/constans.mjs";
import { getPostes } from "../postes/postes.mjs";
import { dofetch } from "./fetch.mjs";

getAuthToken();
export async function createPost(title, body, tags = [], media = "") {
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

    const titleElement = document.getElementById("title");
    const bodyElement = document.getElementById("validationTooltip1");
    const title = titleElement.value;
    const tagebeenSelceted = localStorage.getItem("selectedTagOC");
    const body = bodyElement.value;
    const addImgButton = document.getElementById("imgainput");
    const media = addImgButton.value;
    const tags = [tagebeenSelceted || ""];
    await createPost(title, body, tags, media);
    await getPostes();
});
