import { dofetch } from "../fetch/fetch.mjs";
import { REGESTER_URL } from "./constans.mjs";

export async function registerUser(
    fullName,
    gender,
    phoneNumber,
    email,
    password,
    aggrement
) {
    const selectedGender =
        gender === "man" ? "man" : gender === "women" ? "women" : "other";
    const isAgreementChecked = aggrement;
    await dofetch(REGESTER_URL, false, {
        method: "POST",
        body: JSON.stringify({
            name: fullName,
            gender: selectedGender,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            aggrement: isAgreementChecked,
        }),
    });
}
