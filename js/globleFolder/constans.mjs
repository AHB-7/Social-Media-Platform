const BASE_URL = "https://api.noroff.dev/api/v1";
export const loginForm = document.getElementById("loginForm");
export const registerForm = document.getElementById("registerForm");
export const REGESTER_URL = `${BASE_URL}/social/auth/register`;
export const LOGIN_URL = `${BASE_URL}/social/auth/login`;
export const POSTS_URL = `${BASE_URL}/social/posts`;
export const PROFILE_URL = `${BASE_URL}/social/profiles`;
export const postLike = document.getElementById(".post-like");
export const postDiv = document.querySelector("#posts");
export const publishForm = document.getElementById("publishForm");
export const invalidInput = document.querySelectorAll(".invalid-input");
export const whatWrong = document.querySelector(".login-error");
export const wrongReg = document.querySelector(".wrong-reg");
export const marginForTP = document.querySelector("#margenFortooltips");
export const forms = document.querySelectorAll(".needs-validation");
export const profileDiv = document.querySelector("#profileDiv");
export const searchInput = document.getElementById("searchInput");
export const userName = localStorage.getItem("userName");
export const systemMessage = document.querySelector("#systemMessage");
export const tagToUse = document.querySelectorAll(".dropdown-item");
export const dropdownTagsBtn = document.getElementById("dropdownMenuButton");
export const gameImages = {
    "Counter Strike": "../../assets/g/counter_strike_image.svg",
    Fortnite: "../../assets/g/Fortnite.svg",
    "League of Legends": "../../assets/g/league_of_legends_image.svg",
    "Sims 4": "../../assets/g/sims_4_image.svg",
    Valorent: "../../assets/g/valorent_image.svg",
    GTA: "../../assets/g/GTA.svg",
    clear: "",
};
export const addImgButton = document.getElementById("imgainput");
export const titleElement = document.getElementById("title");
export const bodyElement = document.getElementById("validationTooltip1");
export const imageToPost = document.getElementById("impToPost");
