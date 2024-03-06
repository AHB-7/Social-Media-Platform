import { registerForm } from "../globleFolder/constans.mjs";
import { registerUser } from "../Functions/registerUser.mjs";

export function getSelectedGender() {
    if (document.querySelector("#option5:checked")) {
        return "man";
    } else if (document.querySelector("#option6:checked")) {
        return "women";
    } else if (document.querySelector("#option8:checked")) {
        return "other";
    } else {
        return null;
    }
}

export function aggrement() {
    if (document.querySelector("#invalidCheck:checked")) {
        return "Aggred";
    } else {
        return null;
    }
}

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fullName = event.target[0].value;
    const gender = getSelectedGender();
    const phoneNumber = event.target[4].value;
    const email = event.target[5].value;
    const password = event.target[6].value;
    const agreementStatus = aggrement();
    if (agreementStatus === null) {
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
