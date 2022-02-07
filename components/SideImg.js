import Image from 'next/image';
import Resource from '../public/Resource';

const SideImg = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[80px] w-full mb-96 mt-36 justify-between justify-items-between px-28'>
      <div className='w-full h-[500px] mb-20 md-mb-0'>
        <div className='relative w-full h-full'>
          <Image
            layout='fill'
            objectFit='cover'
            className='rounded-tl-3xl'
            src={
              'http://be.beantownthemes.com/html/content/carparts/images/carparts-home-pic1.png'
            }
            alt='side-img'
          />
        </div>
      </div>
      <div className='w-full h-full flex justify-center md:justify-between flex-col items-start'>
        <span className='bg-[#111111] text-white text-2xl mb-10 md:mb-8 md:mb-0 py-2 px-8 rounded-l-full rounded-br-full'>
          هدف ما چیست ؟
        </span>
        <h4 className='text-black text-center md:text-right text-4xl md:text-6xl leading-snug md:leading-snug mb-16 md:mb-0'>
          هدف ما ارائه بهترین خدمات با مناسبترین هزینه می‌باشد
        </h4>
        <ul className='mb-16 md:mb-0'>
          <li className='flex items-start md:items-center mb-10 text-center md:text-right'>
            <Image
              height={15}
              width={15}
              src={Resource.FilledSVG.ARROWLEFTFILLED}
              alt='arrow'
            />
            <span className='mr-2 text-2xl text-gray'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
          </li>
          <li className='flex items-start md:items-center text-center md:text-right mb-10'>
            <Image
              height={15}
              width={15}
              src={Resource.FilledSVG.ARROWLEFTFILLED}
              alt='arrow'
            />
            <span className='mr-2 text-2xl text-gray'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
          </li>
          <li className='flex items-start md:items-center text-center md:text-right'>
            <Image
              height={15}
              width={15}
              src={Resource.FilledSVG.ARROWLEFTFILLED}
              alt='arrow'
            />
            <span className='mr-2 text-2xl text-gray'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </span>
          </li>
        </ul>
        <button className='bg-[#FF5F1E] text-white text-3xl py-6 px-24 mx-auto md:mx-0 md:px-44 rounded-full'>
          درباره ما
        </button>
      </div>
    </div>
  );
};

export default SideImg;
