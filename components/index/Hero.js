import Image from 'next/image';

const Hero = () => {
  return (
    <div className='h-[80vh] px-20 flex items-center justify-center w-full relative bg-[#111111]'>
      <div className='relative mt-56 w-full h-screen flex justify-center items-center'>
        <Image
          layout='fill'
          className='brightness-[.3]'
          objectFit='cover'
          src={
            'https://parkers-images.bauersecure.com/pagefiles/276901/01_kodiaq_snow1.jpg'
          }
          alt='hero-img'
        />
      </div>
      <div className='z-10 absolute w-1/3 top-10  right-36 flex flex-col justify-start pt-28'>
        <h1 className='text-white text-7xl mb-16 leading-snug'>
          سلام به سایت شرکت خوش آمدید
        </h1>
        <p className='text-white text-3xl mb-16 leading-loose text-justify'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <button
          className='bg-[#FF5F1E] text-white
        text-2xl rounded-full px-20 py-4 w-fit '
        >
          مشاهده محصولات
        </button>
      </div>
    </div>
  );
};

export default Hero;
