import { Profile } from "@/services/user";
import { Session } from "next-auth";

export interface CustomSession extends Session {
    user: Profile;
}