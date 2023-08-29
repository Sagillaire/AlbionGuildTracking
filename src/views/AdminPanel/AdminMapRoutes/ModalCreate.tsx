import { FC } from 'react';
import { AxiosError } from "axios";
import { IModalCreate } from './types';
import { GoTrash } from 'react-icons/go';
import { FaRoute } from 'react-icons/fa';
import styles from './styles.module.css';
import { Mapvalues } from '@/core/utils';
import { useMutation } from "react-query";
import { MapRoute, userStore } from "@/core";
import { Button, Modal, message } from 'antd';
import { CustomInput, CustomSelect } from "@/components";
import { useFieldArray, useForm } from "react-hook-form";
import { colorOptions, colourStyles } from '@/components/Select/constants';
import { TitleNode } from './Components/TitleNode';

export const ModalCreate: FC<IModalCreate> = ({ open, onCancel }) => {
    const { control, handleSubmit, formState: { errors }, watch, reset } = useForm()
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

    const { fields: routes, append, remove } = useFieldArray({
        control: control,
        name: 'route_info'
    })

    const handleCancel = () => {
        onCancel()
        reset()
    }

    return (
        <Modal
            width='80%'
            closable={false}
            onCancel={handleCancel}
            okText='Guardar' open={open}
            onOk={handleSubmit(createMapRoute as never)}
            title={<TitleNode append={append} handleCancel={handleCancel} />}
        >
            {routes?.map((route, index) => {
                if (route?.state !== 0) {
                    const zoneWatch = watch(`route_info.${index}.map_zone`)
                    return (
                        <form className={styles.formStyles} key={route?.id}>
                            <CustomSelect
                                label='Zone'
                                control={control}
                                styles={colourStyles}
                                options={colorOptions}
                                name={`route_info.${index}.map_zone`}
                                errors={errors?.route_info?.[index]?.map_zone}
                                rules={{ required: 'Campo ZONE es requerido' }}
                            />
                            {zoneWatch && (
                                <CustomSelect
                                    label='Name'
                                    control={control}
                                    name={`route_info.${index}.map_name`}
                                    options={Mapvalues[zoneWatch as never]}
                                    errors={errors?.route_info?.[index]?.map_name}
                                    rules={{ required: 'Campo NAME es requerido' }}
                                />
                            )}
                            <CustomInput
                                type='time'
                                label="Time"
                                control={control}
                                name={`route_info.${index}.time`}
                                errors={errors?.route_info?.[index]?.time}
                                rules={{ required: 'Campo TIME es requerido' }}
                            />
                            <span style={{ fontSize: '20px', display: 'flex', alignItems: 'center', width: '20px', height: '20px', color: 'red', cursor: 'pointer' }}
                                onClick={() => remove(index)}
                            >
                                <GoTrash />
                            </span>
                        </form>
                    )
                }
            })}
        </Modal>
    )
}
