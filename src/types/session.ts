import { Profile } from "@/services/user";
import type { Session } from "next-auth";

export interface CustomSession extends Session {
    user: Profile;
}