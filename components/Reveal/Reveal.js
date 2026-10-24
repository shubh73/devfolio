import { motion } from "framer-motion";

const Reveal = ({ children, distance = "4rem", duration = 1 }) => (
  <motion.div
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration, ease: [0.5, 0, 0, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
