import { FC } from 'react';
import { Modal } from 'antd';
import { useModal } from './Hooks';
import { IModalCreate } from './types';
import { GoTrash } from 'react-icons/go';
import styles from './styles.module.css';
import { Mapvalues } from '@/core/utils';
import { TitleNode } from './Components/TitleNode';
import { CustomInput, CustomSelect } from "@/components";
import { colorOptions, colourStyles } from '@/components/Select/constants';

export const ModalCreate: FC<IModalCreate> = ({ open, onCancel }) => {
    const { handleCancel, handleSubmit, createMapRoute, append, routes, control, watch, remove, errors } = useModal(onCancel)

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
