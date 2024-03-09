export function wrongInfo(title, txt, color) {
    title.innerHTML = txt;
    title.style.color = color;
}
export function getSelectedGender() {
    const genderMan = document.querySelector("#option5:checked");
    const genderWomenn = document.querySelector("#option6:checked");
    const genderOther = document.querySelector("#option8:checked");

    if (genderMan) {
        return "man";
    } else if (genderWomenn) {
        return "women";
    } else if (genderOther) {
        return "other";
    } else {
        return null;
    }
}

export function aggrement() {
    const isAgreed = document.querySelector("#invalidCheck:checked");

    if (isAgreed) {
        return "Aggred";
    } else {
        return null;
    }
}
export function checkNumber() {
    const phoneNumber = document.querySelector("#validationTooltip03").value;
    if (/^\d+$/.test(phoneNumber)) {
        return phoneNumber;
    } else {
        return null;
    }
}

// feedback from server
export function toggleFormsValidation(forms, isValidated) {
    forms.forEach((form) => {
        if (isValidated) {
            form.classList.add("was-validated");
        } else {
            form.classList.remove("was-validated");
        }
    });
}

export function toggleInvalidInputs(invalidInputs, isInvalid) {
    invalidInputs.forEach((input) => {
        if (isInvalid) {
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    });
}

// user name local storage

export function sendToLocalStorage(key, responseValue) {
    const value = responseValue;
    localStorage.setItem(key, value);
}
export function emailCheck() {
    const email = localStorage.getItem("userName");
    if (email) {
        const emailToName = email.replace("@noroff.no", "");
        document.getElementById("validationTooltip0").value = emailToName;
    }
}
