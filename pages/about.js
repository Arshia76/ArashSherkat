import AboutMiddle from '../components/about/AboutMiddle';
import Status from '../components/about/Status';
import HeroSecond from '../components/HeroSecond';
import ContactPart from '../components/ContactPart';
import Video from '../components/about/Video';

const about = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <HeroSecond
        img='https://www.targettraining.eu/wp-content/uploads/2019/02/meetings-practice.jpg'
        title='درباره ما'
      />
      <AboutMiddle />
      <Status />
      <Video />
      <ContactPart />
    </div>
  );
};

export default about;
