import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { logInUser } from "../Functions/sginIn.mjs";
import { loginForm } from "../globleFolder/constans.mjs";
import { validator } from "../validation/validation.mjs";

loginForm.addEventListener("submit", (event) => {
    validator();
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    logInUser(email, password);
});
