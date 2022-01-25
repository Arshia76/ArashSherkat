import Image from 'next/image';
import Resource from '../public/Resource';

const SideImg = () => {
  return (
    <div className='grid grid-cols-2 gap-x-[80px] w-full my-40 justify-items-center px-40'>
      <div className='w-full h-[500px]'>
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
      <div className='w-full h-full flex justify-between flex-col items-start'>
        <span className='bg-[#111111] text-white text-2xl py-2 px-8 rounded-l-full rounded-br-full'>
          هدف ما چیست ؟
        </span>
        <h4 className='text-black text-6xl leading-snug '>
          هدف ما ارائه بهترین خدمات با مناسبترین هزینه می‌باشد
        </h4>
        <ul>
          <li className='flex items-center mb-10'>
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
          <li className='flex items-center mb-10'>
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
          <li className='flex items-center'>
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
        <button className='bg-[#FF5F1E] text-white text-3xl py-6 px-44 rounded-full'>
          درباره ما
        </button>
      </div>
    </div>
  );
};

export default SideImg;