export default function setCookiesOnReq(cookieStore) {
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
  
    // اگر هیچ کوکی نبود
    if (!accessToken && !refreshToken) {
      return { headers: {} };
    }
  
    let cookieHeader = [];
  
    if (accessToken) {
      cookieHeader.push(`accessToken=${accessToken}`);
    }
  
    if (refreshToken) {
      cookieHeader.push(`refreshToken=${refreshToken}`);
    }
  
    return {
      headers: {
        Cookie: cookieHeader.join("; "),
      },
      credentials: "include",
    };
  }