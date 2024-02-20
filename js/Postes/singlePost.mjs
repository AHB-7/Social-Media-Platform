export function userProfile(post) {
    return `
    <div class="d-flex justify-content-between align-items-center py-2">
    <div class="container col-auto">
        <img
        ${post.author.avatar || "no Images"}
        />
    </div>
    <div class="col lh-sm">
        <h6 class="m-0">${post.author.name}</h6>
        <p class="text-muted m-0">
            <i class="fa-solid fa-calendar-days"></i> ${new Date(
                post.created
            ).toLocaleDateString()}
        </p>
    </div>
    <div class="col-auto position-relative">
        <div
            class="dropdown-toggle d-flex position-absolute bottom-100 end-0 p-1 rounded-1 me-2 fs-4 text-dark"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            role="button"
        >
            <small class="text-body-secondary fs-6"></small>
        </div>
        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
            <li>
                <a class="dropdown-item" href="#">
                    Don't show
                </a>
            </li>
            <li>
                <a class="dropdown-item text-danger" href="#">
                    Report
                </a>
            </li>
        </ul>
    </div>
</div>             
             
    `;
}
export function postImg(post) {
    if (!post.media) {
        return "";
    }
    return `
    <img src="${post.media}" class="card-img-centered" alt="post test" />
`;
}
export function postContent(post) {
    return `
    <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
    </div>
`;
}
export function postAction(post) {
    return `
    <div class="card-footer row m-0 p-0">
        <div class="btn-group p-0">
            <button
                type="button"
                class="btn btn-post d-flex align-items-center justify-content-center"
            >
                <i class="fa-solid fa-check-double"></i>
                <span class="m-0">
                ${
                    post._count.reactions || "Be First"
                } <span class="d-none d-lg-inline">Agreed</span>
                </span>
            </button>
            <button
                type="button"
                class="btn btn-post d-flex align-items-center justify-content-center gap-2"
            >
                <i class="fa-solid fa-comment"></i>
                <span class="m-0">
                     ${post._count.comments}
                    <span class="d-none d-lg-inline">Comments</span>
                </span>
            </button>
            <button
                type="button"
                class="btn btn-post d-flex align-items-center justify-content-center gap-2"
            >
                <i class="fa-solid fa-share-nodes"></i>
                <span class="m-0">
                    34 <span class="d-none d-lg-inline">Shared</span>
                </span>
            </button>
        </div>
    </div>  
`;
}

export function postsInfo(post, profile) {
    return `<div class="col">
    <div class="card h-100">
    ${userProfile(post, profile)}
    ${postImg(post, profile)}
    ${postContent(post, profile)}
    ${postAction(post, profile)}
    </div>
    </div>`;
}
