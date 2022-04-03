import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">Framer Motion</motion.h2>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1 }}
              className="expanded"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores numquam placeat porro modi. Quam non quos similique
                ratione ex dolorem!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, deleniti.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default App;
