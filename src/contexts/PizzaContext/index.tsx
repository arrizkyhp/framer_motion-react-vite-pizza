import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import type {
  IPizzaContext,
  PizzaProviderProps,
} from '@/contexts/PizzaContext/index.types';

const PizzaContext = createContext<IPizzaContext>({} as IPizzaContext);

const PizzaProvider = ({ children }: PizzaProviderProps) => {
  const [pizza, setPizza] = useState<{ base: string; toppings: string[] }>({
    base: '',
    toppings: [],
  });

  const addBase = useCallback(
    (base: string) => {
      setPizza({ ...pizza, base });
    },
    [pizza],
  );

  const addTopping = useCallback(
    (topping: string) => {
      let newToppings;
      if (!pizza.toppings.includes(topping)) {
        newToppings = [...pizza.toppings, topping];
      } else {
        newToppings = pizza.toppings.filter((item) => item !== topping);
      }
      setPizza({ ...pizza, toppings: newToppings });
    },
    [pizza],
  );

  const pizzaProviderValue = useMemo(
    () => ({ addBase, addTopping, pizza }),
    [addBase, addTopping, pizza],
  );

  return (
    <PizzaContext.Provider value={pizzaProviderValue}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizzaContext = () => {
  const context = useContext(PizzaContext);

  return context;
};

export { PizzaProvider, usePizzaContext };
