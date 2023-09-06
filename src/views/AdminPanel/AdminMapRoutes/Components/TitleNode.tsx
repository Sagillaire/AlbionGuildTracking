import { FC } from "react";
import { Button } from "antd";
import { ITitleNode } from "./types";
import { FaRoute } from "react-icons/fa";

export const TitleNode: FC<ITitleNode> = ({ append, handleCancel }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Crear nueva ruta</span>
            <Button icon={<FaRoute />} onClick={() => append({ state: 1 })}>Agregar</Button>
        </div>
    )
}