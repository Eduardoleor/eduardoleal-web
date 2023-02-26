import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { TransitionStyled } from './transition.styled';

type TransitionProps = {
  children: React.ReactNode;
};

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.55
    }
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.5
    }
  }
};

export default function Transition({ children }: TransitionProps) {
  const { asPath } = useRouter();

  return (
    <TransitionStyled>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionStyled>
  );
}
