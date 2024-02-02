export const authConfig = {
    providers: [],
    pages: {
        signIn: "/login",
        signUp: "/register",
    },
    callbacks: {
        authorized({ auth, request }){
            const isLoggedIn = auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith("/account")
            const isOnAdminDashboard = request.nextUrl.pathname.startsWith("/admin")

            if(isOnDashboard || isOnAdminDashboard){
                if(isLoggedIn) return true
                return false;
            }

            else if (isLoggedIn){
                return Response.redirect(new URL("/dashboard", reqest.maxUrl))
            }
            return true;
        },
    },
}