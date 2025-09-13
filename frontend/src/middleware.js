import middlewareAuth from "./utils/middlewareAuth";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const { pathname } = req.nextUrl;
    const user = await middlewareAuth(req.cookies)

    if(pathname.startsWith('/profile')){
        if(!user){
            const signinUrl = new URL('/signin', req.nextUrl)
            return NextResponse.redirect(signinUrl)
        }
    }

    if (pathname.startsWith('/signup') || pathname.startsWith('/signin')) {
        if (user) {
            const homeUrl = new URL('/', req.nextUrl)
            return NextResponse.redirect(homeUrl)
        }
    }
}

export const config = {
    matcher: ['/profile', '/signup', '/signin']
}