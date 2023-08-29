import { message } from 'antd';
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useFieldArray, useForm } from "react-hook-form";
import { IMapRouteResponse, MapRoute, userStore } from "@/core";

export const useModal = (onCancel: () => void) => {
    const { control, handleSubmit, formState: { errors }, watch, reset } = useForm<IMapRouteResponse>()
    const { user } = userStore()

    const { mutateAsync } = useMutation((data) => MapRoute.post('', data), {
        onSuccess: () => {
            message.success('Ruta creada')
            reset()
        },
        onError(error: AxiosError<{ message: string }>) {
            message.error(`Error de petición. ${error?.message}`)
        }
    })

    const createMapRoute = (form: any) => {
        const data = { ...form, created_by: user }
        return mutateAsync(data)
    }

    const { fields: routes, append, remove } = useFieldArray<IMapRouteResponse>({
        control: control,
        name: 'route_info'
    })

    const handleCancel = () => {
        onCancel()
        reset()
    }
    return { handleCancel, handleSubmit, createMapRoute, append, routes, control, watch, remove, errors }
}