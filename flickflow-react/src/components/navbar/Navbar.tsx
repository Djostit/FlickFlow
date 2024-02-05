import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      id="nav"
      className="relactive transition-all ease-linear px-4 sm:px-6 md:px-8 pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200"
    >
      <h1>
        <span className="transition-all ease-linear font-bold text-slate-900 dark:text-slate-200 w-auto h-5">
          Flick Flow
        </span>
      </h1>
      <div className="flex items-center">
        <div className="transition-all ease-linear -my-1 ml-2 -mr-1 md:hidden">
          <button
            type="button"
            className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600"
          >
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24" fill="none" aria-hidden="true">
              <path
                d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center">
          <nav></nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
