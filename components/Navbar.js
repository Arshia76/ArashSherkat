import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Resource from '../public/Resource';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`${
        offset > 200 && 'sticky top-0 animate-slide-down-animation'
      } z-50 bg-[#cc9966] flex items-center justify-evenly p-8 transition-all duration-500 ease-in`}
    >
      <Image
        width={180}
        height={50}
        src={
          'http://be.beantownthemes.com/html/content/carparts/images/carparts.png'
        }
        alt='main-logo'
      />
      <ul className='flex items-center'>
        <li className='text-[#FF5F1E] ml-10 font-[500]'>
          <Link href={Resource.Routes.HOME}>
            <a className='text-2xl'>خانه</a>
          </Link>
        </li>
        <li className='text-white ml-10 font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.ABOUT}>
            <a className='text-2xl'>درباره ‌ما</a>
          </Link>
        </li>
        <li className='text-white ml-10 font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.CATEGORIES}>
            <a className='text-2xl'>دسته ‌بندی</a>
          </Link>
        </li>
        <li className='text-white ml-10 font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.PRODUCTS}>
            <a className='text-2xl'>خرید</a>
          </Link>
        </li>
        <li className='text-white font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.CONTACT}>
            <a className='text-2xl'>تماس</a>
          </Link>
        </li>
      </ul>
      <div className='flex items-center justify-center'>
        <div className='ml-4'>
          <Image
            width={25}
            height={25}
            src={Resource.Svg.BASKET}
            alt='basket'
          />
          <span>0</span>
        </div>
        <Image width={25} height={20} src={Resource.Svg.SEARCH2} alt='search' />
      </div>
    </nav>
  );
};

export default Navbar;
