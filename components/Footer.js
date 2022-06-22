import Image from 'next/image';
import Resource from '../public/Resource';

const Footer = () => {
  return (
    <div className='z-50 bg-[#111111] grid grid-cols-1 justify-items-start md:grid-cols-3 py-24 px-10 md:justify-items-center'>
      <div className='flex flex-col justify-between h-full w-full'>
        <p className='text-3xl text-white leading-normal'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <span className='text-2xl my-10 text-[#b7b7a4]'>09383130658</span>
        <span className='text-2xl text-[#b7b7a4]'>arshia@gmail.com</span>
      </div>
      <div className='my-16 md:my-0'>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            className='border-solid border-2 border-black rounded-full w-[50%] h-[50%]'
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl text-[#b7b7a4] mr-4'>
            عودت کالا در 30 روز
          </span>
        </div>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl text-[#b7b7a4] mr-4'>ارسال رایگان</span>
        </div>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#b7b7a4]'>
            تحویل سریع در 48 ساعت
          </span>
        </div>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl mr-4 text-[#b7b7a4]'>
            بسته‌بندی و تحویل سالم
          </span>
        </div>
      </div>
      <div>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl mr-4 text-[#b7b7a4]'>سفارش ها</span>
        </div>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#b7b7a4]'>دانلود ها</span>
        </div>
        <div className='flex items-center mb-6 cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#b7b7a4]'>آدرس ها</span>
        </div>
        <div className='flex items-center cursor-pointer'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl mr-4 text-[#b7b7a4]'>سفارش ها</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
