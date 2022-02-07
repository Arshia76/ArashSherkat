import Image from 'next/image';
import PropTypes from 'prop-types';

const Category = (props) => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full mb-20'>
      <div className='relative cursor-pointer w-full h-[350px] flex justify-center items-center'>
        <Image
          layout='fill'
          objectFit='cover'
          src={props.img}
          alt={props.category}
        />
      </div>
      <h5 className='text-white text-6xl mt-10'>{props.category}</h5>
    </div>
  );
};

Category.propTypes = {
  img: PropTypes.string,
  category: PropTypes.string,
};

export default Category;
