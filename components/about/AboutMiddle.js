import Image from 'next/image';
import Resource from '../../public/Resource';

const AboutMiddle = () => {
  return (
    <div
      className='bg-white mt-64 md:mt-[150px] grid grid-cols-1 md:grid-cols-2 h-full px-24 pb-32
    gap-x-[80px]'
    >
      <div className='flex flex-col items-start justify-between w-full h-full'>
        <div className='relative w-full h-[500px] mb-20 flex items-center justify-center'>
          <Image
            src={Resource.Images.ABOUT_IMG_1}
            loading='eager'
            priority={true}
            alt='image'
            layout='fill'
            objectFit='fill'
            className='rounded-tl-3xl'
          />
        </div>
        <h4 className='leading-normal md:leading-normal text-black  mb-10 text-4xl md:text-6xl text-justify '>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h4>
        <p className='text-[#2B2B2B] text-2xl md:text-3xl pb-12 leading-loose md:leading-loose text-justify'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className='flex flex-col items-start justify-between w-full h-full'>
        <span className='text-white bg-[#111111] text-2xl py-4 px-8 rounded-l-full rounded-br-full'>
          ما چگونه کار می‌کنیم
        </span>
        <h4 className='text-black text-4xl md:text-6xl mt-16 text-justify leading-normal md:leading-normal'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h4>
        <ul className='flex flex-col my-20 justify-between items-start'>
          <li className='mb-6'>
            <div className='flex items-center'>
              <Image
                width={15}
                height={15}
                src={Resource.FilledSVG.ARROWLEFTFILLED}
                alt='arrow-left'
              />
              <span className='text-black text-2xl mr-4'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </span>
            </div>
          </li>
          <li className='mb-6'>
            <div className='flex items-center'>
              <Image
                width={15}
                height={15}
                src={Resource.FilledSVG.ARROWLEFTFILLED}
                alt='arrow-left'
              />
              <span className='text-black text-2xl mr-4'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </span>
            </div>
          </li>
          <li className='mb-6'>
            <div className='flex items-center'>
              <Image
                width={15}
                height={15}
                src={Resource.FilledSVG.ARROWLEFTFILLED}
                alt='arrow-left'
              />
              <span className='text-black text-2xl mr-4'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </span>
            </div>
          </li>
        </ul>
        <p className='text-[#2B2B2B] mb-16 text-2xl md:text-3xl leading-loose md:leading-loose text-justify'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className='relative w-full h-[400px] flex items-center justify-center'>
          <Image
            loading='eager'
            priority={true}
            layout='fill'
            objectFit='fill'
            src={Resource.Images.ABOUT_IMG_2}
            alt='image'
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMiddle;
