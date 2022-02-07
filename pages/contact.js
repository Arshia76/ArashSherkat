import Image from 'next/image';
import Resource from '../public/Resource';
import Form from '../components/contact/Form';
import HeroSecond from '../components/HeroSecond';
import ContactPart from '../components/ContactPart';

const ContactPage = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <HeroSecond
        img='https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
        title='تماس با ما'
      />
      <div className='grid mb-96 grid-cols-1 md:grid-cols-2 w-full gap-x-[30px] mt-64 md:mt-[300px] px-12 md:px-32'>
        <div className='mb-32 md:mb-0'>
          <h2 className='text-6xl text-black mb-24'>
            آیا <span className='text-[#FF5F1E]'>سوالی</span> دارید؟
          </h2>
          <span className='text-4xl text-black md:text-right leading-normal text-center'>
            تبریز-شهرک باغمیشه-میدان اطلس-مجتمع مسکونی صدف
          </span>
          <div className='flex items-center mb-10 mt-24'>
            <Image
              width={20}
              height={20}
              src={Resource.Svg.MOBILE}
              alt='mobile'
            />
            <span className='text-2xl text-black mr-2'>09383130658</span>
          </div>
          <div className='flex items-center mb-10'>
            <Image
              width={20}
              height={20}
              src={Resource.Svg.EMAIL}
              alt='email'
            />
            <span className='text-2xl text-black mr-2'>arshia@yahoo.com</span>
          </div>
          <div>
            <span className='text-2xl text-black'>زمان‌های شرکت</span>
            <span className='text-2xl text-black font-semibold'>
              از ساعت 6 صبح تا 8 بعد از ظهر
            </span>
          </div>
        </div>
        <Form />
      </div>
      <ContactPart />
    </div>
  );
};

export default ContactPage;
