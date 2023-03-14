import { Outlet } from 'react-router-dom';

import Content from '@/components/layout/Content';
import Header from '@/components/layout/Header';
import Modal from '@/components/ui/Modal';
import { useLayoutContext } from '@/contexts/LayoutContext';

const RootLayout = () => {
  const { setShowModal, showModal } = useLayoutContext();

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default RootLayout;
