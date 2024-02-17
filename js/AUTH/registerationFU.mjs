import { registerForm } from "../globleFolder/constans.mjs";
import { registerUser } from "../globleFolder/registerUser.mjs";

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = event.target[0].value + event.target[1].value;
    const gender = {
        man: event.target[2].value,
        women: event.target[3].value,
        other: event.target[4].value,
    };
    const phoneNumber = event.target[5].value;
    const email = event.target[6].value;
    const password = event.target[7].value;
    const aggrement = event.target[8].value;
    registerUser(fullName, gender, phoneNumber, email, password, aggrement);
});
