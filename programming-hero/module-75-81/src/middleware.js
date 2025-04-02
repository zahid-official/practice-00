import { NextResponse } from "next/server";


export const middleware = (request) => {
    const data = {
        role: "admin",
        email: "admin@test.com"
    }

    // get cookies
    console.log(request.cookies.get("next.js-token").value);
    
    const checkAdmin = data.role === "admin"
    const checkServices = request.nextUrl.pathname.startsWith("/services");

    if(!checkAdmin && checkServices){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
};

export const config = {
    matcher: '/services/:path*',
  }