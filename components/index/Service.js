import Image from 'next/image';
import PropTypes from 'prop-types';

const Service = (props) => {
  return (
    <div className='flex flex-col w-full p-12 justify-center items-center'>
      <Image
        width={80}
        height={70}
        objectFit='contain'
        src={props.img}
        alt='service-img'
      />
      <h4 className='text-black text-center text-4xl mt-20 mb-10'>
        {props.title}
      </h4>
      <p className='text-black text-center text-2xl leading-normal'>
        {props.description}
      </p>
    </div>
  );
};

Service.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Service;
