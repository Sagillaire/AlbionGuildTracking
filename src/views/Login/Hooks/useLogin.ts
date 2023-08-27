import { message } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { useGetSession, LoginService } from "@/core";

export const useLogin = () => {
    const { control, handleSubmit, formState: { errors } } = useForm()
    const { getSessionMutate } = useGetSession()
    const router = useRouter()

    const { mutateAsync: loginUser, isLoading } = useMutation((data) => LoginService.post('', data), {
        onSuccess: (data) => {
            localStorage.setItem('guildUserToken', data?.results.token)
            getSessionMutate(data?.results?.token)
            message.success('Exito!')
            router.push('/')
        }
    })

    return { control, handleSubmit, loginUser, isLoading, errors }
}