import Image from 'next/image';
import Resource from '../../public/Resource';

const Video = () => {
  return (
    <div className='relative flex justify-center items-center w-full h-[500px] md:h-[650px] cursor-pointer px-24 pb-96 bg-black'>
      <div className='flex justify-center items-center relative w-full h-full'>
        <Image
          layout='fill'
          objectFit='cover'
          src={Resource.Images.VIDEO_IMG}
          alt='video'
        />
        <div>
          <Image
            width={60}
            height={60}
            src={'https://cdn-icons-png.flaticon.com/512/260/260446.png'}
            alt='player'
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
