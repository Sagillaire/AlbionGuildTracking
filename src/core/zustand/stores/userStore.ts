import { create } from "zustand";
import { IUserStore, IGetSessionAction } from "./userStore.types";

/**
 * Represents the user store for managing user-related state.
 */
export const userStore = create<IUserStore>((set) => ({
    rol: '',
    user: '',
    isAuth: false,
    loading: false,
    verified: false,

    /**
     * Set the loading state of the user.
     * @param isLoad - A boolean value indicating whether data is being loaded.
     */
    setUserLoad: (isLoad: boolean) => set((payload) => ({
        ...payload,
        loading: isLoad
    })),

    /**
     * Log the user out and clear their session data.
     */
    logout: () => {
        set(() => ({ rol: '', user: '', isAuth: false, loading: false, verified: false }))
        localStorage.removeItem('guildUserToken')
    },

    /**
     * Get the user's session data and update the store state.
     * @param data - An object containing session data.
     */
    getSession: (data: IGetSessionAction) => set((payload) => ({
        ...payload,
        rol: data?.rol,
        user: data?.user,
        isAuth: data?.isAuth,
        verified: data?.verified
    }))
}))
