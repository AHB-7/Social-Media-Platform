import { dofetch } from "./fetch.mjs";
import { addAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import { LOGIN_URL } from "../globleFolder/constans.mjs";

const email = localStorage.getItem("userName");
console.log(email);
const emailToName = email.replace("@noroff.no", "");
document.getElementById("validationTooltip0").value = emailToName;

export async function logInUser(email, password) {
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
        const err = document.querySelectorAll(".control-input");
        const textIndicator = document.querySelector(".change-text");
        textIndicator.innerHTML = "Invalid email or password";
        err.forEach((e) => {
            e.style.color = "red";
        });
    }
    addAuthToken(accessToken);
}
