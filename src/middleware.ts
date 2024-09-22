import { NextResponse } from "next/server";


// USER LOGGED IN OR NOT
const isLoggedIn: boolean = true;




// MIDDLEWARE CHECK TO VERIFY USER AUTHENTICATION BEFORE ACCESSING THE VIEW PRODUCT PAGE

export function middleware(request: Request){
    if(!isLoggedIn && request.url === 'http://localhost:3000/product-preview'){
  return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
}