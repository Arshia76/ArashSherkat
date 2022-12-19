import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Resource from '../public/Resource';

const Product = (props) => {
  const [cart, setCart] = useState(
    Resource.FilledSVG.SHOPPING_CART_WHITE_FILLED
  );
  const [link, setLink] = useState(Resource.FilledSVG.LINK_WHITE_FILLED);
  const router = useRouter();
  return (
    <div className='mb-24 lg:mb-0 flex overflow-hidden w-full px-8 h-full items-center justify-center flex-col'>
      <div className='w-full h-[300px] group relative flex justify-center items-center'>
        <Image
          layout='fill'
          objectFit='cover'
          className='group-hover:scale-125 group-hover:brightness-90 transition-all duration-500 ease-in'
          src={props.img}
          alt={props.name}
        />
        <div className='z-10 bg-[#D74D1B] opacity-0 group-hover:animate-appear-animation group-hover:opacity-100  absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%]'>
          <div className='flex items-center'>
            <div
              onClick={() => router.push(`${Resource.Routes.PRODUCTS}/2`)}
              onMouseOver={() => setLink(Resource.FilledSVG.LINK_ORANGE_FILLED)}
              onMouseLeave={() => setLink(Resource.FilledSVG.LINK_WHITE_FILLED)}
              className='border-l-transparent cursor-pointer hover:bg-white border-solid border px-6 py-4 border-red-500'
            >
              <Image
                width={30}
                height={30}
                className='ml-8'
                src={link}
                alt='link-img'
                objectFit='cover'
              />
            </div>
            <div
              onClick={() => router.push(Resource.Routes.CART)}
              onMouseOver={() =>
                setCart(Resource.FilledSVG.SHOPPING_CART_ORANGE_FILLED)
              }
              onMouseLeave={() =>
                setCart(Resource.FilledSVG.SHOPPING_CART_WHITE_FILLED)
              }
              className='border-solid cursor-pointer hover:bg-white border px-6 py-4 border-red-500'
            >
              <Image
                width={30}
                height={30}
                src={cart}
                alt='shopping-cart-img'
              />
            </div>
          </div>
        </div>
      </div>
      <h4
        className={`${
          props.page === 'Products' ? 'text-black' : 'text-white'
        } text-6xl mt-8 self-start`}
      >
        {props.name}
      </h4>
      <span className='text-[#77A464] text-3xl mt-12 self-start'>
        {props.price} ريال
      </span>
      <div className='flex items-center mt-8 self-start'>
        <span
          className={`${
            props.page === 'Products' ? 'text-black' : 'text-white'
          } text-2xl`}
        >
          کد محصول:
        </span>
        <span
          className={`${
            props.page === 'Products' ? 'text-black' : 'text-white'
          } text-2xl mr-2`}
        >
          {props.code}
        </span>
      </div>
      <div className='flex items-center mt-4 self-start'>
        <span
          className={` ${
            props.page === 'Products' ? 'text-black' : 'text-white'
          } text-2xl`}
        >
          تولید کننده:
        </span>
        <span
          className={`${
            props.page === 'Products' ? 'text-black' : 'text-white'
          } text-2xl mr-2`}
        >
          {props.manufecturer}
        </span>
      </div>
    </div>
  );
};

Product.defaultProps = {
  page: 'Home',
};

Product.propTypes = {
  page: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.string,
  code: PropTypes.string,
  manufecturer: PropTypes.string,
};

export default Product;
