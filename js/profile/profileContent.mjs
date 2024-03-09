export function profileImg(profileRes) {
    if (!profileRes.avatar) {
        return `
        <img
        src="../assets/profile-img.svg"
        alt="profile image"
        class="rounded-circle m-auto mb-3"
        height="130"
        width="130"
    />

    `;
    }
    return `
        <img
        src="${profileRes.avatar}"
        alt="profile image"
        class="rounded-circle m-auto mb-3"
        height="130"
        width="130"
    />
    `;
}
export function profileActions(profileRes) {
    return `
        <div>
            <div class="row row-cols-3 mt-4 w-100 col-7">
                <div class="align-items-center justify-content-center d-flex flex-column">
                    <div class="position-relative z-3">
                        <i class="fa-solid fa-paper-plane fs-4"></i>
                        <span class="position-absolute bottom-50 p-1 z-n1 end-50 badge rounde-3 text-black bg-brand me-2">
                            ${profileRes._count.posts}
                            <span class="visually-hidden">Posts</span>
                        </span>
                    </div>
                    <p class="m-0 pt-1">Posts</p>
                </div>
                <div class="align-items-center justify-content-center d-flex flex-column">
                    <div class="position-relative z-3">
                        <i class="fa-solid fa-user-group fs-4"></i>
                        <span class="position-absolute bottom-50 z-n1 end-50 badge p-1 rounde-3 text-black bg-brand me-2">
                            ${profileRes._count.following}
                            <span class="visually-hidden">Following</span>
                        </span>
                    </div>
                    <p class="m-0 pt-1">following</p>
                </div>
                <div class="align-items-center justify-content-center d-flex flex-column z-3">
                    <div class="position-relative">
                        <i class="fa-solid fa-user-group fs-4"></i>
                        <span class="position-absolute bottom-50 z-n1 end-50 p-1 badge rounde-3 text-black bg-brand me-2">
                            ${profileRes._count.followers}
                            <span class="visually-hidden">Followers</span>
                        </span>
                    </div>
                    <p class="m-0 pt-1">Followers</p>
                </div>
            </div>
        </div>
   `;
}
export function profileData(profileRes) {
    return `
    <section class="col-lg-5 col-md-4 col-sm-6")
    >
    <div class="container w-100 p-0 bg-glassy py-2 px-1 mb-3">
        <div class="position-relative">
            <div
                class="dropdown-toggle d-flex position-absolute top-0 end-0 p-1 me-3 rounded-1 fs-2 "
                data-bs-toggle="dropdown"
                aria-expanded="false"
                role="button"
            ></div>
            <ul
                class="dropdown-menu dropdown-menu-dark dropdown-menu-end p-0"
            >
                <li >
                    <a class="dropdown-item" id="profileMediaChange">Edite</a>
                </li>
            </ul>
            <div
                class="d-flex alingn-items-center justify-content-center flex-column m-2"
            >
                <div
                    class="d-flex alingn-items-center justify-content-center flex-column "
                    style="background-image: url(${profileRes.banner});"
                >
                    ${profileImg(profileRes)}
                    <h1 class="text-center">${profileRes.name}</h1>
                </div>
               ${profileActions(profileRes)}
            </div>
        </div>
    </div>
    <div class="accordion bg-glassy">
        <div class="accordion-item bg-glassy">
            <h2 class="accordion-header">
                <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordionBio"
                    aria-expanded="true"
                    aria-controls="accordionBio"
                >
                    About Me:
                </button>
            </h2>
            <div
                id="accordionBio"
                class="accordion-collapse collapse show"
            >
                <div class="accordion-body">
                    <ul class="list-unstyled">
                        <li>
                            <strong>Name : </strong>
                            ${profileRes.name}
                        </li>
                        <li>
                            <strong>Birth Day : </strong
                            >00/00/1000
                        </li>
                        <li><strong>From : </strong>Mars</li>
                        <li>
                            <strong>Peronal Link : </strong>
                            <a href="">www.mars.xcx</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item bg-glassy">
            <h2 class="accordion-header">
                <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#game-collapse"
                    aria-expanded="true"
                    aria-controls="game-collapse"
                >
                    Games Currently Playing
                </button>
            </h2>
            <div
                id="game-collapse"
                class="accordion-collapse collapse show"
            >
                <div class="accordion-body">
                    <div
                        class="d-flex align-items-center justify-content-start flex-row flex-wrap gap-1"
                    >
                        <div>
                            <img
                                src="../assets/games/fortnite.svg"
                                alt="fortnite"
                                class="w-game"
                            />
                        </div>
                        <div>
                            <img
                                src="../assets/games/valorent.svg"
                                alt="valorent"
                                class="w-game"
                            />
                        </div>
                        <div>
                            <img
                                src="../assets/games/gta.svg"
                                alt="gta"
                                class="w-game"
                            />
                        </div>
                        <div>
                            <img
                                src="../assets/games/lol.svg"
                                alt="lol"
                                class="w-game"
                            />
                        </div>
                        <div>
                            <img
                                src="../assets/games/csgo.svg"
                                alt="csgo"
                                class="w-game"
                            />
                        </div>
                        <div>
                            <img
                                src="../assets/games/sims.svg"
                                alt="sims"
                                class="w-game"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-item bg-glassy">
            <h2 class="accordion-header">
                <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#information-accordion"
                    aria-expanded="true"
                    aria-controls="information-accordion"
                >
                    Bio
                </button>
            </h2>
            <div
                id="information-accordion"
                class="accordion-collapse collapse show"
            >
                <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quis quas ad et natus
                    voluptate aut perferendis beatae quae,
                    delectus quod harum iusto ratione tempora
                    non suscipit consequatur in dolore labore?
                </div>
            </div>
        </div>
    </div>
</section>
`;
}
export function profilePostes(profileRes) {
    return `
    <section class="col-lg-7 col-md-8 col-sm-6">
    <div
        class="pt-3 px-1 d-flex justify-content-between align-items-center bg-glassy mt-3"
    >
        <h2 class="text-white">Your Latest Posts :</h2>
        <span
            role="button"
            class="link-brand"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePostes"
            aria-expanded="false"
            aria-controls="collapsePostes"
        >
            Hide
        </span>
    </div>
    <div
        class="row row-cols-1 g-4 collapse show"
        id="collapsePostes"
    >
        <div class="col">
            <div class="card h-100">
                <img
                    src="https://cdn.vox-cdn.com/thumbor/iaRO8ZRmYP7vNgG5yPiBME1G1Wg=/0x0:3011x1447/1200x675/filters:focal(1123x329:1603x809)/cdn.vox-cdn.com/uploads/chorus_image/image/66954486/VALORANT_Jett_Red_crop.0.jpg"
                    class="card-img-top"
                    alt="post test"
                />
                <div class="card-body position-relative">
                    <h5 class="card-title">Game Name</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Tenetur, velit unde,
                        animi voluptate excepturi maiores alias
                        ratione ducimus nobis quo facilis
                        placeat suscipit sunt dolor porro culpa,
                        fugiat quod soluta.
                    </p>
                    <div
                        class="dropdown-toggle d-flex position-absolute top-0 end-0 p-1 rounded-1 my-2 me-3 fs-4 text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                    >
                        <small class="text-body-secondary fs-6">
                            1 hour ago</small
                        >
                    </div>
                    <ul
                        class="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    >
                        <li>
                            <a class="dropdown-item" href="#"
                                >Edite</a
                            >
                        </li>
                        <li>
                            <a
                                class="dropdown-item text-danger"
                                href="#"
                            >
                                Delet
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-footer row m-0 p-0">
                    <div class="btn-group p-0">
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center"
                        >
                            <i
                                class="fa-solid fa-check-double"
                            ></i>
                            <span class="m-0">
                                120
                                <span class="d-none d-lg-inline"
                                    >Agreed</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i class="fa-solid fa-comment"></i>
                            <span class="m-0">
                                12<span
                                    class="d-none d-lg-inline"
                                    >Comments</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i
                                class="fa-solid fa-share-nodes"
                            ></i>
                            <span class="m-0">34</span>
                            <span class="d-none d-lg-inline"
                                >Shared</span
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        This card has supporting text below as a
                        natural lead-in to additional content.
                    </p>
                </div>
                <div
                    class="dropdown-toggle d-flex position-absolute top-0 end-0 p-1 rounded-1 my-2 me-3 fs-4 text-dark"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    role="button"
                >
                    <small class="text-body-secondary fs-6">
                        24.12.2023</small
                    >
                </div>
                <ul
                    class="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                >
                    <li>
                        <a class="dropdown-item" href="#"
                            >Edite</a
                        >
                    </li>
                    <li>
                        <a
                            class="dropdown-item text-danger"
                            href="#"
                        >
                            Delet
                        </a>
                    </li>
                </ul>
                <div class="card-footer row m-0 p-0">
                    <div class="btn-group p-0">
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center"
                        >
                            <i
                                class="fa-solid fa-check-double"
                            ></i>
                            <span class="m-0">
                                120
                                <span class="d-none d-lg-inline"
                                    >Agreed</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i class="fa-solid fa-comment"></i>
                            <span class="m-0">
                                12<span
                                    class="d-none d-lg-inline"
                                    >Comments</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i
                                class="fa-solid fa-share-nodes"
                            ></i>
                            <span class="m-0">34</span>
                            <span class="d-none d-lg-inline"
                                >Shared</span
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img
                    src="https://www.cnet.com/a/img/resize/0ef788248caeea67f4c80ade63a6e95f49bf3a2a/hub/2015/12/17/b5fed3aa-a35c-4dc9-ad71-fc17118ebcb1/lol.jpg?auto=webp&width=1920"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body position-relative">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        This is a wider card with supporting
                        text below as a natural lead-in to
                        additional content. This card has even
                        longer content than the first to show
                        that equal height action.
                    </p>
                    <div
                        class="dropdown-toggle d-flex position-absolute top-0 end-0 p-1 rounded-1 my-2 me-3 fs-4 text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                    >
                        <small class="text-body-secondary fs-6">
                            22.12.2023</small
                        >
                    </div>
                    <ul
                        class="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    >
                        <li>
                            <a class="dropdown-item" href="#"
                                >Edite</a
                            >
                        </li>
                        <li>
                            <a
                                class="dropdown-item text-danger"
                                href="#"
                            >
                                Delet
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-footer row m-0 p-0">
                    <div class="btn-group p-0">
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center"
                        >
                            <i
                                class="fa-solid fa-check-double"
                            ></i>
                            <span class="m-0">
                                120
                                <span class="d-none d-lg-inline"
                                    >Agreed</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i class="fa-solid fa-comment"></i>
                            <span class="m-0">
                                12<span
                                    class="d-none d-lg-inline"
                                    >Comments</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i
                                class="fa-solid fa-share-nodes"
                            ></i>
                            <span class="m-0">34</span>
                            <span class="d-none d-lg-inline"
                                >Shared</span
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img
                    src="https://www.cnet.com/a/img/resize/0ef788248caeea67f4c80ade63a6e95f49bf3a2a/hub/2015/12/17/b5fed3aa-a35c-4dc9-ad71-fc17118ebcb1/lol.jpg?auto=webp&width=1920"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body position-relative">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                        This is a wider card with supporting
                        text below as a natural lead-in to
                        additional content. This card has even
                        longer content than the first to show
                        that equal height action.
                    </p>
                    <div
                        class="dropdown-toggle d-flex position-absolute top-0 end-0 p-1 rounded-1 my-2 me-3 fs-4 text-dark"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        role="button"
                    >
                        <small class="text-body-secondary fs-6">
                            24.12.2023</small
                        >
                    </div>
                    <ul
                        class="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    >
                        <li>
                            <a class="dropdown-item" href="#"
                                >Edite</a
                            >
                        </li>
                        <li>
                            <a
                                class="dropdown-item text-danger"
                                href="#"
                            >
                                Delet
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card-footer row m-0 p-0">
                    <div class="btn-group p-0">
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center"
                        >
                            <i
                                class="fa-solid fa-check-double"
                            ></i>
                            <span class="m-0">
                                120
                                <span class="d-none d-lg-inline"
                                    >Agreed</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i class="fa-solid fa-comment"></i>
                            <span class="m-0">
                                12<span
                                    class="d-none d-lg-inline"
                                    >Comments</span
                                >
                            </span>
                        </button>
                        <button
                            type="button"
                            class="btn btn-post d-flex align-items-center justify-content-center gap-2"
                        >
                            <i
                                class="fa-solid fa-share-nodes"
                            ></i>
                            <span class="m-0">34</span>
                            <span class="d-none d-lg-inline"
                                >Shared</span
                            >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;
}
// export function postAction(profile) {
//     return `

// `;
// }

export function displayProfileContent(profileRes) {
    return `
    <section class="row text-white">
    ${profileData(profileRes)}
    ${profilePostes(profileRes)}
    
    </section>`;
}
