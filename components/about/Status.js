import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Status = () => {
  const [state, setState] = useState(true);

  return (
    <div className='grid gap-x-[40px] grid-cols-4 py-32 px-28 bg-black'>
      <CountUp
        className='text-white text-6xl'
        end={3968}
        duration={5}
        onEnd={() => {
          setState(false);
        }}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor active={state} onChange={start} delayedCall>
            <div className='flex flex-col justify-center items-center py-20 rounded-[25px] border-2 border-solid border-[#FF5F1E]'>
              <span className='text-white text-6xl' ref={countUpRef} />
              <span className='text-[#FF5F1E] text-4xl mt-10'>
                مشتری‌های راضی
              </span>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <CountUp
        className='text-white text-6xl'
        suffix='سال'
        end={8}
        duration={5}
        onEnd={() => {
          setState(false);
        }}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor active={state} onChange={start} delayedCall>
            <div className='flex flex-col justify-center items-center py-20 rounded-[25px] border-2 border-solid border-[#FF5F1E]'>
              <span className='text-white text-6xl' ref={countUpRef} />
              <span className='text-[#FF5F1E] text-4xl mt-10'>تجربه</span>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <CountUp
        className='text-white text-6xl'
        end={5987}
        duration={5}
        onEnd={() => {
          setState(false);
        }}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor active={state} onChange={start} delayedCall>
            <div className='flex flex-col justify-center items-center py-20 rounded-[25px] border-2 border-solid border-[#FF5F1E]'>
              <span className='text-white text-6xl' ref={countUpRef} />
              <span className='text-[#FF5F1E] text-4xl mt-10'>
                محصولات فروخته شده
              </span>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
      <CountUp
        className='text-white text-6xl'
        suffix='+'
        end={3621}
        duration={5}
        onEnd={() => {
          setState(false);
        }}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor active={state} onChange={start} delayedCall>
            <div className='flex flex-col justify-center items-center py-20 rounded-[25px] border-2 border-solid border-[#FF5F1E]'>
              <span className='text-white text-6xl' ref={countUpRef} />
              <span className='text-[#FF5F1E] text-4xl mt-10'>کاربران</span>
            </div>
          </VisibilitySensor>
        )}
      </CountUp>
    </div>
  );
};

export default Status;
