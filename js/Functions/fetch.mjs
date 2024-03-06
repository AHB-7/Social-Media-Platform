import { getAuthToken } from "../globleFolder/authFuntionHanndling.mjs";

export async function dofetch(url, isAuth = false, options = {}) {
    try {
        const headers = { "Content-type": "application/json" };
        if (isAuth === true) {
            const authToke = getAuthToken();
            headers["Authorization"] = `Bearer ${authToke}`;
        }
        const combainedOptions = { headers, ...options };
        const resposne = await fetch(url, combainedOptions);
        const json = await resposne.json();
        return json;
    } catch (e) {
        throw Error();
    } finally {
        //
    }
}
