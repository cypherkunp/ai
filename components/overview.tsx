import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon, VercelIcon } from "./icons";
import { Badge } from "./ui/badge";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-2 leading-relaxed text-left max-w-xl">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
          Hey, I am Tony
        </h1>

        <p className="text-lg font-light">How can I help you today?</p>
      </div>
    </motion.div>
  );
};
