// import { NextResponse } from "next/server";
// import middlewareAuth from "./utils/middlewareAuth";

// export async function middleware(req) {
//     const user = await middlewareAuth(req.cookies);
//     const { pathname } = req.nextUrl;

//     if (pathname.startsWith('/profile')) {
//         if (!user) {
//             return NextResponse.redirect(new URL('/signin', req.url));
//         }
//     }

//     if (pathname.startsWith('/signin') || pathname.startsWith('/signup')) {
//         if (user) {
//             return NextResponse.redirect(new URL('/', req.url));
//         }
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/profile', '/signup', '/signin']
// };
