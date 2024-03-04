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

export type SignUpSocial = {
  firstName?: string;
  lastName?: string;
  fullName: string;
  email: string;
  profile_img?: string;
  password: string;
  password_confirmation: string;
  socialID: string;
  socialMetadata: string;
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

export const signUpSocial = async (profile: SignUpSocial) => {
  return axiosInstance
    .post("/auth/register/social", {
      email: profile.email,
      password: profile.password,
      name: profile.firstName,
      lastname: profile.lastName,
      profile_img: profile.profile_img,
      socialID: profile.socialID,
      socialMetadata: profile.socialMetadata,
    })
    .then((r) => r.data)
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const existsByEmail = async (
  email: string,
  socialID: string
): Promise<{ accessToken: string } | false> => {
  return axiosInstance
    .post("/auth/exists-email", {
      email,
      id: socialID,
    })
    .then((r) => {
      if (r.data == false) {
        throw new Error("exists");
      }
      return r.data;
    });
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

export const updatePassword = async (password: string) => {
  return axiosInstance.post("users/update/password", {
    password,
  });
};

export const recoverPassword = async ({
  email,
  password,
  otp,
}: {
  email: string;
  password: string;
  otp?: string;
}) => {
  return axiosInstance.post("users/recover/password", {
    email,
    password,
    otp,
  });
};
