import { create } from "zustand";
import { IUserStore, IGetSessionAction } from "./userStore.types";

export const userStore = create<IUserStore>((set) => ({
    rol: '',
    user: '',
    isAuth: false,
    loading: false,
    verified: false,
    setUserLoad: (isLoad: boolean) => set((payload) => ({
        ...payload,
        loading: isLoad
    })),
    logout: () => {
        set(() => ({ rol: '', user: '', isAuth: false, loading: false, verified: false }))
        localStorage.removeItem('guildUserToken')
    },
    getSession: (data: IGetSessionAction) => set((payload) => ({
        ...payload,
        rol: data?.rol,
        user: data?.user,
        isAuth: data?.isAuth,
        verified: data?.verified
    }))
}))
