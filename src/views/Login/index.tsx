'use client'
import { FC } from 'react'
import { useForm } from "react-hook-form"
import { useMutation } from "react-query"
import { CustomInput } from "@/components"
import { useGetSession, LoginService } from "@/core"

export const Login: FC = () => {
    const { control, handleSubmit } = useForm()
    const { getSessionMutate } = useGetSession()
    const { mutateAsync: loginUser, isLoading } = useMutation((data) => LoginService.post('', data), {
        onSuccess: (data) => {
            localStorage.setItem('guildUserToken', data?.results.token)
            getSessionMutate(data?.results?.token)
        }
    })

    return (
        <div onSubmit={handleSubmit(loginUser as never)}>
            <form style={{ width: '300px', margin: '50px auto' }}>
                <CustomInput label="Usuario" name="username" control={control} />
                <CustomInput label="Contraseña" name="password" type="password" control={control} />
                <button type="submit">{isLoading ? 'Loading...' : 'Iniciar Sesión'}</button>
            </form>
        </div>
    )
}
