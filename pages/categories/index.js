import Head from 'next/head';
import Category from '../../components/category/Category';
import ContactPart from '../../components/ContactPart';
import Resource from '../../public/Resource';

const CategoryPage = () => {
  return (
    <div>
      <Head>
        <title>دسته بندی</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <h4 className='text-white text-8xl text-center pt-32 h-[40vh] bg-[#111111]'>
        دسته بندی
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-[20px] pt-28 pb-96 justify-center w-full h-full bg-black px-32'>
        <Category img={Resource.Images.CATEGORY_IMG_1} category='دسته' />
        <Category img={Resource.Images.CATEGORY_IMG_2} category='دسته' />
        <Category img={Resource.Images.CATEGORY_IMG_3} category='دسته' />
        <Category img={Resource.Images.CATEGORY_IMG_4} category='دسته' />
        <Category img={Resource.Images.CATEGORY_IMG_5} category='دسته' />
        <Category img={Resource.Images.CATEGORY_IMG_2} category='دسته' />
      </div>
      <ContactPart />
    </div>
  );
};

export default CategoryPage;
