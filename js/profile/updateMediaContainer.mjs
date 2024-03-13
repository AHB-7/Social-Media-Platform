import { systemMessage } from "../globleFolder/constans.mjs";

export function displaySystemMsgContent(mediaRes) {
    systemMessage.innerHTML = `
        <div class="container bg-glassy bg-dark p-4 rounded-4 border" style="width: 20rem">
            <button type="button" class="btn-close d-block ms-auto mb-4" aria-label="Close" id="closeBtn"></button>
            <div class="d-flex align-items-center justify-content-center flex-column rounded-1"
                style="background-image: url(${mediaRes.banner});" id="bannerImgShow">
                <img src="${mediaRes.avatar}" alt="profile image" class="rounded-circle m-auto object-fit-cover p-3" height="110" width="110" 
                id="avatarImageShow"/>
            </div>
            <form>
                <div class="mb-3">
                    <label for="avatarImageInput" class="form-label">Avatar</label>
                    <input type="text" class="form-control" id="avatarImageInput" aria-describedby="AvatarImageHelp" placeholder="Paste your online avatar Link here"/>
                </div>
                <div class="mb-3">
                    <label for="bannerImageInput" class="form-label">Banner</label>
                    <input type="text" class="form-control" id="bannerImageInput" aria-describedby="BannerImageHelp" placeholder="Paste your online Banner Link here"/>
                    <div id="avtarImageHelp" class="form-text text-center mt-3">
                        If your banner or your avatar <strong class="text-danger">isn't</strong> showing here then the url is <strong class="text-danger">incorrect</strong>.
                    </div>
                </div>
                <div class="text-center my-1 py-5">
                    <button type="submit" class="btn btn-brand" id="saveMedia">Save!</button>
                </div>
            </form>
        </div>
    `;
}

export function editProfileContainer(mediaRes) {
    displaySystemMsgContent(mediaRes);
}
