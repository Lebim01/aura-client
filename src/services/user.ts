import axiosInstance from ".";

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
  return axiosInstance
    .post("/auth/login", {
      email,
      password,
    })
    .then((r) => {
      return r.data;
    });
};

export const signUp = async (profile: SignUp) => {
  return axiosInstance
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

export const authMe = async (): Promise<Profile | null> => {
  return axiosInstance
    .get("/users/me")
    .then((r) => r.data)
    .catch(() => null);
};
