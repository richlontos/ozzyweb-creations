// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiLinkedinBoxFill,
  RiInstagramLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiPhoneFill
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link> */}
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiDribbbleLine />
      </Link> */}
      <Link href={'https://www.linkedin.com/in/richard-lontos'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>
      {/* <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiPinterestLine />
      </Link> */}
      <a href='tel:+2533801654' className='hover:text-accent transition-all duration-300'>
        <RiPhoneFill />
      </a>
      
    </div>
  );
};

export default Socials;
