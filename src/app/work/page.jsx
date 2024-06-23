"use client"
import Circles from "@/components/Circle";
import {motion} from "framer-motion";
import {fadeIn} from "@/components/variant";
import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";

const Work = () => {
  return <section className="h-screen bg-primary/30 py-36 flex items-center">
    <Circles/>
    <div className="container">
      {/* row */}
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/* Text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0">
          <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden"
                     className="h2">
            My Work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores totam reiciendis
            reprehenderit earum
            laudantium optio magni.
          </motion.p>
        </div>
        {/* Slider */}
        <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            animate="show" exit="hidden"
            className="w-full xl:max-w-[65%]">
          <WorkSlider/>
        </motion.div>
      </div>
    </div>
    <Bulb/>
  </section>
};

export default Work;
