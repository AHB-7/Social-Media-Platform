import { dofetch } from "../Functions/fetch.mjs";
import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";

export async function updateUserProfile(url, userData) {
    try {
        const authToken = getAuthToken();
        const response = await dofetch(url, true, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(userData),
        });
    } catch (error) {
        console.error("Could not update profile:", error);
    }
}

export const newProfileMedia = {
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLZcZu5vtgN_CUMz8NB-Y4z7aOKUPZBacSAYYesKx8J-F0=s96-c-rg-br100",
    banner: "https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.6435-9/198385692_3991012034315824_1770514468917173534_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Fdv6Y8fTGkoAX-MzVwu&_nc_ht=scontent.fsvg1-1.fna&oh=00_AfADGvl7iiPP1UqQINo_pWx8-kL-JnathEWjx59EYV8X2A&oe=6613F431",
};

// profileMedia

const profileMedia = document.getElementById("profileMediaChange");
function sss() {
    console.log("hhasdashh");
}

profileMedia.addEventListener("click", sss());

// profileMedia
