/* eslint-disable react-hooks/exhaustive-deps */
import { message } from 'antd';
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { IMapRouteResponse, MapRoute } from "@/core";
import { useFieldArray, useFormContext } from "react-hook-form";

export const useModal = (onCancel: () => void) => {
    const { resetField, control } = useFormContext<IMapRouteResponse>()

    const { mutateAsync } = useMutation((data) => MapRoute.post('', data), {
        onSuccess: () => {
            message.success('Ruta creada')
            handleCancel()
        },
        onError(error: AxiosError<{ message: string }>) {
            message.error(`Error de petición. ${error?.message}`)
        }
    })

    const { fields: routes, append, remove } = useFieldArray<IMapRouteResponse>({
        control: control,
        name: 'route_info'
    })

    const handleCancel = () => {
        resetField('route_info', { defaultValue: [] })
        onCancel()
    }

    return { handleCancel, createMapRoute: mutateAsync, routes, append, remove }
}