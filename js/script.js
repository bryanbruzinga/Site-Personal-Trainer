import initAnimationPage from './modules/animation.js';
import initScrollSuave from './modules/linksSmooth.js';
import initMudarImg from './modules/img-changer.js'
import initGoTop from './modules/go-top.js'
import initActiveClass from './modules/ActiveClass.js'
import initFixedNavbar from './modules/fixedNavbar.js'

initAnimationPage(".js-anim");
initScrollSuave();
initMudarImg();
initGoTop();
initActiveClass('a[href^="#"');
initFixedNavbar("navbar");