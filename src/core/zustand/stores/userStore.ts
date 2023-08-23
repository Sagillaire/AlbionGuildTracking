import { create } from "zustand";
import { IGetSessionResults } from "@/core/Services/auth/VerifySession";

export interface IUserStore { user: string, userToken: string, getSession: (data: IGetSessionResults) => void }
export const userStore = create<IUserStore>((set) => ({
    user: '',
    userToken: '',
    getSession: (data: IGetSessionResults) => set(() => ({
        user: data?.username,
        userToken: data?.token
    }))
}))
