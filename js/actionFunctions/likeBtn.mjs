const likeBtn = document.getElementById("post-like${post.id}");
console.log();

export async function loginUser(email, password) {
    const response = await dofetch(LOGIN_URL, false, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const accessToken = response.accessToken;
    if (accessToken) {
        addAuthToken(accessToken);
        setTimeout(() => {
            window.location.href = "/html/feed.html";
        }, 1000);
    } else {
        // throw new console.error("something must been fixed");
    }
    addAuthToken(accessToken);
}
