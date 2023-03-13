import { Outlet } from 'react-router-dom';

import Content from '@/components/layout/Content';
import Header from '@/components/layout/Header';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { PizzaProvider } from '@/contexts/PizzaContext';

const RootLayout = () => (
  <LayoutProvider>
    <PizzaProvider>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </PizzaProvider>
  </LayoutProvider>
);

export default RootLayout;
