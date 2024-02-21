import axios from "axios";

export type Profile = {
  id: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  email: string;
  picture?: string;
};

export type Credencials = {
  password: string;
};

export type SignUp = {
  firstName?: string;
  lastName?: string;
  fullName: string;
  email: string;
  picture?: string;
  password: string;
  password_confirmation: string;
};

export const login = async (email: string, password: string) => {
  return axios
    .post("/auth/login", {
      email,
      password,
    })
    .then((r) => r.data);
};

export const signUp = async (profile: SignUp) => {
  return axios
    .post("/auth/register", {
      email: profile.email,
      password: profile.password,
      name: profile.firstName,
      lastname: profile.lastName,
    })
    .then((r) => r.data);
};

export const getUserByEmail = async (
  email: string
): Promise<Profile | null> => {
  return null;
};
