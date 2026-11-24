module.exports = {

"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next-auth [external] (next-auth, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next-auth", () => require("next-auth"));

module.exports = mod;
}}),
"[externals]/next-auth/providers/azure-ad [external] (next-auth/providers/azure-ad, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next-auth/providers/azure-ad", () => require("next-auth/providers/azure-ad"));

module.exports = mod;
}}),
"[project]/src/pages/api/auth/[...nextauth].ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "authOptions": ()=>authOptions,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth [external] (next-auth, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$azure$2d$ad__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$azure$2d$ad$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/providers/azure-ad [external] (next-auth/providers/azure-ad, cjs)");
;
;
const env = ("TURBOPACK compile-time value", "development");
const nextBasePath = process.env.NEXT_BASE_PATH;
const basePath = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : nextBasePath || "";
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$azure$2d$ad__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$azure$2d$ad$2c$__cjs$29$__["default"])({
            clientId: process.env.AZURE_AD_CLIENT_ID,
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
            tenantId: process.env.AZURE_AD_TENANT_ID,
            authorization: {
                params: {
                    //Solicita la identidad básica del usuario y un token de acceso específico para autenticar
                    scope: `openid email profile api://${process.env.AZURE_AD_CLIENT_ID}/acceso_backend`
                }
            }
        })
    ],
    debug: ("TURBOPACK compile-time value", "development") === "development",
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
        updateAge: 60 * 60
    },
    pages: {
        signIn: basePath || "/inventarioit"
    },
    callbacks: {
        async redirect ({ url, baseUrl }) {
            try {
                const target = new URL(url);
                // si la redirección es interna, úsala; si no, manda al dashboard
                if (target.origin === baseUrl) {
                    return target.pathname === "/" ? `${baseUrl}${basePath}/dashboard` : url;
                }
            } catch  {
                // url relativa
                if (url.startsWith("/")) {
                    return url === "/" ? `${baseUrl}${basePath}/dashboard` : `${baseUrl}${basePath}${url}`;
                }
            }
            return `${baseUrl}${basePath}/dashboard`;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async signIn ({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true;
            if ("TURBOPACK compile-time truthy", 1) {
                return true;
            } else //TURBOPACK unreachable
            ;
        },
        async jwt ({ token, account, profile }) {
            if (profile?.oid) token.sub = profile.oid;
            if (profile?.name) token.name = profile.name;
            if (profile?.picture) token.image = profile.picture;
            if (profile?.preferred_username) token.preferred_username = profile.preferred_username;
            if (account?.id_token) token.id_token = account.id_token;
            if (account?.access_token) token.access_token = account.access_token;
            return token;
        },
        async session ({ session, token }) {
            if (session.user) {
                session.user.id = token.sub;
                session.user.id_token = token?.id_token;
                session.user.preferred_username = token.preferred_username;
                session.user.access_token = token.access_token;
            }
            return session;
        }
    },
    /*     cookies: {
        sessionToken: {
            name: `__Secure-next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production" ? true : false,
                path: `${process.env.NEXT_PUBLIC_REDIRECT_URL}`,
                domain: '',
            },
        }
    }, */ events: {}
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$29$__["default"])(authOptions);
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9286a089._.js.map