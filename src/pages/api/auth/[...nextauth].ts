import NextAuth from "next-auth";
import type { NextAuthOptions, Session } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import generatePassword from "generate-password";
import {
  Profile,
  authMe,
  getUserByEmail,
  login,
  signUp,
} from "@/services/user";
import { CustomSession } from "@/types/session";
import axiosInstance from "@/services";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials?.username && credentials.password) {
          const response = await login(
            credentials.username,
            credentials.password
          );
          axiosInstance.defaults.headers.Authorization = response.data;
          const user = await authMe();
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
                firstName: googleProfile.given_name || googleProfile.name,
                lastName: googleProfile.family_name || "",
                password,
                password_confirmation: password,
                picture: googleProfile.picture,
                fullName: (
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
      let profile: Profile | null = null;
      try {
        if (session.user?.email) {
          profile = await getUserByEmail(session.user.email);
        }
      } catch (err) {
        console.error(err);
      }
      return {
        ...session,
        token,
        user: profile,
      } as CustomSession;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
