'use client'
import { ReactNode, FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

/**
 * @description React Query Client
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },
        mutations: {}
    }
});

export const ClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}