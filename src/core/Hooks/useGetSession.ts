'use client'
import { userStore } from "../zustand";
import { useMutation } from "react-query";
import { useCallback, useEffect } from "react";
import { GetSessionService } from "../Services";

/**
 * Custom hook for getting user session data and handling loading state.
 * @returns An object with a function to trigger session retrieval.
 */
export const useGetSession = () => {
    const { getSession, setUserLoad } = userStore()
    const { mutateAsync, isLoading } = useMutation((token) => GetSessionService.post('', { token }), {
        onSuccess: (data) => {
            const { username: user, isAuth, verified, rol } = data?.results
            getSession({ user, isAuth, loading: isLoading, verified, rol })
        },
        onError: () => {
            localStorage.removeItem('guildUserToken')
        }
    });

    useEffect(() => {
        setUserLoad(isLoading)
    }, [isLoading, setUserLoad])

    const getSessionMutate = useCallback((token: string) => {
        return mutateAsync(token as never)
    }, [mutateAsync]);

    return { getSessionMutate }
}