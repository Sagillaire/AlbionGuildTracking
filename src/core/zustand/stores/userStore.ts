import { create } from "zustand";
import { IUserStore, IGetSessionAction } from "./userStore.types";

export const userStore = create<IUserStore>((set) => ({
    user: '',
    isAuth: false,
    loading: false,
    setUserLoad: (isLoad: boolean) => set((payload) => ({
        ...payload,
        loading: isLoad
    })),
    getSession: (data: IGetSessionAction) => set(() => ({
        user: data?.user,
        isAuth: data?.isAuth
    }))
}))
