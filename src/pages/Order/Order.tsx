import { usePizzaContext } from '@/contexts/PizzaContext';

const Order = () => {
  const { pizza } = usePizzaContext();

  return (
    <div className="container order">
      <h2 className="text-3xl font-bold">Thank you for your order :)</h2>
      <p>
        You ordered a
        {' '}
        <span className="font-bold">{pizza.base}</span>
        {' '}
        pizza
        with:
      </p>
      {pizza.toppings.map((topping: string) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
