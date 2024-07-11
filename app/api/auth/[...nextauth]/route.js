import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { getLoginToken } from "../../../services/getLoginToken";
// import { checkUserExistByGoogleLogin } from "@/app/services/checkUserExistByGoogleLogin";

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

                    if (res.error) {
                        throw new Error("Email or Password is not correct");
                    }

                    if (res.user) {
                        const user = {
                            id: res?.user?.id,
                            name: res?.user?.name,
                            email: res?.user?.email,
                        };

                        // Example accessToken and expiresIn, replace with actual token logic
                        const accessToken = res?.user?.accessToken;
                        // const expiresIn = 3600; // Token expiration time in seconds
                        const expiresIn = res?.user?.expiresIn;

                        const phone = res?.user?.phone;

                        return { ...user, accessToken, expiresIn, phone };
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
        signIn: "/login",
        signOut: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log("=>>> signIn...");

            if (account.provider === "google") {
                // Example accessToken and expiresIn, replace with actual token logic
                const accessToken = account.access_token;
                const expiresIn = account.expires_at;

                user.accessToken = accessToken;
                user.expiresIn = expiresIn;
                user.email = profile?.email;

                // console.log("user ----", user);
                // console.log('profile ----', profile)

                return { ...user };
            }
            return true;
        },

        async redirect({ url, baseUrl }) {
            console.log("=>>> redirect...");

            // const userExists = await checkUserExistByGoogleLogin({email: "robeul.starit@gmail.com"});
            // console.log("userExists  1", userExists);

            // if(userExists){
            //     if (userExists?.message == 'Already User Exists Account Provider Customer') {
            //         console.log("userExists  2");
            //         return url.startsWith(baseUrl) ? `${baseUrl}/dashboard` : baseUrl;
            //     } else {
            //         console.log("userExists  3");
            //         return url.startsWith(baseUrl) ? `${baseUrl}/google-profile` : baseUrl;
            //     }
            // }

            

            // Allows relative callback URLs
            // if (url.startsWith("/")) return `${baseUrl}${url}`
            // // Allows callback URLs on the same origin
            // else if (new URL(url).origin === baseUrl) return url
            // return baseUrl

            return url.startsWith(baseUrl) ? `${baseUrl}/dashboard` : baseUrl;
        },

        async jwt({ token, user }) {
            console.log("=>>> jwt...");

            // console.log('=>>> jwt token', token)
            // console.log('=>>> jwt user', user)

            // Initial sign in
            if (user) {
                token.accessToken = user.accessToken;
                token.expiresIn = user.expiresIn;
                token.phone = user.phone;
            }

            // Return previous token if the access token has not expired yet
            // if (Date.now() < token.expiresAt) {
            // console.log('=>>> token expired Date.now()', Date.now())
            // console.log('=>>> token expired token.expiresAt', token.expiresAt)
            //   return token;
            // }

            // Access token has expired, try to refresh it (or return previous token if refresh logic not implemented)
            // Here you should add your refresh logic if necessary

            return token;
        },

        async session({ session, token }) {
            console.log("=>>> session...");

            // console.log('=>>> session session', session)
            // console.log('=>>> session token', token)

            if (token) {
                session.accessToken = token.accessToken;
                session.expiresIn = token.expiresIn;
                session.phone = token.phone;
            }
            return session;
        },
    },
    debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
