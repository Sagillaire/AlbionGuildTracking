'use client'
import { FC } from 'react';
import { Tabs } from 'antd';
import { useAdminPanel } from './Hooks';
import { Container } from '@/components';

export const AdminPanel: FC = () => {
    const { TABS_CONTENT } = useAdminPanel()
    return (
        <Container>
            <Tabs
                type='card'
                items={TABS_CONTENT.map((content, i) => {
                    return {
                        key: content.label,
                        label: content.label,
                        children: content.children,
                    };
                })}
            />
        </Container>
    )
}
