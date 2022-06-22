import Image from 'next/image';
import Resource from '../../public/Resource';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <div className='flex justify-between items-start p-4 shadow-md mb-2'>
      <div className='flex items-start'>
        <div className='relative flex items-center justify-center w-64 h-44 rounded-md'>
          <Image
            src={props.img}
            alt={props.productName}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </div>
        <div className='flex flex-col mr-6 '>
          <span className='text-2xl  text-black mb-6'>
            {props.productPrice}ریال
          </span>
          <h2 className='text-black text-3xl md:text-3xl mb-6'>
            {props.productName}
          </h2>
          <p className='text-gray-800 text-2xl  '>{props.productDescription}</p>
        </div>
      </div>
      <Image
        src={Resource.Svg.CROSS}
        alt='delete-item'
        width={40}
        height={40}
        className='cursor-pointer'
      />
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.string,
  productDescription: PropTypes.string,
};

export default Item;
