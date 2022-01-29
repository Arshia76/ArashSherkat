import AboutMiddle from '../components/about/AboutMiddle';
import Status from '../components/about/Status';
import HeroSecond from '../components/HeroSecond';
import ContactPart from '../components/ContactPart';
import Video from '../components/about/Video';
import Resource from '../public/Resource';

const about = () => {
  return (
    <div className='max-w-screen overflow-hidden'>
      <HeroSecond img={Resource.Images.ABOUT_IMG} title='درباره ما' />
      <AboutMiddle />
      <Status />
      <Video />
      <ContactPart />
    </div>
  );
};

export default about;
