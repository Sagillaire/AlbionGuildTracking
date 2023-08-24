'use client'
import { FC } from 'react'
import { useLogin } from './Hooks'
import { CustomInput } from "@/components"
import { FieldError } from 'react-hook-form'

export const Login: FC = () => {
    // Hooks
    const { control, handleSubmit, isLoading, loginUser, errors } = useLogin()

    return (
        <div onSubmit={handleSubmit(loginUser as never)}>
            <form style={{ width: '300px', margin: '50px auto' }}>
                <CustomInput
                    label="Usuario"
                    name="username"
                    control={control}
                    rules={{ required: 'Campo requerido' }}
                    errors={errors?.username as FieldError}
                />
                <CustomInput
                    name="password"
                    type="password"
                    control={control}
                    label="Contraseña"
                    rules={{ required: 'Campo requerido' }}
                    errors={errors?.password as FieldError}
                />
                <button type="submit">
                    {isLoading ? 'Loading...' : 'Iniciar Sesión'}
                </button>
            </form>
        </div>
    )
}
