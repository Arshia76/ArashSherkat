import Image from 'next/image';
import PropTypes from 'prop-types';

const HeroSecond = (props) => {
  return (
    <div className='relative w-screen h-[50vh] md:h-[90vh] bg-white'>
      <div className='relative h-[60vh] md:h-full w-full flex justify-center items-center'>
        <Image
          layout='fill'
          objectFit='cover'
          loading='eager'
          className='brightness-50'
          priority={true}
          src={props.img}
          alt={props.title}
        />
      </div>
      <h2 className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[#cc9966] text-7xl md:text-[100px]'>
        {props.title}
      </h2>
    </div>
  );
};

HeroSecond.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default HeroSecond;
