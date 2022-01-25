import Image from 'next/image';
import Resource from '../public/Resource';

const Footer = () => {
  return (
    <div className='grid grid-cols-3 py-24 px-10 justify-items-center'>
      <div className='flex flex-col justify-between h-full w-full'>
        <p className='text-3xl'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <span className='text-2xl my-10'>09383130658</span>
        <span className='text-2xl'>arshia@gmail.com</span>
      </div>
      <div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            className='border-solid border-2 border-black rounded-full w-[50%] h-[50%]'
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl text-[#E86A01] mr-4'>
            عودت کالا در 30 روز
          </span>
        </div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#E86A01]'>ارسال رایگان</span>
        </div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#E86A01]'>
            تحویل سریع در 48 ساعت
          </span>
        </div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#E86A01]'>
            بسته‌بندی و تحویل سالم
          </span>
        </div>
      </div>
      <div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#E86A01]'>سفارش ها</span>
        </div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#E86A01]'>دانلود ها</span>
        </div>
        <div className='flex items-center mb-6'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl  mr-4 text-[#E86A01]'>آدرس ها</span>
        </div>
        <div className='flex items-center'>
          <Image
            width={15}
            height={15}
            src={Resource.FilledSVG.ARROWLEFTFILLED}
            alt='arrow-left'
          />
          <span className='text-2xl mr-4 text-[#E86A01]'>سفارش ها</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
