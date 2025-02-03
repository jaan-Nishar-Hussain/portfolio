// Web3Icon.js
import { motion } from "framer-motion";

const Web3Icon = () => (
  <motion.svg
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 7 12 12 22 7"></polyline>
    <polyline points="12 12 12 22"></polyline>
  </motion.svg>
);

export default Web3Icon;