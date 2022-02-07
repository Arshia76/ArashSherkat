import Image from 'next/image';
import Product from '../../components/Product';

const ProductsPage = () => {
  return (
    <div>
      <h4 className='text-white text-8xl mb-16 text-center pt-32 h-[40vh] bg-[#111111]'>
        محصولات
      </h4>
      <div className='w-full h-full bg-white px-12 py-10 px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[10px] gap-y-[40px]'>
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic4-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic10-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic1-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic2-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic5-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic8-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic7-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic6-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic4-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic10-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic1-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
        <Product
          img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic2-480x569.jpg'
          name='تایر'
          price='5000'
          code='Mg-786124'
          manufecturer='شرکت دیجی کالا'
          page='Products'
        />
      </div>
    </div>
  );
};

export default ProductsPage;
