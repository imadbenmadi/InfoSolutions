import { motion, useInView } from "framer-motion";
import CardModel from "../Components/homePage/CardModel";
import OurMember from "../Components/homePage/OurMember";
import { useRef } from "react";
import Feedback from "../Components/homePage/Feedback";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="md:px-32 p-5"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "hidden" : "visible"}
    >
      <div className="grid gap-5 min-h-fit md:h-screen h-fit grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="pl" modelNama="Programation Linéer" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="PS" modelNama="probability statistics" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
        </motion.div>
      </div>
      <div>
        <h1 className="font-bold mx-auto text-xl text-center py-5 md:p-10 md:text-3xl">
          {" "}
          give me your Feedback
        </h1>
        <Feedback />
      </div>

      {/* how make this platform */}
      <OurMember />
    </motion.div>
  );
}

export default Home;
