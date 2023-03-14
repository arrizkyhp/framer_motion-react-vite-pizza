import type { ReactNode } from 'react';

export interface LayoutContextTypes {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LayoutProviderProps {
  children: ReactNode;
}
