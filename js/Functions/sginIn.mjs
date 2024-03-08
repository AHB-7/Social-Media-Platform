import { addAuthToken } from "../globleFolder/authFuntionHanndling.mjs";
import {
    LOGIN_URL,
    forms,
    invalidInput,
    whatWrong,
} from "../globleFolder/constans.mjs";
import {
    emailCheck,
    toggleFormsValidation,
    toggleInvalidInputs,
    wrongInfo,
} from "../validation/validationFeed.mjs";
import { dofetch } from "./fetch.mjs";

emailCheck();

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
        toggleInvalidInputs(invalidInput, false);
        toggleFormsValidation(forms, true);
        wrongInfo(whatWrong, `Every Thing Look Good`, "green");
        addAuthToken(accessToken);
        setTimeout(() => {
            window.location.href = "/html/feed.html";
        }, 1000);
    } else {
        toggleInvalidInputs(invalidInput, true);
        toggleFormsValidation(forms, false);
        wrongInfo(whatWrong, `${response.errors[0].message}`, "red");
    }
    addAuthToken(accessToken);
}
