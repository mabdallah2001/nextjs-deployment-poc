import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;

  switch (method) {
    case "GET":
    // Return the current data
    // return NextResponse.redirect(new URL("/about", request.url));

    case "POST":
      // Add new entry
      // Extract data from request body and add to dataStore
      return NextResponse.redirect(new URL("/about", request.url));

      break;
    case "PUT":
      // Update existing entry
      // Extract data from request body and update dataStore
      break;
    case "DELETE":
      // Delete entry
      // Extract identifier from request and remove from dataStore
      break;
    default:
      // Redirect to /about for other methods
      return NextResponse.redirect(new URL("/about", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
