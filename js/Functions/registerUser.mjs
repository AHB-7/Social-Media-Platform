import { dofetch } from "./fetch.mjs";
import { REGESTER_URL } from "../globleFolder/constans.mjs";

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
            const userName = regResponse.email;
            localStorage.setItem("userName", userName);
            window.location.href = "/index.html";
        } else {
            if (regResponse.errors && regResponse.errors.length > 0) {
                console.log(regResponse.errors[0].message);
                const userNameInUse =
                    document.querySelector(".user-name-inuse");
                userNameInUse.style.color = "red";
                userNameInUse.textContent = "This userName is already in use";
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
