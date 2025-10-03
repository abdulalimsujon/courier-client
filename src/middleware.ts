import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside

const AuthRoutes = ["/login","/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  USER:[],
  ADMIN:[/^\/admin/],
  MERCHANT:[]
};

export function middleware(request: NextRequest) {

  const {pathname} = request.nextUrl;
  
  const user = {
    name: "abdul alim",
    token: "this is token",
    role:"ADMIN"
  };

  if(!user){
    if(AuthRoutes.includes(pathname)){
     
      return NextResponse.next();
    }else{
      return NextResponse.redirect(new URL('/login', request.url) )
    }
  }

  if(user?.role && roleBasedRoutes[user?.role as Role]){
    const routes = roleBasedRoutes[user.role as Role];

    if(routes.some((route)=> pathname.match(route))){
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin","/marchant","/register","/login"],
}