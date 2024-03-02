import axiosInstance from ".";

export type Profile = {
  id: string;
  name?: string;
  lastname?: string;
  email: string;
  profile_img?: string;
};

export type Credencials = {
  password: string;
};

export type SignUp = {
  firstName?: string;
  lastName?: string;
  fullName: string;
  email: string;
  profile_img?: string;
  password: string;
  password_confirmation: string;
};

export interface ProfileWithToken extends Profile {
  accessToken: string;
}

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

export const authMe = async (
  token: string
): Promise<ProfileWithToken | null> => {
  return axiosInstance
    .get("/users/me", { headers: { Authorization: `Bearer ${token}` } })
    .then((r) => ({ ...r.data, accessToken: token }))
    .catch(() => null);
};

export const updateUser = async (user: Partial<Profile>) => {
  return axiosInstance.patch("/auth/update", user).then((r) => r.data);
};
