import { motion } from "framer-motion";
import useGenerator from "../hooks/useGenerator";

const AdviceCard = () => {
  const { advice, id, handleClick } = useGenerator();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration: 0.3,
      }}
      className="flex flex-col items-center justify-center gap-5 p-8 max-w-xl  bg-teal-50 rounded-3xl m-auto shadow-lg shadow-slate-500"
    >
      <h1>Advice #{id}</h1>
      <p className="text-xl font-bold">{advice}</p>
      <img src="pattern-divider-desktop.svg" alt="icono dado" />
      <button onClick={handleClick}>
        <img src="icon-dice.svg" alt="icono" className="w-[30px] h-[30px]" />
      </button>
    </motion.div>
  );
};

export default AdviceCard;
