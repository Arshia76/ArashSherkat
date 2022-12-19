import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Resource from '../public/Resource';
import useWindowSize from '../hooks/useWindowSize';
import { CSSTransition } from 'react-transition-group';

const SideBar = ({ setShow, show }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 
      opacity-70 h-screen w-screen bg-black ${show ? 'block' : 'hidden'}`}
      />
      <CSSTransition appear={show} in={show} timeout={1000} classNames='navbar'>
        <div className='nav'>
          <div
            onClick={() => setShow((state) => !state)}
            className='flex items-center justify-end pl-4 pt-4 cursor-pointer'
          >
            <Image
              src={Resource.Svg.CROSSWHITE}
              alt='close-icon'
              width={30}
              height={30}
            />
          </div>
          <ul className='flex flex-col py-10'>
            <Link href={Resource.Routes.HOME} passHref>
              <li
                style={{
                  borderBottom: '1px solid #282828',
                  borderTop: '1px solid #282828',
                }}
                className='text-gray-300
        font-[500] p-6 cursor-pointer ease-in duration-300
         hover:text-[#FF5F1E] transition-all'
              >
                <a className='text-2xl'>خانه</a>
              </li>
            </Link>

            <Link href={Resource.Routes.PRODUCTS} passHref>
              <li
                style={{
                  borderBottom: '1px solid #282828',
                }}
                className='text-gray-300 
       font-[500] hover:text-[#FF5F1E] ease-in duration-300 p-6 cursor-pointer transition-all'
              >
                <a className='text-2xl'>خرید</a>
              </li>
            </Link>

            <Link href={Resource.Routes.CATEGORIES} passHref>
              <li
                style={{
                  borderBottom: '1px solid #282828',
                }}
                className='text-gray-300 
       font-[500] hover:text-[#FF5F1E] ease-in duration-300 p-6 cursor-pointer transition-all'
              >
                <a className='text-2xl'>دسته ‌بندی</a>
              </li>
            </Link>

            <Link href={Resource.Routes.ABOUT} passHref>
              <li
                style={{
                  borderBottom: '1px solid #282828',
                }}
                className='text-gray-300 
       font-[500] hover:text-[#FF5F1E] ease-in duration-300 p-6 cursor-pointer transition-all'
              >
                <a className='text-2xl'>درباره ‌ما</a>
              </li>
            </Link>

            <Link href={Resource.Routes.CONTACT} passHref>
              <li
                style={{
                  borderBottom: '1px solid #282828',
                }}
                className='text-gray-300
       font-[500] hover:text-[#FF5F1E] ease-in duration-300 p-6 cursor-pointer transition-all'
              >
                <a className='text-2xl'>تماس‌با‌ما</a>
              </li>
            </Link>

            <Link href={Resource.Routes.AUTH} passHref>
              <li
                style={{
                  borderBottom: '1px solid #282828',
                }}
                className='text-gray-300 
       font-[500] hover:text-[#FF5F1E] ease-in duration-300 p-6 cursor-pointer transition-all'
              >
                <a className='text-2xl'>ورود/ثبت‌نام</a>
              </li>
            </Link>
          </ul>
        </div>
      </CSSTransition>
    </>
  );
};

const ResponsiveNavbar = ({ setShow, show }) => {
  return (
    <nav className='z-50 bg-[#111111] flex items-center justify-evenly p-8 px-0 transition-all duration-500 ease-in'>
      <Image
        onClick={() => setShow((state) => !state)}
        src={Resource.Svg.HAMBURGER}
        alt='hamburger'
        className='w-8 h-8 cursor-pointer'
      />
      <Link href={Resource.Routes.HOME} passHref>
        <Image
          width={150}
          height={40}
          src={Resource.Images.LOGO_IMG}
          alt='main-logo'
          className='cursor-pointer'
          objectFit='contain'
        />
      </Link>
      <SideBar setShow={setShow} show={show} />
      <div className='flex items-center justify-center'>
        <Link href={Resource.Routes.CART} passHref>
          <div className='ml-4 relative cursor-pointer'>
            <Image
              width={25}
              height={25}
              src={Resource.Svg.BASKET}
              alt='basket'
            />
            <div
              className='absolute bg-red-900 top-0 right-0 h-8 w-8
         rounded-full pt-1 text-xl text-white grid 
         place-items-center translate-x-6 translate-y-[-6px]'
            >
              15
            </div>
          </div>
        </Link>
        <Image
          width={25}
          height={20}
          src={Resource.Svg.SEARCH2}
          alt='search'
          className='cursor-pointer'
        />
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [offset, setOffset] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (width < 768) {
    return <ResponsiveNavbar show={showSideBar} setShow={setShowSideBar} />;
  }

  return (
    <nav
      className={`${
        offset > 200 && 'sticky top-0 animate-slide-down-animation'
      } z-50 bg-[#111111] flex items-center justify-evenly p-8 transition-all duration-500 ease-in`}
    >
      <Link href={Resource.Routes.HOME} passHref>
        <Image
          width={150}
          height={40}
          objectFit='contain'
          src={
            'https://prs.themedemo.org/PRSADD15/PRS360/img/logo-1645681599.jpg'
          }
          alt='main-logo'
          className='cursor-pointer'
        />
      </Link>
      <ul className='flex items-center'>
        <li className='text-[#FF5F1E] ml-10 font-[500]'>
          <Link href={Resource.Routes.HOME}>
            <a className='text-2xl'>خانه</a>
          </Link>
        </li>
        <li className='text-white ml-10 font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.PRODUCTS}>
            <a className='text-2xl'>خرید</a>
          </Link>
        </li>
        <li className='text-white ml-10 font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.CATEGORIES}>
            <a className='text-2xl'>دسته ‌بندی</a>
          </Link>
        </li>
        <li className='text-white ml-10 font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.ABOUT}>
            <a className='text-2xl'>درباره ‌ما</a>
          </Link>
        </li>
        <li className='text-white font-[500] hover:text-[#FF5F1E] ease-in duration-300 transition-all'>
          <Link href={Resource.Routes.CONTACT}>
            <a className='text-2xl'>تماس‌با‌ما</a>
          </Link>
        </li>
      </ul>
      <div className='flex items-center justify-center'>
        <Link href={Resource.Routes.CART} passHref>
          <div className='ml-4 relative cursor-pointer'>
            <Image
              width={25}
              height={25}
              src={Resource.Svg.BASKET}
              alt='basket'
            />
            <div
              className='absolute bg-red-900 top-0 right-0 h-8 w-8
           rounded-full pt-1 text-xl text-white grid 
           place-items-center translate-x-6 translate-y-[-6px]'
            >
              15
            </div>
          </div>
        </Link>
        <Image
          width={25}
          height={20}
          src={Resource.Svg.SEARCH2}
          alt='search'
          className='cursor-pointer'
        />
        <li
          className='text-white mr-10 font-[500] hover:bg-white hover:text-gray-700 py-4 px-8
        list-none ease-in duration-300 transition-all border border-solid border-gray-700
        rounded-md cursor-pointer'
        >
          <Link href={Resource.Routes.AUTH}>
            <a className='text-2xl'>ورود/ثبت‌نام</a>
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
