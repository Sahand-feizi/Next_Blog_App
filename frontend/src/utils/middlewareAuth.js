import setCookiesOnReq from "./setCookiesOnReq";

export default async function middlewareAuth(cookies) {
    const options = setCookiesOnReq(cookies)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`, options)
    const { data } = await res.json()
    const {user} = data || {}
    return user
}