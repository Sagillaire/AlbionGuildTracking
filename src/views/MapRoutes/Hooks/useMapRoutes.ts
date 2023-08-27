import { message } from "antd";
import { useState } from "react";
import { MapRoute } from "@/core";
import { useQuery } from "react-query";
import { usePathname, useRouter } from "next/navigation";

export const useMapRoutes = () => {
    // Hooks
    const router = useRouter()
    const pathname = usePathname()

    // Handlers
    const [openModalRoute, setOpenModalRoute] = useState<boolean>(false)
    const handleModalRoute = (id?: string) => {
        if (id) {
            router.push(`${pathname}?id=${id}`)
        } else {
            router.push(pathname)
        }
        setOpenModalRoute(!openModalRoute)
    }

    const { data } = useQuery('getMapRoutes', () => MapRoute.get(''), {
        onError: () => message.error('No se pudieron traer las rutas')
    })

    return { data, openModalRoute, handleModalRoute }
}
