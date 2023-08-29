import { Button } from "antd"
import { FC } from "react"
import { FaRoute } from "react-icons/fa"
import { ITitleNode } from "./types"

export const TitleNode: FC<ITitleNode> = ({ append, handleCancel }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Crear nueva ruta</span>
            <Button icon={<FaRoute />} onClick={() => append({ state: 1 })}>Agregar</Button>
            <Button icon={<FaRoute />} onClick={handleCancel}>LIMPIAR</Button>
        </div>
    )
}