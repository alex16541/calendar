import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthPage } from '@/pages/AuthPage/index.ts';
import { MainPage } from '@/pages/MainPage';

import { StoreProvider } from './providers/store/index.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider>
            <RouterProvider router={router} />
        </StoreProvider>
    </React.StrictMode>,
);
