'use client'
import { useCallback } from "react"
import { userStore } from "../zustand";
import { useMutation } from "react-query"
import { GetSessionService } from "../Services";

export const useGetSession = () => {
    const { getSession } = userStore()
    const { mutateAsync } = useMutation((token) => GetSessionService.post('', { token }), {
        onSuccess: (data) => getSession({ username: data?.results?.username, token: data?.results?.token }),
        onError: (err) => console.log('ERR: ', err)
    });

    const getSessionMutate = useCallback((token: string) => {
        return mutateAsync(token as never)
    }, [mutateAsync]);

    return { getSessionMutate }
}