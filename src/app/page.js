'use client';
import { motion } from 'framer-motion';
import ProjectsBtn from '@/components/ProjectsButton';
import Avatar from '@/components/Avatar';
import ParticlesContainer from '@/components/ParticlesContainer';
import { fadeIn } from '@/components/variant';
export default function Home() {
  return (
    <div className="bg-primary/60 h-screen">
      {/* container*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {/*  text*/}
        <div className="text-center flex flex-col justify-center  xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
            Transforming ideas <br />
            Into <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            We are team of talented developers making websites and apps for you <br /> to grow your business and to make
            your ideas into reality.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/*    image*/}
      <div className="w-screen h-full absolute right-0 bottom-0">
        {/*bg img*/}
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute  translate-z-0 mix-blend-color-dodge"></div>
        {/*particles*/}
        <ParticlesContainer />
        {/*    avatar ımg*/}
        <motion.div
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}
