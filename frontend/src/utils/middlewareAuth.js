import setCookiesOnReq from "./setCookiesOnReq";

export default async function middlewareAuth(cookies) {
    const options = setCookiesOnReq(cookies);

    if (!options.headers.Cookie) return null;  // :arrow_left: اگر کوکی نبود، لاگین نیست

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, {
        ...options,
        cache: "no-store",
        credentials: "include"
    });

    if (!res.ok) return null;

    const { data } = await res.json();
    return data?.user ?? null;
}