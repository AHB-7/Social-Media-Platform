import { forms, marginForTP } from "../globleFolder/constans.mjs";

export function validator() {
    forms.forEach((form) => {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (marginForTP) {
                        marginForTP.classList.remove("mb-3");
                    }
                }
                form.classList.add("was-validated");
                if (marginForTP) {
                    marginForTP.classList.add("mb-3");
                }
            },
            false
        );
    });
}
