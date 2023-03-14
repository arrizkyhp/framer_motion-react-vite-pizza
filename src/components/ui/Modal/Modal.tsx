import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './Modal.css';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '320px',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

type ModalTypes = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ setShowModal, showModal }: ModalTypes) => (
  <AnimatePresence mode="wait">
    {showModal && (
      <motion.div
        className="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <p>Want to make another pizza</p>
          <Link to="/">
            <button
              type="button"
              className="buttonModal"
              onClick={() => setShowModal(false)}
            >
              Start Again
            </button>
          </Link>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Modal;
