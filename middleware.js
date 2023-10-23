import { NextResponse } from "next/server";
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const cookie = request.cookies.get("JWT-cookie");


  if (!cookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // Decodificar el token y obtener su valor de expiración
  try {
    const { payload } = await jwtVerify(cookie.value, new TextEncoder().encode('mySecretKey123'));
    const expiration = payload.exp;

    // Si el token ha expirado, redirige al inicio de sesión
    if (expiration < Math.floor(Date.now() / 1000)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  api: {
    externalResolver: true,
  },
  matcher: [
    "/profile",
    "/categorias/",
    "/categorias/:id/ejercicios/:url*"
  ]
};