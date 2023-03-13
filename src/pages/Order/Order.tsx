import { motion } from 'framer-motion';

import { usePizzaContext } from '@/contexts/PizzaContext';
import containerVariants from '@/motions';

const opacityVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = () => {
  const { pizza } = usePizzaContext();

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl font-bold">Thank you for your order :)</h2>
      <motion.p variants={opacityVariants}>
        You ordered a <span className="font-bold">{pizza.base}</span> pizza
        with:
      </motion.p>
      <motion.div variants={opacityVariants}>
        {pizza.toppings.map((topping: string) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
