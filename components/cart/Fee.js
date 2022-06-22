const Fee = () => {
  return (
    <div
      className='px-8 py-12 h-fit shadow-2xl 
    md:sticky md:top-10 text-center w-full col-span-1'
    >
      <div
        style={{
          borderBottom: '1px solid gray',
        }}
        className='flex items-center justify-between mb-10 pb-4'
      >
        <span className='text-black text-3xl'>تعداد محصولات:</span>
        <span className='text-gray-900 text-3xl'>15</span>
      </div>
      <div
        style={{
          borderBottom: '1px solid gray',
        }}
        className='flex items-center justify-between mb-10 pb-4'
      >
        <span className='text-black text-3xl'>قیمت محصولات:</span>
        <span className='text-gray-900 text-3xl'>1680000ریال</span>
      </div>
      <div
        style={{
          borderBottom: '1px solid gray',
        }}
        className='flex items-center justify-between mb-10 pb-4'
      >
        <span className='text-black text-3xl'>ارزش افزوده:</span>
        <span className='text-gray-900 text-3xl'>100000ریال</span>
      </div>
      <div
        style={{
          borderBottom: '1px solid gray',
        }}
        className='flex items-center justify-between mb-10 pb-4'
      >
        <span className='text-black text-3xl'>مجموع کل:</span>
        <span className='text-gray-900 text-3xl'>1690000ریال</span>
      </div>
      <button
        className='py-4 px-16  text-3xl border border-solid 
      border-[#FF5F1E] text-white mt-10 bg-[#FF5F1E] rounded-md
      transition-all duration-500 ease hover:bg-white hover:text-[#FF5F1E]
      w-full'
      >
        پرداخت
      </button>
    </div>
  );
};

export default Fee;
