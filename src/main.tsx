import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.tsx';
import './index.css';
import NotFoundPage from './pages/NotFoundPage.tsx';
import DogBreedPage from './pages/DogBreedPage.tsx';
import AddDogBreed from './components/AddDogBreed.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <QueryClientProvider client={queryClient}><App /></QueryClientProvider>,
        errorElement: <NotFoundPage />
    },
    {
        path: '/dogbreeds/:id',
        element: <DogBreedPage />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/dogbreeds/add',
        element: <QueryClientProvider client={queryClient}><AddDogBreed /></QueryClientProvider>
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
