import {
    REGESTER_URL,
    forms,
    invalidInput,
    wrongReg,
} from "../globleFolder/constans.mjs";
import { createAndShowAlert } from "../validation/alert.mjs";
import {
    sendToLocalStorage,
    toggleFormsValidation,
    toggleInvalidInputs,
    wrongInfo,
} from "../validation/validationFeed.mjs";
import { dofetch } from "./fetch.mjs";

export async function registerUser(
    fullName,
    gender,
    phoneNumber,
    email,
    password,
    aggrement
) {
    try {
        const regResponse = await dofetch(REGESTER_URL, false, {
            method: "POST",
            body: JSON.stringify({
                name: fullName,
                gender: gender,
                phoneNumber: phoneNumber,
                email: email + "@noroff.no",
                password: password,
                agreement: aggrement,
            }),
        });

        if (regResponse && regResponse.id) {
            console.log(regResponse.email);
            toggleInvalidInputs(invalidInput, false);
            toggleFormsValidation(forms, true);
            sendToLocalStorage("userName", regResponse.email);
            window.location.href = "/index.html";
        } else {
            if (regResponse.errors && regResponse.errors.length > 0) {
                wrongInfo(wrongReg, `${regResponse.errors[0].message}`, "red");
                toggleInvalidInputs(invalidInput, true);
                toggleFormsValidation(forms, false);
            }
        }
    } catch (error) {
        createAndShowAlert();
    }
}
