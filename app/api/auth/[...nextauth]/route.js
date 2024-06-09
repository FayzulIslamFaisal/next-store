import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import {getLoginToken} from '../../../services/getLoginToken';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: {},
              password: {}
            },
            async authorize(credentials, req) {
              const user = await getLoginToken({
                username: credentials?.username,
                password: credentials?.password
              });
              if (user) {
                return user
              } else {
                return null
              }
            }
          })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
