import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import RootLayout from '@/components/layout/RootLayout';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { PizzaProvider } from '@/contexts/PizzaContext';
import Base from '@/pages/Base';
import Home from '@/pages/Home/Home';
import NotFound from '@/pages/NotFound';
import Order from '@/pages/Order';
import Toppings from '@/pages/Toppings';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="base" element={<Base />} />
      <Route path="toppings" element={<Toppings />} />
      <Route path="order" element={<Order />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Suspense fallback={<div>Loading</div>}>
      <LayoutProvider>
        <PizzaProvider>
          <RouterProvider router={router} />
        </PizzaProvider>
      </LayoutProvider>
    </Suspense>
  </StrictMode>,
);
