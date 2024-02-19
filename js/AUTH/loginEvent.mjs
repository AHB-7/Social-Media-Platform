import { logInForm } from "../globleFolder/constans.mjs";
import { loginUser } from "../globleFolder/logInUser.mjs";

logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    loginUser(email, password);
});
