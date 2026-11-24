import NextAuth, { type NextAuthOptions } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

const env = process.env.NODE_ENV;
const nextBasePath = process.env.NEXT_BASE_PATH;
const basePath = env === "production" ? nextBasePath || "/inventarioit" : nextBasePath || "";

export const authOptions: NextAuthOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID as string,
      authorization: {
        params: {
        //Solicita la identidad básica del usuario y un token de acceso específico para autenticar
          scope: `openid email profile api://${process.env.AZURE_AD_CLIENT_ID}/acceso_backend`,
        },
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60,
  },
  pages: {
    signIn: basePath || "/inventarioit",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      try {
        const target = new URL(url);
        // si la redirección es interna, úsala; si no, manda al dashboard
        if (target.origin === baseUrl) {
          return target.pathname === "/" ? `${baseUrl}${basePath}/dashboard` : url;
        }
      } catch {
        // url relativa
        if (url.startsWith("/")) {
          return url === "/" ? `${baseUrl}${basePath}/dashboard` : `${baseUrl}${basePath}${url}`;
        }
      }
      return `${baseUrl}${basePath}/dashboard`;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signIn({ user, account, profile, email, credentials }: any) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
    async jwt({ token, account, profile }: any) {
      if (profile?.oid) token.sub = profile.oid as string;
      if (profile?.name) token.name = profile.name as string;
      if ((profile as any)?.picture) token.image = (profile as any).picture;
      if ((profile as any)?.preferred_username) token.preferred_username = (profile as any).preferred_username;
      if (account?.id_token) token.id_token = account.id_token;
      if (account?.access_token) token.access_token = account.access_token;

      return token;
    },
    async session({ session, token }: any) {
      if(session.user){
        session.user.id = token.sub as string;
        session.user.id_token = token?.id_token as string;
        session.user.preferred_username = token.preferred_username as string;
        (session.user as any).access_token = token.access_token;
      }

      return session;
    },
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
    }, */
  events: {},
};

export default NextAuth(authOptions);
