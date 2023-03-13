import type { ReactNode } from 'react';

export interface PizzaProviderProps {
  children: ReactNode;
}

export interface IPizzaContext {
  addBase: (base: string) => void;
  addTopping: (topping: string) => void;
  pizza: {
    base: string;
    toppings: string[];
  };
}
