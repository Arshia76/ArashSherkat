import Image from 'next/image';
import Resource from '../public/Resource';

const ContactPart = () => {
  return (
    <div className='relative bg-[#111111] flex justify-center items-center w-full h-[200px]'>
      <div
        className={`absolute bg-no-repeat bg-center bg-cover bg-[url("/Resource/Images/bg-img.png")] bottom-0 flex flex-col justify-around items-center
       w-[90%] bg-[#FF6F24] h-[350px]`}
      >
        <span className='bg-[#111111] text-white text-2xl py-4 px-6 rounded-l-full rounded-br-full'>
          آیا دنبال تجهیزات کارخانه‌ای هستید؟
        </span>
        <div className='flex items-center'>
          <Image
            width={80}
            height={80}
            src={Resource.Svg.MOBILE}
            alt='mobile'
          />
          <span className='text-white text-4xl mr-6'>09383130658</span>
        </div>
        <span className='px-6 text-white text-3xl text-center leading-normal'>
          شرکت روزهای شنبه تا چهار شنبه از ساعت 8 صبح تا 6 بعد از ظهر دایر
          می‌باشد.
        </span>
      </div>
    </div>
  );
};

export default ContactPart;
