import { create } from "zustand";

interface UserData {
  mail: string;
  pass: string;
  confirm_pass: string;
  day: string;
  month: string;
  year: string;
  username: string;
}

interface UserRegistrationStore {
  userData: UserData;
  setUserField: (field: string, value: string) => void;
  resetUserFields: () => void;
}

const useUserRegistrationStore = create<UserRegistrationStore>((set) => ({
  userData: {
    mail: "",
    pass: "",
    confirm_pass: "",
    day: "",
    month: "",
    year: "",
    username: "",
  },
  setUserField: (field, value) =>
    set((state) => ({
      userData: {
        ...state.userData,
        [field]: value,
      },
    })),
  resetUserFields: () =>
    set({
      userData: {
        mail: "",
        pass: "",
        confirm_pass: "",
        day: "",
        month: "",
        year: "",
        username: "",
      },
    }),
}));

export default useUserRegistrationStore;
