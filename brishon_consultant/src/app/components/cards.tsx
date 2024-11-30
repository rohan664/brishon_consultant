import { motion } from "framer-motion";

function ThreeCards(){
  const containerVariants = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0,y:100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1, 
          ease: "easeInOut", 
        },
      },
  };

  return (
      <motion.div
        className="flex flex-col lg:flex-row gap-10 items-center justify-center p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col items-start justify-center flex-1 p-2 lg:border-r-2 lg:border-b-0 border-b-2 border-gray-100"
          variants={cardVariants}
        >
          <p className="lg:text-xl md:text-large font-bold text-primary">We Spot.</p>
          <p className="lg:text-2xl md:text-xl font-semibold">Every export business required an certificate</p>
          <p>Every export business required an permission from goverment to run thier business. </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-start justify-center flex-1 p-2 lg:border-r-2 lg:border-b-0 border-b-2 border-gray-100"
          variants={cardVariants}
        >
          <p className="lg:text-xl md:text-large font-bold text-primary">We Add.</p>
          <p className="lg:text-2xl md:text-xl font-semibold">We provide an certificate for business</p>
          <p>As we are consultant, we help business to get certificate in less time with minimal charges.</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-start justify-center flex-1"
          variants={cardVariants}
        >
          <p className="lg:text-xl md:text-large font-bold text-primary">We Exit.</p>
          <p className="lg:text-2xl md:text-xl font-semibold">As company has received certificate</p>
          <p>Our preferred point of exit is when company receive an certificate from goverment. </p>
        </motion.div>

    </motion.div>
  );
};

export default ThreeCards;
