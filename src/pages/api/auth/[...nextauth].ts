import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import generatePassword from "generate-password";
import { authMe, existsByEmail, login, signUpSocial } from "@/services/user";
import axiosInstance from "@/services";
import { capitalizeFirstLetterOfEachWord } from "@/utils/string";
import dayjs from "dayjs";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
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
    async signIn({ account, profile, user }) {
      try {
        if (account?.provider == "google" && profile?.email) {
          let googleProfile = profile as GoogleProfile;
          if (googleProfile.email_verified) {
            try {
              await existsByEmail(profile.email, googleProfile.sub);
            } catch (err) {
              // Create if not exists
              const password = generatePassword.generate({
                length: 12,
                numbers: true,
                symbols: true,
              });
              await signUpSocial({
                email: profile?.email,
                firstName: capitalizeFirstLetterOfEachWord(
                  googleProfile.given_name || googleProfile.name
                ),
                lastName: capitalizeFirstLetterOfEachWord(
                  googleProfile.family_name || ""
                ),
                password,
                password_confirmation: password,
                profile_img: googleProfile.picture,
                fullName: capitalizeFirstLetterOfEachWord(
                  (googleProfile.given_name || googleProfile.name) +
                    " " +
                    (googleProfile.family_name || "")
                ).trim(),
                socialID: googleProfile.sub,
                socialMetadata: JSON.stringify(googleProfile),
              });
            }
          }
        }
        return true;
      } catch (err) {
        return false;
      }
    },
    async session({ session, token }) {
      /*const isExpired = dayjs(new Date(token.iat * 1000)).isBefore(new Date());

      if (isExpired) {
        throw new Error("Expired");
      }*/

      if (!token.accessToken && token.sub) {
        const _user = await existsByEmail(session.user.email, token.sub!);
        if (_user) {
          const { accessToken, ...userData } = _user;
          session.user = userData;
          session.accessToken = accessToken;
        }
      } else if (token?.accessToken) {
        const authme = await authMe(token?.accessToken);
        session.user = authme;
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
