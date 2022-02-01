import { useState } from 'react';
import Image from 'next/image';

const Auth = () => {
  const [state, setState] = useState('login');

  const Register = () => {
    return (
      <div
        className='absolute opacity-90 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-[#212842] px-10 rounded-xl flex pb-10 pt-20 
      flex-col items-center w-2/3 md:w-1/3 h-fit'
      >
        <h2 className='text-7xl text-white mb-16'>ثبت‌نام</h2>
        <input
          className='focus:border focus:border-solid focus:border-slate-500 border border-solid border-transparent
           text-2xl mb-10 rounded-xl w-full p-6 bg-[#272E4A] text-white placeholder:text-[#9298AA]'
          type='text'
          placeholder='نام کاربری'
        />
        <input
          className='focus:border focus:border-solid focus:border-slate-500 border border-solid border-transparent 
          text-2xl mb-10 rounded-xl w-full p-6 bg-[#272E4A] text-white placeholder:text-[#9298AA]'
          type='number'
          placeholder='شماره موبایل'
        />
        <input
          className='focus:border focus:border-solid focus:border-slate-500 border border-solid border-transparent 
          text-2xl mb-14 rounded-xl p-6 w-full bg-[#272E4A] text-white placeholder:text-[#9298AA]'
          type='password'
          placeholder='رمز عبور'
        />

        <button
          className='text-3xl mb-14 py-6 px-10 w-full rounded-full text-white transition-all duration-500 ease-in
        bg-[#805FEC] hover:bg-white hover:text-[#805FEC]'
        >
          ثبت‌نام
        </button>
        <div className='flex items-center justify-center'>
          <span className='text-[#4E6495] text-2xl ml-4'>
            حساب کاربری دارم؟
          </span>
          <span
            className='text-white cursor-pointer text-3xl'
            onClick={() => setState('login')}
          >
            ورود
          </span>
        </div>
      </div>
    );
  };

  const Login = () => {
    return (
      <div
        className='absolute opacity-90 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  bg-[#212842] px-10 rounded-xl flex pb-10 pt-20 
      flex-col items-center w-2/3 md:w-1/3 h-fit'
      >
        <h2 className='text-7xl text-white mb-16'>ورود</h2>
        <input
          className='focus:border focus:border-solid focus:border-slate-500 border border-solid border-transparent 
          text-2xl mb-10 rounded-xl w-full p-6 bg-[#272E4A] text-white placeholder:text-[#9298AA]'
          type='text'
          placeholder='نام کاربری'
        />
        <input
          className='focus:border focus:border-solid focus:border-slate-500 border border-solid border-transparent 
          text-2xl mb-14 rounded-xl p-6 w-full bg-[#272E4A] text-white placeholder:text-[#9298AA]'
          type='password'
          placeholder='رمز عبور'
        />
        <div className='flex items-center mb-16'>
          <div></div>
          <span className='text-2xl text-[#4C619E]'>
            رمز عبور خود را فراموش کردم؟
          </span>
        </div>
        <button
          className='text-3xl mb-14 py-6 px-10 w-full rounded-full transition-all duration-500 ease-in 
        text-white bg-[#805FEC] hover:bg-white hover:text-[#805FEC]'
        >
          ورود
        </button>
        <div className='flex items-center justify-center'>
          <span className='text-[#4E6495] text-2xl ml-4'>
            حساب کاربری ندارم؟
          </span>
          <span
            className='text-white text-3xl cursor-pointer'
            onClick={() => setState('register')}
          >
            ثبت‌نام
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className='relative w-full h-full flex justify-center items-center'>
      <div className='w-full h-screen relative flex justify-center items-center'>
        <Image
          layout='fill'
          objectFit='cover'
          className='brightness-30'
          src={'https://wallpaperaccess.com/full/499250.jpg'}
          alt='auth-img'
        />
      </div>
      {state === 'login' ? (
        <Login />
      ) : state === 'register' ? (
        <Register />
      ) : null}
    </div>
  );
};

export default Auth;
