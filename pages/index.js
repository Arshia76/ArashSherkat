import Head from 'next/head';
import ContactPart from '../components/ContactPart';
import Hero from '../components/index/Hero';
import Product from '../components/Product';
import Service from '../components/index/Service';
import SideImg from '../components/SideImg';

export default function Home() {
  return (
    <main className='w-full flex flex-col justify-center items-center bg-[url("http://be.beantownthemes.com/html/content/carparts/images/carparts-sectionbg2.png") bg-center bg-no-repeat bg-cover]'>
      <Head>
        <title>خانه</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:justify-center lg:items-center mt-64 mb-24'>
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
      <div className='flex flex-col justify-center items-center px-28 py-32 w-full bg-[#111111]'>
        <div className='flex md:flex-row flex-col justify-between w-full items-center mb-20'>
          <h4 className='text-white text-6xl mb-12 md:mb-0'>محصولات اخیر</h4>
          <button
            className='relative overflow-hidden z-10 transition-all duration-500 ease-in-out text-white rounded-full py-8 px-24 text-2xl
          after:content-[""] after:absolute after:bottom-[0] after:left-[0] after:w-full after:h-full
          after:bg-[#262626] after:rounded-full after:-z-20 before:content-[""] before:absolute before:bottom-[0] before:left-[0] before:w-[0%] before:h-full
          before:bg-[#222222] before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:w-full'
          >
            مشاهده تمام محصولات
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:items-center lg:justify-center w-full h-full'>
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic4-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic10-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic1-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic2-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center px-24 py-32 w-full bg-black'>
        <div className='flex flex-col md:flex-row justify-between w-full items-center mb-20'>
          <h4 className='text-white mb-12 md:mb-0 text-6xl'>
            محصولات دارای تخفیف
          </h4>
          <button
            className='relative overflow-hidden z-10 transition-all duration-500 ease-in-out text-white rounded-full py-8 px-24 text-2xl
          after:content-[""] after:absolute after:bottom-[0] after:left-[0] after:w-full after:h-full
          after:bg-[#262626] after:rounded-full after:-z-20 before:content-[""] before:absolute before:bottom-[0] before:left-[0] before:w-[0%] before:h-full
          before:bg-[#222222] before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:w-full'
          >
            مشاهده تمام محصولات
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:flex lg:items-center lg:justify-center w-full h-full'>
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic5-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic8-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic7-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
          <Product
            img='http://be.beantownthemes.com/html/content/carparts/images/carparts-products-pic6-480x569.jpg'
            name='تایر'
            price='5000'
            code='Mg-786124'
            manufecturer='شرکت دیجی کالا'
          />
        </div>
      </div>
      <SideImg />
      <ContactPart />
    </main>
  );
}
