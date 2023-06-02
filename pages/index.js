// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';

// motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';
import TopLeftImg from '../components/TopLeftImg';

const Home = () => {
  return (
    <div className='h-full bg-primary text-white'>
      <div className='w-full h-full bg-gradient-to-r from-primary via-black/70 to-black/10'>
        <div className='flex flex-col justify-center xl:pt-40 text-center xl:text-left h-full container mx-auto'>
          {/* top left image */}
          <TopLeftImg />
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='h1'
          >
            Transforming Ideas <br /> Into{' '}
            <span className='text-accent'>Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos
            adipisci, maiores atque deleniti voluptatibus optio.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center relative z-50 xl:hidden'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate={'show'}
            exit={'hidden'}
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate={'show'}
          exit={'hidden'}
          className='absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className='hidden xl:flex xl:max-w-none'>
            <Image
              src={'/avatar.png'}
              width={750}
              height={750}
              className='translate-z-0'
              alt=''
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
