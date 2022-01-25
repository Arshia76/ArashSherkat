import Image from 'next/image';
import PropTypes from 'prop-types';

const Product = (props) => {
  return (
    <div className='flex w-full px-8 h-full items-center justify-center flex-col'>
      <div className='w-full h-[300px] relative flex justify-center items-center'>
        <Image
          layout='fill'
          objectFit='cover'
          src={props.img}
          alt={props.name}
        />
      </div>
      <h4 className='text-white text-6xl mt-8 self-start'>{props.name}</h4>
      <span className='text-[#77A464] text-3xl mt-12 self-start'>
        {props.price} ريال
      </span>
      <div className='flex items-center mt-8 self-start'>
        <span className='text-white text-2xl'>کد محصول:</span>
        <span className='text-white text-2xl mr-2'>{props.code}</span>
      </div>
      <div className='flex items-center mt-4 self-start'>
        <span className='text-white text-2xl'>تولید کننده:</span>
        <span className='text-white text-2xl mr-2'>{props.manufecturer}</span>
      </div>
    </div>
  );
};

Product.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  code: PropTypes.string,
  manufecturer: PropTypes.string,
};

export default Product;
