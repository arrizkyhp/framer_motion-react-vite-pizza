import React from 'react';
import { Outlet } from 'react-router-dom';

import Content from '@/components/layout/Content';
import Header from '@/components/layout/Header';
import { LayoutProvider } from '@/contexts/LayoutContext';

import './App.css';

const App = () => (
  <LayoutProvider>
    <Header />
    <Content>
      <Outlet />
    </Content>
  </LayoutProvider>
);

export default App;
