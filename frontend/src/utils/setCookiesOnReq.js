export default function setCookiesOnReq(cookies) {
    const accessToken = cookies.get("accessToken")?.value;
    const refreshToken = cookies.get("refreshToken")?.value;

    let cookieHeader = "";

    if (accessToken) cookieHeader += `accessToken=${accessToken}; ` ;
    if (refreshToken) cookieHeader +=` refreshToken=${refreshToken}`;

    return {
        headers: {
            Cookie: cookieHeader.trim()
        }
    };
}