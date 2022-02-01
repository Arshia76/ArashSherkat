import Image from 'next/image';
import PropTypes from 'prop-types';

const HeroSecond = (props) => {
  return (
    <div className='relative flex justify-evenly items-center w-screen h-[50vh] md:h-[70vh] pt-16 bg-[#111111] '>
      <div className='relative h-[60vh] md:h-[95vh] w-2/3 flex justify-center items-center'>
        <Image
          layout='fill'
          objectFit='cover'
          loading='eager'
          priority={true}
          src={props.img}
          alt={props.title}
        />
      </div>
      <h2 className='h-full w-1/2 text-white z-50 mr-10 mt-64 text-7xl md:text-[100px]'>
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
