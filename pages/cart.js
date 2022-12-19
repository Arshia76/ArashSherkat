import Fee from '../components/cart/Fee';
import Item from '../components/cart/Item';
import Resource from '../public/Resource';

const cart = () => {
  return (
    <div
      className='grid grid-cols-1 md:grid-cols-3 min-h-[70vh] 
     gap-10 px-12 my-12'
    >
      <Fee />
      <div className='md:col-span-2 md:w-3/4'>
        <Item
          productName='تایر'
          productPrice='180000'
          productDescription='لورم یک متن ساختگی برای استفاده به عنوان جایگزین می‌باشد'
          img={Resource.Images.IMAGE_1}
        />
        <Item
          productName='تایر'
          productPrice='265000'
          productDescription='لورم یک متن ساختگی برای استفاده به عنوان جایگزین می‌باشد'
          img={Resource.Images.IMAGE_2}
        />
        <Item
          productName='تایر'
          productPrice='265000'
          productDescription='لورم یک متن ساختگی برای استفاده به عنوان جایگزین می‌باشد'
          img={Resource.Images.IMAGE_4}
        />
        <Item
          productName='تایر'
          productPrice='265000'
          productDescription='لورم یک متن ساختگی برای استفاده به عنوان جایگزین می‌باشد'
          img={Resource.Images.IMAGE_5}
        />
      </div>
    </div>
  );
};

export default cart;
