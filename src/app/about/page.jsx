'use client';
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';

import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from 'react-icons/si';

import Avatar from '@/components/Avatar';
import Circles from '@/components/Circle';
import { useState } from 'react';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/variant';

//counbter app
import CounterUp from 'react-countup';
//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />, <SiNextdotjs />, <SiFramer />, <FaWordpress />],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="h-screen bg-primary/30 py-32">
      <Circles />
      {/* Avatar Image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-6">
        {/* left */}
        <div className="flex-1 flex flex-col justify-end">
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center xl:text-left "
          >
            Captivating <span className="text-accent"> stories </span>birth magnificent designs
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-lg mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 text-center xl:text-left"
          >
            I'm a creative designer and developer with 3 years of experience. I'm passionate about creating beautiful,
            user-friendly websites and applications. I'm always looking for new ways to improve my skills and stay
            up-to-date with the latest trends. I'm a team player and love working with others to create amazing
            products.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.7)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:flex items-center justify-center hidden  md:w-full xl:max-w-none  mx-auto"
          >
            <div className="flex md:flex-1 xl:gap-x-6">
              {/* Experience */}

              <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/50 after:absolute after:top-0 after:right-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={45} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years Of Experience</div>
              </div>
              {/* Satisfied  */}
              <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/50 after:absolute after:top-0 after:right-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={23} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
              {/* projects  */}
              <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/50 after:absolute after:top-0 after:right-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={323} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
              {/* awards  */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CounterUp start={0} end={34} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]"> Winning awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* right */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* trigger */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={`${
                    index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after-duration-200'
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          {/* content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max items-center">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div className="text-2xl text-white" key={iconIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
