import USER from './Svg/user.svg';
import PASSWORD from './Svg/password.svg';
import PASSWORD2 from './Svg/password2.svg';
import EMAIL from './Svg/email.svg';
import CALENDAR from './Svg/calendar.svg';
import GENDER from './Svg/gender.svg';
import ATTACHMENT from './Svg/attachment.svg';
import PHONE from './Svg/phone.svg';
import USERFILLED from './Svg/filled/user-filled.svg';
import BASKET from './Svg/basket.svg';
import GLOBEFILLED from './Svg/filled/world.svg';
import ENVELOPEFILLED from './Svg/filled/envelope.svg';
import PHONEFILLED from './Svg/filled/phone.svg';
import BELLFILLED from './Svg/filled/bell.svg';
import SEARCH from './Svg/search.svg';
import SEARCH2 from './Svg/search2.svg';
import GROUPFILLED from './Svg/filled/group-filled.svg';
import HOMEFILLED from './Svg/filled/home-filled.svg';
import VIDEOFILLED from './Svg/filled/video-filled.svg';
import MESSAGEFILLED from './Svg/filled/message-filled.svg';
import CAMERAFILLED from './Svg/filled/camera-filled.svg';
import CALENDAR2 from './Svg/calendar-2.svg';
import CONTENT from './Svg/content.svg';
import SEND from './Svg/send.svg';
import EMOJI from './Svg/emoji.svg';
import COMMENT from './Svg/comment.svg';
import FORWARD from './Svg/forward.svg';
import EYEOPEN from './Svg/eye-open.svg';
import DOT from './Svg/dot.svg';
import PLUS from './Svg/plus.svg';
import MINIMIZE from './Svg/minimize.svg';
import MAXIMIZE from './Svg/maximize.svg';
import CROSS from './Svg/cross.svg';
import CROSSWHITE from './Svg/cross-white.svg';
import HEART from './Svg/heart.svg';
import ARROWLEFTFILLED from './Svg/filled/arrow-left-filled.svg';
import SMALLARROWLEFTFILLED from './Svg/filled/small-arrow-left-filled.svg';
import MOBILE from './Svg/mobile.svg';
import LINK_WHITE_FILLED from './Svg/filled/link-filled-white.svg';
import LINK_ORANGE_FILLED from './Svg/filled/link-filled-orange.svg';
import SHOPPING_CART_WHITE_FILLED from './Svg/filled/shopping-cart-filled-white.svg';
import SHOPPING_CART_ORANGE_FILLED from './Svg/filled/shopping-cart-filled-orange.svg';
import ABOUT_IMG from './Images/about.jpg';
import BG_IMG from './Images/bg-img.png';
import HAMBURGER from './Svg/hamburger.svg';
import PLAY_IMG from './Images/play.png';
import SIDE_IMG from './Images/sideImage.jpg';
import LOGO_IMG from './Images/logo.png';
import CONTACT_IMG from './Images/contact.jpg';
import ABOUT_IMG_1 from './Images/about-image-1.png';
import ABOUT_IMG_2 from './Images/about-image-2.png';
import VIDEO_IMG from './Images/about-video-image.jpg';
import CATEGORY_IMG_1 from './Images/category1.png';
import CATEGORY_IMG_2 from './Images/category2.png';
import CATEGORY_IMG_3 from './Images/category3.png';
import CATEGORY_IMG_4 from './Images/category4.png';
import CATEGORY_IMG_5 from './Images/category5.png';
import IMAGE_1 from './Images/image1.jpg';
import IMAGE_2 from './Images/image2.jpg';
import IMAGE_3 from './Images/image3.jpg';
import IMAGE_4 from './Images/image4.jpg';
import IMAGE_5 from './Images/image5.jpg';
import IMAGE_6 from './Images/image6.jpg';
import IMAGE_7 from './Images/image7.jpg';
import IMAGE_8 from './Images/image8.jpg';
import IMAGE_9 from './Images/image9.jpg';
import IMAGE_10 from './Images/image10.jpg';
import IMAGE_11 from './Images/image11.jpg';
import IMAGE_12 from './Images/image12.jpg';
import FAST_IMG from './Images/fast.png';
import SAFE_IMG from './Images/safe.jpg';
import GUARANTEE_IMG from './Images/guarantee.webp';
import FREE_IMG from './Images/free.png';

class Resource {
  static Images = {
    ABOUT_IMG,
    BG_IMG,
    PLAY_IMG,
    SIDE_IMG,
    ABOUT_IMG_1,
    ABOUT_IMG_2,
    LOGO_IMG,
    VIDEO_IMG,
    CONTACT_IMG,
    CATEGORY_IMG_1,
    CATEGORY_IMG_2,
    CATEGORY_IMG_3,
    CATEGORY_IMG_4,
    CATEGORY_IMG_5,
    IMAGE_1,
    IMAGE_2,
    IMAGE_3,
    IMAGE_4,
    IMAGE_5,
    IMAGE_6,
    IMAGE_7,
    IMAGE_8,
    IMAGE_9,
    IMAGE_10,
    IMAGE_11,
    IMAGE_12,
    FAST_IMG,
    FREE_IMG,
    SAFE_IMG,
    GUARANTEE_IMG,
  };

  static Svg = {
    HAMBURGER,
    USER,
    MOBILE,
    BASKET,
    PHONE,
    PASSWORD,
    PASSWORD2,
    EMAIL,
    ATTACHMENT,
    GENDER,
    CALENDAR,
    SEARCH,
    SEARCH2,
    CALENDAR2,
    SEND,
    CONTENT,
    EMOJI,
    EYEOPEN,
    COMMENT,
    HEART,
    FORWARD,
    DOT,
    MAXIMIZE,
    MINIMIZE,
    PLUS,
    CROSS,
    CROSSWHITE,
  };

  static FilledSVG = {
    PHONEFILLED,
    USERFILLED,
    GLOBEFILLED,
    ENVELOPEFILLED,
    BELLFILLED,
    MESSAGEFILLED,
    HOMEFILLED,
    GROUPFILLED,
    VIDEOFILLED,
    CAMERAFILLED,
    SMALLARROWLEFTFILLED,
    ARROWLEFTFILLED,
    LINK_ORANGE_FILLED,
    LINK_WHITE_FILLED,
    SHOPPING_CART_ORANGE_FILLED,
    SHOPPING_CART_WHITE_FILLED,
  };

  static Routes = {
    HOME: '/',
    AUTH: '/auth',
    PRODUCTS: '/products',
    CATEGORIES: '/categories',
    ABOUT: '/about',
    CONTACT: '/contact',
    CART: '/cart',
  };
}

export default Resource;
