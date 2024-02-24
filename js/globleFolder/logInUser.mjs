import { dofetch } from "../fetch/fetch.mjs";
import { addAuthToken } from "./authFuntionHanndling.mjs";
import { LOGIN_URL } from "./constans.mjs";

export async function loginUser(email, password) {
    const response = await dofetch(LOGIN_URL, false, {
        method: "POST",
        body: JSON.stringify({
            email: email + "@noroff.no",
            password: password,
        }),
    });
    const accessToken = response.accessToken;
    if (accessToken) {
        addAuthToken(accessToken);
        setTimeout(() => {
            window.location.href = "/html/feed.html";
        }, 1000);
    } else {
        // throw new console.error("something must been fixed");
    }
    addAuthToken(accessToken);
}
