import { logIng } from "../globleFolder/constans.mjs";
import { loginUser } from "../globleFolder/logInUser.mjs";

logIng.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    loginUser(email, password);
});
