'use client'
import { FC, useEffect, useState } from 'react';

export const SafeHydrate: FC<{ children: JSX.Element | JSX.Element[] }> = ({
    children
}) => {
    const [hydrate, SetHydrate] = useState<JSX.Element | JSX.Element[] | null>(null);

    useEffect(() => {
        SetHydrate(children);
    }, [children]);

    return <div suppressHydrationWarning>{hydrate}</div>;
};
