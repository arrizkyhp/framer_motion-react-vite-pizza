import type { Variants } from 'framer-motion';

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.5,
    },
  },
};

export default buttonVariants;
