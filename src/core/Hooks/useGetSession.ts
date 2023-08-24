'use client'
import { userStore } from "../zustand";
import { useMutation } from "react-query";
import { useCallback, useEffect } from "react";
import { GetSessionService } from "../Services";

export const useGetSession = () => {
    const { getSession, setUserLoad } = userStore()
    const { mutateAsync, isLoading } = useMutation((token) => GetSessionService.post('', { token }), {
        onSuccess: (data) => {
            getSession({ user: data?.results?.username, isAuth: data?.results?.isAuth })
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