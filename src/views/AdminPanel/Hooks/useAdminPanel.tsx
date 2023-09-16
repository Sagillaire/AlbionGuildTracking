import { AdminUsers } from "../AdminUsers"
import { AdminMapRoutes } from "../AdminMapRoutes"

export const useAdminPanel = () => {
    const TABS_CONTENT = [
        { label: `Rutas`, children: <AdminMapRoutes /> },
        { label: `Usuarios`, children: <AdminUsers /> },
        { label: `Permisos`, children: <h3>Permisos</h3> },
    ]

    return { TABS_CONTENT }
}