import { message } from "antd";
import { useEffect } from "react";
import { userStore } from "@/core";
import { useQuery } from "react-query";
import { Users } from "@/core/Services/users";
import { usePathname, useRouter } from "next/navigation";

export const useAdminRoutes = () => {
    const pathname = usePathname()
    const { rol } = userStore()
    const router = useRouter()

    const { data } = useQuery('getMapRoutes', () => Users.get(''), {
        onError: () => message.error('No se pudieron traer las rutas')
    })

    useEffect(() => {
        if (pathname === '/admin' && rol !== 'OFFICIAL') router.push('/')
    }, [pathname, rol, router])

    return { routesData: data?.response }
}