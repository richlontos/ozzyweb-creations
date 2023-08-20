import React, { useState } from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiMeta, SiGoogleads, SiHubspot, SiCanva } from 'react-icons/si';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

export const aboutData = [
  {
    title: 'Craftsmanship',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobexd" />, <SiAdobephotoshop key="photoshop" />],
      },
      {
        title: 'Digital Marketing',
        icons: [<FaFigma key="figma" />, <SiMeta key="meta" />, <SiGoogleads key="googleLeads" />, <SiHubspot key="hubSpot" />, <SiCanva key="canva" />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      { title: 'UX/UI Designer/Web Master - Vertex Solutions', stage: '2022 - 2023' },
      { title: 'Web Developer - SynergySoft Solutions', stage: '2022 - 2023' },
      { title: 'Technical Product Owner  - FCA Legal Funding', stage: '2020 - 2022' },
      { title: 'Social Media Manager  - Ouzo & Feta', stage: '2019 - 2020' },
      { title: 'Project Manager - Transform Design', stage: '2016 - 2018' },
    ],
  },
  {
    title: 'meet the team',
    info: [
      { title: 'Lead Developer', stage: 'Richard Lontos', image: '/richard.jpg' },
      { title: 'Developer/Project Manager', stage: 'Medrik Minassian', image: '/medrik.jpg' },
      { title: 'Director of Technology Strategy', stage: 'Lizeth Dada', image: '/richard.png' },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
<div className='min-h-screen overflow-y-auto bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container min-height: 100vh mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            Captivating <span className='text-accent'>stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >

            At OzzWeb Creations, the digital realm is our canvas. Powered by a team of visionary creators and relentless innovators,
            we don&apos;t just design websites; we breathe life into digital dreams. No challenge is too great, no idea too bold. From the first pixel to the final product,
            we&apos;re committed to turning your vision into a reality. Your imagination is the only limit.

          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={10} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={120} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished projects
                </div>
              </div>
              {/* awards */}
              {/* <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] md:h-[480px]'
        >
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={item.title + '-' + itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={item.title + '-' + itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className='hidden md:flex'>-</div>
                <div>{item.stage}</div>
                {item.image && (
                  <Image src={item.image} alt={item.title} width={96} height={96} className='object-cover rounded-full' />
                )}
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={'icon-' + iconIndex} className='text-2xl text-white'>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

