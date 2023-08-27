import { message } from "antd";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { MapRoute, userStore } from "@/core";
import { usePathname, useRouter } from "next/navigation";

export const useAdminRoutes = () => {
    const [modalRoute, setModalRoute] = useState<boolean>(false)
    const handleModalRoute = () => setModalRoute(!modalRoute)
    const pathname = usePathname()
    const { rol } = userStore()
    const router = useRouter()

    const { data } = useQuery('getMapRoutes', () => MapRoute.get(''), {
        onError: () => message.error('No se pudieron traer las rutas')
    })

    useEffect(() => {
        if (pathname === '/admin' && rol !== 'OFFICIAL') router.push('/')
    }, [pathname, rol, router])

    return { routesData: data?.response, modalRoute, handleModalRoute }
}