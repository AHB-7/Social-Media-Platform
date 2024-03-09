export function systemMsgForm() {
    const systemMsgMal = document.querySelector("#systemMsg");

    systemMsgMal.innerHTML = `
        <div class="container bg-glassy p-4 rounded-2" style="width: 20rem">
            <button type="button" class="btn-close d-block ms-auto" aria-label="Close"></button>
            <form>
                <div class="mb-3">
                    <label for="AvatarImage" class="form-label">Avatar</label>
                    <input
                        type="url"
                        class="form-control"
                        id="AvatarImage"
                        aria-describedby="AvatarImageHelp"
                        placeholder="Paste your online avatar Link here"
                    />
                </div>
                <div class="mb-3">
                    <label for="BannerImage" class="form-label">Banner</label>
                    <input
                        type="url"
                        class="form-control"
                        id="BannerImage"
                        aria-describedby="BannerImageHelp"
                        placeholder="Paste your online Banner Link here"
                    />
                    <div id="AvatarImageHelp" class="form-text text-center mt-3">
                        If your banner or your avatar <strong class="text-danger">isn't</strong> showing here then the url is <strong class="text-danger">incorrect</strong>.
                    </div>
                </div>
                <div class="text-center my-1 py-5">
                    <button type="submit" class="btn btn-brand">Save!</button>
                </div>
            </form>
        </div>
    `;

    systemMsgMal.querySelector(".btn-close").addEventListener("click", () => {
        systemMsgMal.innerHTML = "";
    });
}
