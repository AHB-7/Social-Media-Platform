const profileSide = document.querySelector("#profileSide");
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function validator() {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            },

            false
        );
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function validator() {
            "use strict";

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll(".needs-validation");

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms).forEach(function (form) {
                form.addEventListener("submit", function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    } else if (form.checkValidity()) {
                        addEventListener("submit", function (event) {
                            event.preventDefault();
                            window.location.href = "../html/profile.html";
                        });
                    }
                    form.classList.add("was-validated");
                });
            });
        })();
    });
})();
console.log("");

//search

const API_BASE_URL = "https://nf.api.onrender.com";

async function registerUser(url, userData) {
    console.log("url,userData");
    try {
    } catch (e) {}
    const userToRegegister = {
        name: `test-user`,
        email: `test@example.com`,
        password: `12341234qwe`,
    };
}

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;
registerUser(registerUrl, userToRegegister);
