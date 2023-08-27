'use client'
import { message } from 'antd';
import { useState } from 'react'
import { MapRoute } from '@/core';
import styles from './page.module.css';
import { useQuery } from 'react-query';
import { CardPost, ModalRoute } from '@/components';

export default function Home() {
  const [openModalRoute, setOpenModalRoute] = useState<boolean>(false)
  const handleModalRoute = () => setOpenModalRoute(!openModalRoute)

  const { data } = useQuery('getMapRoutes', () => MapRoute.get(''), {
    onError: () => message.error('No se pudieron traer las rutas')
  })

  return (
    <main className={styles.main}>
      {data?.response?.map((map) => (
        <CardPost
          key={map?._id}
          handleModalRoute={handleModalRoute}
          title={map?.route_info?.[map?.route_info?.length - 1]?.map_name}
        />
      ))}
      <ModalRoute open={openModalRoute} onCancel={handleModalRoute} />
    </main>
  )
}
