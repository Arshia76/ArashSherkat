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

class Resource {
  static Images = {};

  static Svg = {
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
  };
}

export default Resource;
