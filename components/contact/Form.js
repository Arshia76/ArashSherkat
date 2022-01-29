const Form = () => {
  return (
    <div>
      <div className='flex items-center mb-4 w-full'>
        <input
          type={'text'}
          placeholder='نام'
          className='bg-[#F4F4F4]
        text-black  border-[1px] w-full ml-4 text-2xl border-solid border-[#F0F0F0] py-4 px-6
        placeholder:text-[#959A98] placeholder:text-2xl focus:border-[#F65312]'
        />
        <input
          type={'email'}
          placeholder='ایمیل'
          className='bg-[#F4F4F4]
        text-black border-[1px] w-full text-2xl border-solid border-[#F0F0F0] py-4 px-6
        placeholder:text-[#959A98] placeholder:text- focus:border-[#F65312]'
        />
      </div>
      <input
        type={'text'}
        placeholder='موضوع'
        className='bg-[#F4F4F4]
        text-black border-[1px] mb-4 text-2xl w-full border-solid border-[#F0F0F0] py-4 px-6
        placeholder:text-[#959A98] placeholder:text-2xl focus:border-[#F65312]'
      />
      <textarea
        rows={4}
        type={'text'}
        placeholder='پیام'
        className='bg-[#F4F4F4]
        text-black border-[1px] mb-4 text-2xl w-full border-solid border-[#F0F0F0] py-4 px-6
        placeholder:text-[#959A98] placeholder:text-2xl focus:border-[#F65312]'
      />
      <button
        className='w-full rounded-full  duration-500 ease-in-out transition-all py-4 px-6 text-4xl text-white
      bg-[#F65312] border-none hover:opacity-80'
      >
        ارسال
      </button>
    </div>
  );
};

export default Form;
