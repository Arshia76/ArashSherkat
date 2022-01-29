import Image from 'next/image';

const Video = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-[650px] cursor-pointer px-28 pb-96 bg-black'>
      <div className='flex justify-center items-center relative w-full h-full'>
        <Image
          layout='fill'
          objectFit='cover'
          src={
            'http://be.beantownthemes.com/html/content/carparts/images/carparts-wrapbg2.jpg'
          }
          alt='video'
        />
        <div>
          <Image
            width={60}
            height={60}
            src={
              'http://be.beantownthemes.com/html/content/carparts/images/carparts-icon1.png'
            }
            alt='player'
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
