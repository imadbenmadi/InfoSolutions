import { motion, useInView } from "framer-motion";
import CardModel from "./Components/CardModel";
import OurMember from "./Components/OurMember";
import { useRef } from "react";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";

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
      dir="rtl"
      ref={ref}
      className=""
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants={itemVariants} className="md:px-32 p-5">
        <h1 className="font-bold mx-auto text-3xl text-center py-5 md:p-10 md:text-3xl">
          {" "}
          مرحبا بكم{" "}
        </h1>
        <h2 className="text-center font-bold  text-xl">
          المنصة تحتوي على حلول انية في الاعلام الالي{" "}
        </h2>
      </motion.div>
      <div className="grid md:px-32 p-5 md:gap-x-10 min-h-fit  h-fit grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2">
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="pl" modelNama="Programation Linéer" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="PS" modelNama="probability statistics" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
        </motion.div>
        {/* <motion.div variants={itemVariants}>
          <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
        </motion.div> */}
      </div>
      <div className="md:px-32 p-5">
        <h1 className="font-bold mx-auto text-xl text-center py-5 md:p-10 md:text-3xl">
          {" "}
          اترك اقتراح لنا
        </h1>
        <Feedback />
      </div>

      {/* how make this platform */}
      <OurMember />
      <Footer />
    </motion.div>
  );
}

export default Home;
