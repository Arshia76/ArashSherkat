import Image from 'next/image';
import Resource from '../../public/Resource';
import { useRouter } from 'next/router';

const Hero = () => {
  const router = useRouter();
  return (
    <div className='md:h-[80vh] h-[60vh] px-20 flex items-center justify-center w-full relative bg-[#111111]'>
      <div className='relative md:mt-56 mt-12  w-full md:h-screen h-[60vh] flex justify-center items-center'>
        <Image
          layout='fill'
          loading='eager'
          priority={true}
          className='brightness-50'
          objectFit='cover'
          src={
            'https://parkers-images.bauersecure.com/pagefiles/276901/01_kodiaq_snow1.jpg'
          }
          alt='hero-img'
        />
      </div>
      <div className='z-10 absolute w-1/2  md:w-1/3 md:top-10 md:right-36 flex flex-col justify-start pt-28'>
        <h1 className='text-white text-center md:text-right text-5xl md:text-7xl mb-16 leading-snug'>
          سلام به سایت شرکت خوش آمدید
        </h1>
        <p className='hidden md:block text-white text-3xl mb-16 leading-loose text-justify'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <button
          onClick={() => router.push(Resource.Routes.PRODUCTS)}
          className='bg-[#FF5F1E] text-white
        text-2xl rounded-full px-10 mx-auto md:mx-0 md:px-20 py-4 md:w-fit '
        >
          مشاهده محصولات
        </button>
      </div>
    </div>
  );
};

export default Hero;
