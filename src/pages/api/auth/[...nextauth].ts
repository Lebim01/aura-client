import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import generatePassword from "generate-password";
import { authMe, getUserByEmail, login, signUp } from "@/services/user";
import axiosInstance from "@/services";
import { capitalizeFirstLetterOfEachWord } from "@/utils/string";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials?.username && credentials.password) {
          const token = await login(credentials.username, credentials.password);
          axiosInstance.defaults.headers.Authorization = "Bearer " + token;
          const user = await authMe(token);
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      try {
        if (account?.provider == "google" && profile?.email) {
          let googleProfile = profile as GoogleProfile;
          if (googleProfile.email_verified) {
            try {
              const user = await getUserByEmail(profile.email);
            } catch (err) {
              // Create if not exists
              const password = generatePassword.generate({
                length: 12,
                numbers: true,
                symbols: true,
              });
              const user = await signUp({
                email: profile?.email,
                firstName: capitalizeFirstLetterOfEachWord(
                  googleProfile.given_name || googleProfile.name
                ),
                lastName: capitalizeFirstLetterOfEachWord(
                  googleProfile.family_name || ""
                ),
                password,
                password_confirmation: password,
                picture: googleProfile.picture,
                fullName: capitalizeFirstLetterOfEachWord(
                  (googleProfile.given_name || googleProfile.name) +
                    " " +
                    (googleProfile.family_name || "")
                ).trim(),
              });
            }
          }
        }
        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    async session({ session, token }) {
      if (token?.accessToken) {
        const _user = await authMe(token?.accessToken);
        session.user = _user;
        session.accessToken = token.accessToken;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
