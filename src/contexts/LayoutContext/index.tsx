import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type { LayoutContextTypes, LayoutProviderProps } from './index.types';

const LayoutContext = createContext<LayoutContextTypes | undefined>(undefined);

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleCollapsed = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const sidebarProviderValue = useMemo(
    () => ({
      isCollapsed,
      toggleCollapsed,
      setShowModal,
      showModal,
    }),
    [isCollapsed, toggleCollapsed, setShowModal, showModal],
  );

  return (
    <LayoutContext.Provider value={sidebarProviderValue}>
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('"useLayoutContext" must be used within "LayoutProvider"');
  }

  return context;
};

export { LayoutProvider, useLayoutContext };
