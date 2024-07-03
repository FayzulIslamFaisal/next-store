import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { getLoginToken } from "../../../services/getLoginToken";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {},
                password: {},
            },
            async authorize(credentials, req) {
              if (credentials === null) return null;
              try {
                const res = await getLoginToken({
                    phone: credentials?.username,
                    password: credentials?.password,
                });

                // console.log("=>>> after login successfully res", res);

                if(res.error){
                  throw new Error("Email or Password is not correct");
                }

                if(res.user){
                  const user = {
                    id: res?.user?.id,
                    name: res?.user?.name,
                    email: res?.user?.email
                  };
                  // return user;

                  // Example accessToken and expiresIn, replace with actual token logic
                  const accessToken = res?.user?.accessToken;
                  // const expiresIn = 3600; // Token expiration time in seconds
                  const expiresIn = res?.user?.expiresIn; // Token expiration time in seconds

                  return { ...user, accessToken, expiresIn };

                }
                return null;

              } catch (error) {
                console.error("Authorization error:", error);
                throw new Error(error.message);
              }
            },
        }),
    ],
    pages: {
      signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user}){
          // Initial sign in
          if (user) {
            token.accessToken = user.accessToken;
            token.expiresAt = Date.now() + user.expiresIn * 1000;
          }

          // Return previous token if the access token has not expired yet
          // if (Date.now() < token.expiresAt) {
          //   return token;
          // }

          // Access token has expired, try to refresh it (or return previous token if refresh logic not implemented)
          // Here you should add your refresh logic if necessary

          return token;

        },

        async session({ session, token}) {
          if(token){
            session.accessToken = token.accessToken;
            session.expiresAt = token.expiresAt;
          }
          return session;
        }
    },
    debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
