import { registerUser } from "../Functions/sginUp.mjs";
import { registerForm } from "../globleFolder/constans.mjs";
import { validator } from "../validation/validation.mjs";
import {
    aggrement,
    checkNumber,
    getSelectedGender,
} from "../validation/validationFeed.mjs";

validator();

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = event.target[0].value;
    const gender = getSelectedGender();
    const phoneNumber = checkNumber();
    const email = event.target[5].value;
    const password = event.target[6].value;
    const agreementStatus = aggrement();
    if (
        !agreementStatus ||
        phoneNumber === null ||
        email === "" ||
        password === "" ||
        fullName === ""
    ) {
        return;
    }

    setTimeout(() => {
        registerUser(
            fullName,
            gender,
            phoneNumber,
            email,
            password,
            agreementStatus
        );
    }, 500);
});
