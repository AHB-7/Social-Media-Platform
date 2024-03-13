export function createAndShowAlert() {
    const alertDiv = document.createElement("div");
    alertDiv.className =
        "alert alert-danger alert-dismissible fade show m-auto ";
    alertDiv.style.maxWidth = "30rem";
    alertDiv.setAttribute("role", "alert");

    const strongText = document.createElement("strong");
    strongText.textContent = "Holy guacamole!";
    alertDiv.appendChild(strongText);

    const alertMessage = document.createTextNode(
        " Some thing definitely went wrong!"
    );
    alertDiv.appendChild(alertMessage);

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");

    const span = document.createElement("span");
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = "&times;";

    closeButton.appendChild(span);

    alertDiv.appendChild(closeButton);

    closeButton.addEventListener("click", function () {
        alertDiv.classList.remove("show");
        alertDiv.remove();
    });

    document.body.appendChild(alertDiv);
}
