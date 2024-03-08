import { logInUser } from "../Functions/sginIn.mjs";
import { loginForm } from "../globleFolder/constans.mjs";

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    logInUser(email, password);
});
