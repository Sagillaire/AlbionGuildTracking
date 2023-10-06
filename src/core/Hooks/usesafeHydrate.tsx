'use client'
import { FC, useEffect, useState } from 'react';

/**
 * SafeHydrate is a React component that safely hydrates children during server-side rendering (SSR).
 * It ensures that the children are hydrated only on the client-side, preventing potential mismatches
 * between server-rendered and client-rendered content.
 * @param children - The JSX elements to be safely hydrated.
 */
export const SafeHydrate: FC<{ children: JSX.Element | JSX.Element[] }> = ({
    children
}) => {
    const [hydrate, SetHydrate] = useState<JSX.Element | JSX.Element[] | null>(null);

    useEffect(() => {
        SetHydrate(children);
    }, [children]);

    return <div suppressHydrationWarning>{hydrate}</div>;
};
