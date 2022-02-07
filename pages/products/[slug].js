import Image from 'next/image';
import Service from '../../components/index/Service';
import Product from '../../components/Product';
import ContactPart from '../../components/ContactPart';
import { Fragment } from 'react';

const ProductPage = () => {
  return (
    <Fragment>
      <div className='flex flex-col w-full h-full py-14 px-16 md:px-32 mb-96'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[35px] w-full'>
          <div className='relative w-full h-[350px] md:h-[500px] mb-16 md:mb-0'>
            <Image
              layout='fill'
              objectFit='cover'
              src={
                'http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic4-600x711.jpg'
              }
              alt='img'
            />
          </div>
          <div className='flex w-full h-full flex-col justify-between items-center md:items-start'>
            <h2 className='text-black text-6xl mb-14 md:mb-0'>
              تایر مقاوم تویوتا
            </h2>
            <span className='text-[#FF5F1E] text-5xl mb-14 md:mb-0'>
              160000 ریال
            </span>
            <div className='mb-14 md:mb-0'>
              <div className='flex items-center mb-6'>
                <span className='text-3xl text-black ml-2'>کد محصول:</span>
                <span className='text-3xl text-black'>MG-782456</span>
              </div>
              <div className='flex items-center'>
                <span className='text-3xl text-black ml-2'>تولید کننده:</span>
                <span className='text-3xl text-black'>retrum</span>
              </div>
            </div>
            <div>
              {/* select */}
              <button className='text-3xl mb-14 md:mb-0 text-white transition-all duration-500 ease-in bg-[#E94F11] py-4 px-8 rounded-full hover:opacity-90'>
                اضافه کردن به سبد
              </button>
            </div>
            <div className='flex items-center'>
              <span className='text-3xl text-black ml-2'>دسته‌بندی:</span>
              <span className='text-3xl text-black'>دسته1، دسته2</span>
            </div>
          </div>
        </div>

        <div className='flex items-center w-full justify-center  mt-28'>
          <span className='text-[#E94F11] w-fit px-10 text-center pb-2 font-medium text-3xl border-solid border-transparent border-b-[#E94F11] border-b-2 ml-12'>
            توضیحات
          </span>
          <span className='text-[#444456] w-fit px-10 font-medium pb-2 text-center text-3xl'>
            اطلاعات اضافه
          </span>
        </div>
        <div className='hidden'>
          <table>
            <tbody>
              <tr>
                <td>وزن</td>
                <td>500gr</td>
              </tr>
              <tr>
                <td>ابعاد</td>
                <td>50 * 40 * 120</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='py-24 w-full px-0 md:px-32 border-solid border-transparent border-y-2 border-y-[#EBEBEB]'>
          <p className='text-black text-3xl leading-normal mb-12 md:mb-8'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div className='flex items-center mb-6'>
            <span className='text-2xl font-medium ml-2'>متن:</span>
            <span className='text-2xl'>سلام چظوری خوبی</span>
          </div>
          <div className='flex items-center mb-6'>
            <span className='text-2xl font-medium ml-2'>متن:</span>
            <span className='text-2xl'>سلام چظوری خوبی</span>
          </div>
          <div className='flex items-center mb-6'>
            <span className='text-2xl font-medium ml-2'>متن:</span>
            <span className='text-2xl'>سلام چظوری خوبی</span>
          </div>
          <div className='flex items-center mb-16'>
            <span className='text-2xl font-medium ml-2'>متن:</span>
            <span className='text-2xl'>سلام چظوری خوبی</span>
          </div>
          <p className='text-2xl text-black mb-24'>
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          {/* <div className='flex flex-col justify-center items-center w-full'>
          <span className='text-[#424542] text-3xl mb-14'>
            دنبال محصولات با کیفیت هستید؟
          </span>
          <span className='text-black text-7xl mb-14'>09383130658</span>
          <p className='text-[#424542] text-3xl'>
            ما شنبه تا چهارشنبه از ساعت 6 تا 8 در دسترس می‌باشیم
          </p>
        </div> */}
          <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:justify-center lg:items-center mt-32'>
            <Service
              img='http://be.beantownthemes.com/html/content/carparts/images/carparts-home-icon1.png'
              title='گارانتی بازگشت در 30 روز'
              description='ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون'
            />
            <Service
              img='http://be.beantownthemes.com/html/content/carparts/images/carparts-home-icon2.png'
              title='ارسال رایگان'
              description='ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون'
            />
            <Service
              img='http://be.beantownthemes.com/html/content/carparts/images/carparts-home-icon3.png'
              title='تحویل سریع'
              description='ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون'
            />
            <Service
              img='http://be.beantownthemes.com/html/content/carparts/images/carparts-home-icon4.png'
              title='تحویل سالم'
              description='ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون'
            />
          </div>
        </div>
        <h2 className='text-7xl text-black my-16 mr-6'>محصولات مشابه</h2>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:items-center lg:justify-center w-full h-full'>
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
        </div>
      </div>
      <ContactPart />
    </Fragment>
  );
};

export default ProductPage;
