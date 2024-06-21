import React, { useRef, useState , useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';





export const Carousel = (props) => {
  const { t, i18n } = useTranslation();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    _initLayerSlider('#layerslider_1_lto8j8x0zbu3', 
      { createdWith: '7.1.3', sliderVersion: '7.9.1', allowFullscreen: true, startInViewport: false, skin: 'v6', sliderFadeInDuration: 350, navPrevNext: false, hoverPrevNext: false, navStartStop: false, navButtons: false, showCircleTimer: false, useSrcset: true, skinsPath: 'https://wordpress.vecurosoft.com/techbiz/wp-content/plugins/LayerSlider/assets/static/layerslider/skins/', performanceMode: true })
   
  }, []);


   
  return (

    <section className="elementor-section elementor-top-section elementor-element elementor-element-bd1d09e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="bd1d09e" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-row">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cc3df22" data-id="cc3df22" data-element_type="column">
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div className="elementor-element elementor-element-f68a05a elementor-widget elementor-widget-layerslider" data-id="f68a05a" data-element_type="widget" data-widget_type="layerslider.default">
                  <div className="elementor-widget-container">

                    <link href="https://fonts.googleapis.com/css?family=Exo:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                    <div id="layerslider_1_lto8j8x0zbu3" className="ls-wp-container fitvidsignore" style={{ width: '1900px', height: '780px', margin: '0 auto', marginBottom: '0px' }}>
                      <div className="ls-slide" data-ls="duration:12000;transition2d:5;kenburnszoom:in;kenburnsscale:1.1;">
                        <img loading="lazy" decoding="async" width={1920} height={850} src="images/hero-1-1.jpg" className="ls-bg" alt="" srcSet="images/hero-1-1.jpg 1920w, images/hero-1-1-600x266.jpg 600w, images/hero-1-1-300x133.jpg 300w, images/hero-1-1-1024x453.jpg 1024w, images/hero-1-1-768x340.jpg 768w, images/hero-1-1-1536x680.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
                        <div style={{ width: '300px', height: '1558px', backgroundColor: 'rgb(204, 177, 46,.5)', top: '-473px', left: '51px' }} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1700;delayin:1200;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;rotation:43.46;">
                        </div>
                        <div style={{ width: '589px', height: '1819.7px', top: '-485px', left: '406px', backgroundImage: 'linear-gradient(172deg, rgba(5, 26, 79, 0.35) 21%, rgba(0, 0, 0, 0) 54%)' }} 
                        className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1500;delayin:1300;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;bgcolorout:transparent;colorout:transparent;rotation:43.46;">
                        </div>
                        <p style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '9px', paddingRight: '23.5px', paddingLeft: '23.5px', top: '220px', left: '345PX', paddingBottom: '9px' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                     У НАС ЕСТЬ ЛУЧШИЕ СПЕЦИАЛИСТЫ</p>
                        <h1 style={{ top: '292px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', color: '#ffffff', fontFamily: 'Exo' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          ЛУЧШИЕ АУДИТ УСЛУГИ</h1>
                        <h1 style={{ top: '378px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          И РЕШЕНИЯ В 2024 - ГОДУ</h1>
                        <div style={{ top: '505px', left: '350px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px' }} className="ls-l ls-hide-tablet ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                        <p style={{ fontSize: '32px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '18px', paddingRight: '44px', paddingLeft: '44px', top: '160px', left: '90px', paddingBottom: '18px' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                          У НАС ЕСТЬ ЛУЧШИЕ СПЕЦИАЛИСТЫ</p>
                        <h1 style={{ top: '280px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', color: '#ffffff', fontFamily: 'Exo' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          ЛУЧШИЕ АУДИТ УСЛУГИ</h1>
                        <h1 style={{ top: '380px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          И РЕШЕНИЯ В 2024 - ГОДУ</h1>
                        <div style={{ top: '540px', left: '80px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px' }} className="ls-l ls-hide-desktop ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                        <h1 style={{ top: '76px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', color: '#ffffff', fontFamily: 'Exo', width: '10000px' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          ЛУЧШИЕ АУДИТ УСЛУГИ</h1>
                        <h1 style={{ top: '232px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', fontFamily: 'Exo', color: '#ffffff', width: '10000px', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          И РЕШЕНИЯ В 2024 - ГОДУ</h1>
                        <div style={{ top: '486px', left: '50%', textAlign: 'center', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px', width: '1920px' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О НАС<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div><a style={{}} className="ls-l ls-hide-tablet ls-hide-phone" href="#next" target="_self" data-ls="static:forever;">
                          <div style={{ left: '1685px', top: '50%' }} className="ls-html-layer"><span className="icon-btn style2"><i className="far fa-arrow-right" /></span>
                          </div>
                        </a><a style={{}} className="ls-l ls-hide-tablet ls-hide-phone" href="#next" target="_self" data-ls="static:forever;">
                          <div style={{ left: '150px', top: '50%' }} className="ls-html-layer"><span className="icon-btn style2"><i className="far fa-arrow-left" /></span>
                          </div>
                        </a>
                      </div>
                      <div className="ls-slide" data-ls="duration:12000;transition2d:5;kenburnszoom:out;kenburnsscale:1.1;">
                        <img loading="lazy" decoding="async" width={1920} height={850} src="images/hero-1-2.jpg" className="ls-bg" alt="" srcSet="images/hero-1-2.jpg 1920w, images/hero-1-2-600x266.jpg 600w, images/hero-1-2-300x133.jpg 300w, images/hero-1-2-1024x453.jpg 1024w, images/hero-1-2-768x340.jpg 768w, images/hero-1-2-1536x680.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
                        <div style={{ width: '300px', height: '1558px', backgroundColor: 'rgb(204, 177, 46,.5)', top: '-473px', left: '51px' }} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1700;delayin:1200;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;rotation:43.46;">
                        </div>
                        <div style={{ width: '589px', height: '1819.7px', top: '-485px', left: '406px', backgroundImage: 'linear-gradient(172deg, rgba(5, 26, 79, 0.35) 21%, rgba(0, 0, 0, 0) 54%)' }} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1500;delayin:1300;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;bgcolorout:transparent;colorout:transparent;rotation:43.46;">
                        </div>
                        <p style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '9px', paddingRight: '23.5px', paddingLeft: '23.5px', top: '220px', left: '345PX', paddingBottom: '9px' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                          ПРЕДОСТАВЛЯЕМ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</p>
                        <h1 style={{ top: '292px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', color: '#ffffff', fontFamily: 'Exo' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          ЭКСПЕРТНОЕ РЕШЕНИЕ
                        </h1>
                        <div style={{ top: '505px', left: '350px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px' }} className="ls-l ls-hide-tablet ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                        <h1 style={{ top: '378px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          И УПРАВЛЕНИЕ</h1>
                        <p style={{ fontSize: '32px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '18px', paddingRight: '44px', paddingLeft: '44px', top: '160px', left: '90px', paddingBottom: '18px' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                          ПРЕДОСТАВЛЯЕМ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</p>
                        <h1 style={{ top: '280px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', color: '#ffffff', fontFamily: 'Exo' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          ЭКСПЕРТНОЕ РЕШЕНИЕ</h1>
                        <h1 style={{ top: '380px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          И УПРАВЛЕНИЕ</h1>
                        <div style={{ top: '540px', left: '80px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px' }} className="ls-l ls-hide-desktop ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                        <h1 style={{ top: '76px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', color: '#ffffff', fontFamily: 'Exo', width: '10000px' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          ЭКСПЕРТНОЕ РЕШЕНИЕ</h1>
                        <h1 style={{ top: '232px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '130px', fontFamily: 'Exo', color: '#ffffff', width: '10000px', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          И УПРАВЛЕНИЕ</h1>
                        <div style={{ top: '486px', left: '50%', textAlign: 'center', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px', width: '1920px' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>

                      
                      <div className="ls-slide" data-ls="duration:12000;transition2d:5;kenburnszoom:in;kenburnsscale:1.1;">
                        <img loading="lazy" decoding="async" width={1920} height={850} src="images/hero-1-3.jpg" className="ls-bg" alt="" srcSet="images/hero-1-3.jpg 1920w, images/hero-1-3-600x266.jpg 600w, images/hero-1-3-300x133.jpg 300w, images/hero-1-3-1024x453.jpg 1024w, images/hero-1-3-768x340.jpg 768w, images/hero-1-3-1536x680.jpg 1536w" sizes="(max-width: 1920px) 100vw, 1920px" />
                        <div style={{ width: '300px', height: '1558px', backgroundColor: 'rgb(204, 177, 46,.5)', top: '-473px', left: '51px' }} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1700;delayin:1200;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;rotation:43.46;">
                        </div>
                        <div style={{ width: '589px', height: '1819.7px', top: '-485px', left: '406px', backgroundImage: 'linear-gradient(172deg, rgba(5, 26, 79, 0.35) 21%, rgba(0, 0, 0, 0) 54%)' }} className="ls-l ls-text-layer" data-ls="offsetxin:-800;offsetyin:-800;durationin:1500;delayin:1300;easingin:easeOutQuint;rotatein:43.46;offsetxout:1200;offsetyout:1200;durationout:8000;startatout:slidechangeonly + 3000;easingout:easeOutQuint;scaleyout:5;bgcolorout:transparent;colorout:transparent;rotation:43.46;">
                        </div>
                        <p style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '9px', paddingRight: '23.5px', paddingLeft: '23.5px', top: '220px', left: '345PX', paddingBottom: '9px' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                          ВЫСОКОКВАЛИФИЦИРОВАННЫЕ ЭКСПЕРТЫ</p>
                        <div style={{ top: '505px', left: '350px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px' }} className="ls-l ls-hide-tablet ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                        <h1 style={{ top: '292px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', color: '#ffffff', fontFamily: 'Exo' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          КОМАНДА ПРОФЕССИОНАЛЬНЫХ </h1>
                        <h1 style={{ top: '378px', left: '345px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '60px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-tablet ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          АУДИТОРОВ</h1>
                        <p style={{ fontSize: '32px', fontWeight: 600, fontFamily: 'Exo', color: '#ffffff', borderWidth: '2px 2px 2px 2px', borderColor: '#ffffff', borderRadius: '5px 5px 5px 5px', paddingTop: '18px', paddingRight: '44px', paddingLeft: '44px', top: '160px', left: '90px', paddingBottom: '18px' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:300;durationin:1500;delayin:400;easingin:easeOutQuint;offsetxout:300;durationout:1500;easingout:easeOutQuint;">
                          ВЫСОКОКВАЛИФИЦИРОВАННЫЕ ЭКСПЕРТЫ</p>
                        <h1 style={{ top: '280px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', color: '#ffffff', fontFamily: 'Exo' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          КОМАНДА ПРОФЕССИОНАЛЬНЫХ &amp;
                          </h1>
                        <h1 style={{ top: '380px', left: '80px', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '80px', fontFamily: 'Exo', color: '#ffffff', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-desktop ls-hide-phone ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          АУДИТОРОВ
                        </h1>
                        <div style={{ top: '540px', left: '80px', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px' }} className="ls-l ls-hide-desktop ls-hide-phone ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                        <h2 style={{ top: '76px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '100px', color: '#ffffff', fontFamily: 'Exo', width: '10000px' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;position:relative;">
                          КОМАНДА ПРОФЕССИОНАЛЬНЫХ</h2>
                        <h2 style={{ top: '232px', left: '50%', textAlign: 'center', fontWeight: 700, backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '100px', fontFamily: 'Exo', color: '#ffffff', width: '10000px', backgroundColor: 'transparent', cursor: 'auto' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-text-layer" data-ls="offsetxin:-200;durationin:1500;delayin:200;easingin:easeOutQuint;offsetxout:-100;durationout:1500;easingout:easeOutQuint;">
                          АУДИТОРОВ</h2>
                        <div style={{ top: '486px', left: '50%', textAlign: 'center', backgroundSize: 'inherit', backgroundPosition: 'inherit', fontSize: '24px', width: '1920px' }} className="ls-l ls-hide-desktop ls-hide-tablet ls-html-layer" data-ls="offsetyin:50;durationin:1500;delayin:900;easingin:easeOutQuint;offsetyout:50;durationout:1500;easingout:easeOutQuint;position:relative;">
                          <div className="ls-btn-group"><a className="vs-btn ls-hero-btn">О нас<i className="far fa-arrow-right" /></a><a className="vs-btn style2 ls-hero-btn">Читать<i className="far fa-arrow-right" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



//     <section className="tp-hero-area p-relative">
//   <div className="tp-hero-wrapper-slider">
//     <div className="tp-hero-active swiper-container">
//     <Swiper
//             className="mySwiper swiper-wrapper"
//             spaceBetween={30}
//             centeredSlides={true}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={{
//               prevEl: prevRef.current,
//               nextEl: nextRef.current,
//             }}
//             onSwiper={(swiper) => {
//               swiper.params.navigation.prevEl = prevRef.current;
//               swiper.params.navigation.nextEl = nextRef.current;
//               swiper.navigation.init();
//               swiper.navigation.update();
//               swiper.pagination.init();
//               swiper.pagination.update();
//             }}
//             modules={[Autoplay, Pagination, Navigation]}>

//         <SwiperSlide className="swiper-slide pt-160 pb-115" data-bg-color="#16243E">
//           <div
//             className="tp-hero-bg"
//             data-background="assets/img/hero/shape-bg.png"
//           />
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-7">
//                 <div className="tp-hero-content p-relative">
//                   <div className="tp-hero-title-wrapper">
//                     <span className="tp-hero-subtitle">Be Invest</span>
//                     <h2 className="tp-hero-title">
//                       Invest with confidence harvest the rewards
//                     </h2>
//                     <p>
//                       And In Order To Make A Business, Brand Advertising And
//                       Marketing Plays An Important <br /> Role. Similarly, In
//                       Making Cultivation Business A Brand, Good Slogans Are
//                       Necessary.
//                     </p>
//                   </div>
//                   <div className="tp-hero-button-wrapper d-flex flex-wrap align-items-center">
//                     <div className="tp-hero-btn mr-30">
//                       <a className="tp-btn" href="contact.html">
//                         Get Started{" "}
//                         <span>
//                           <i className="fa-regular fa-plus" />
//                         </span>
//                       </a>
//                     </div>
//                     <div className="tp-hero-call d-flex align-items-center">
//                       <span>
//                         <svg
//                           width={37}
//                           height={36}
//                           viewBox="0 0 37 36"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M29.6887 13.0168H25.1079C25.1079 13.0168 27.5332 8.62052 27.9335 8.12946C28.3382 7.63298 28.7214 7.94264 28.758 8.38069C28.7945 8.81866 28.7397 15.1698 28.7397 15.1698M22.9387 15.2699C22.9387 15.2699 19.4019 15.3144 19.2343 15.2585C19.0667 15.2027 19.503 14.9077 21.8218 11.5945C22.2549 10.9757 22.4932 10.4537 22.5947 10.0163L22.6306 9.73512C22.6306 8.70778 21.7978 7.875 20.7705 7.875C19.8665 7.875 19.1132 8.51977 18.9453 9.37455"
//                             stroke="url(#paint0_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M32.7861 26.6714L29.7163 23.6016C28.7645 22.6497 27.2212 22.6497 26.2694 23.6016L23.6842 26.1867C21.5426 28.3284 18.0577 27.4539 13.7745 23.1708C9.49123 18.8875 8.61683 15.4026 10.7585 13.2611L13.3436 10.6759C14.2954 9.72406 14.2954 8.18084 13.3436 7.22902L10.2737 4.15918C9.32192 3.20736 7.7787 3.20736 6.82688 4.15918L4.24177 6.74429C-0.279393 11.2655 2.32723 20.3406 9.46592 27.4793C16.6046 34.618 25.6798 37.2246 30.201 32.7035L32.7862 30.1183C33.7379 29.1665 33.7379 27.6233 32.7861 26.6714Z"
//                             stroke="url(#paint1_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M34.2298 21.7512C35.2892 19.7749 35.8906 17.5164 35.8906 15.1172C35.8906 7.35068 29.5946 1.05469 21.8281 1.05469C19.4289 1.05469 17.1704 1.65614 15.1941 2.71554M32.7861 26.6715L29.7163 23.6017C28.7645 22.6498 27.2212 22.6498 26.2694 23.6017L23.6842 26.1868C21.5426 28.3285 18.0577 27.454 13.7745 23.1709C9.49123 18.8876 8.61683 15.4027 10.7585 13.2611L13.3436 10.676C14.2954 9.72415 14.2954 8.18093 13.3436 7.22911L10.2737 4.15927C9.32192 3.20745 7.7787 3.20745 6.82688 4.15927L4.24177 6.74437C-0.279393 11.2655 2.32723 20.3407 9.46592 27.4794C16.6046 34.6181 25.6798 37.2247 30.201 32.7035L32.7862 30.1184C33.7379 29.1665 33.7379 27.6234 32.7861 26.6715Z"
//                             stroke="url(#paint2_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <defs>
//                             <linearGradient
//                               id="paint0_linear_3043_11"
//                               x1="18.9453"
//                               y1="11.5808"
//                               x2="29.6887"
//                               y2="11.5808"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                             <linearGradient
//                               id="paint1_linear_3043_11"
//                               x1={2}
//                               y1="19.1953"
//                               x2="33.5"
//                               y2="19.1953"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                             <linearGradient
//                               id="paint2_linear_3043_11"
//                               x1={2}
//                               y1={18}
//                               x2="35.8906"
//                               y2={18}
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                           </defs>
//                         </svg>
//                       </span>
//                       <div className="tp-hero-call-inner">
//                         <p>Need help?</p>
//                         <span>
//                           <a href="tel:5550111">(808) 555-0111</a>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-5">
//                 <div className="tp-hero-thumb p-relative">
//                   <div className="tp-hero-thumb-shape">
//                     <img
//                       className="shape-1"
//                       src="assets/img/hero/shape-2.png"
//                       alt=""
//                     />
//                     <img
//                       className="shape-2"
//                       src="assets/img/hero/shape-1.png"
//                       alt=""
//                     />
//                     <img
//                       className="shape-3"
//                       src="assets/img/hero/shape-1.png"
//                       alt=""
//                     />
//                   </div>
//                   <img src="assets/img/hero/img-1.jpg" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide pt-160 pb-115" data-bg-color="#16243E">
//           <div
//             className="tp-hero-bg"
//             data-background="assets/img/hero/shape-bg.png"
//           />
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-7">
//                 <div className="tp-hero-content p-relative">
//                   <div className="tp-hero-title-wrapper">
//                     <span className="tp-hero-subtitle">Be Invest</span>
//                     <h2 className="tp-hero-title">
//                       Where your financial dreams become reality
//                     </h2>
//                     <p>
//                       And In Order To Make A Business, Brand Advertising And
//                       Marketing Plays An Important <br /> In Making Cultivation
//                       Business A Brand, Good Slogans Are Necessary.
//                     </p>
//                   </div>
//                   <div className="tp-hero-button-wrapper d-flex flex-wrap align-items-center">
//                     <div className="tp-hero-btn mr-30">
//                       <a className="tp-btn" href="contact.html">
//                         Get Started{" "}
//                         <span>
//                           <i className="fa-regular fa-plus" />
//                         </span>
//                       </a>
//                     </div>
//                     <div className="tp-hero-call d-flex align-items-center">
//                       <span>
//                         <svg
//                           width={37}
//                           height={36}
//                           viewBox="0 0 37 36"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M29.6887 13.0168H25.1079C25.1079 13.0168 27.5332 8.62052 27.9335 8.12946C28.3382 7.63298 28.7214 7.94264 28.758 8.38069C28.7945 8.81866 28.7397 15.1698 28.7397 15.1698M22.9387 15.2699C22.9387 15.2699 19.4019 15.3144 19.2343 15.2585C19.0667 15.2027 19.503 14.9077 21.8218 11.5945C22.2549 10.9757 22.4932 10.4537 22.5947 10.0163L22.6306 9.73512C22.6306 8.70778 21.7978 7.875 20.7705 7.875C19.8665 7.875 19.1132 8.51977 18.9453 9.37455"
//                             stroke="url(#paint0_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M32.7861 26.6714L29.7163 23.6016C28.7645 22.6497 27.2212 22.6497 26.2694 23.6016L23.6842 26.1867C21.5426 28.3284 18.0577 27.4539 13.7745 23.1708C9.49123 18.8875 8.61683 15.4026 10.7585 13.2611L13.3436 10.6759C14.2954 9.72406 14.2954 8.18084 13.3436 7.22902L10.2737 4.15918C9.32192 3.20736 7.7787 3.20736 6.82688 4.15918L4.24177 6.74429C-0.279393 11.2655 2.32723 20.3406 9.46592 27.4793C16.6046 34.618 25.6798 37.2246 30.201 32.7035L32.7862 30.1183C33.7379 29.1665 33.7379 27.6233 32.7861 26.6714Z"
//                             stroke="url(#paint1_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M34.2298 21.7512C35.2892 19.7749 35.8906 17.5164 35.8906 15.1172C35.8906 7.35068 29.5946 1.05469 21.8281 1.05469C19.4289 1.05469 17.1704 1.65614 15.1941 2.71554M32.7861 26.6715L29.7163 23.6017C28.7645 22.6498 27.2212 22.6498 26.2694 23.6017L23.6842 26.1868C21.5426 28.3285 18.0577 27.454 13.7745 23.1709C9.49123 18.8876 8.61683 15.4027 10.7585 13.2611L13.3436 10.676C14.2954 9.72415 14.2954 8.18093 13.3436 7.22911L10.2737 4.15927C9.32192 3.20745 7.7787 3.20745 6.82688 4.15927L4.24177 6.74437C-0.279393 11.2655 2.32723 20.3407 9.46592 27.4794C16.6046 34.6181 25.6798 37.2247 30.201 32.7035L32.7862 30.1184C33.7379 29.1665 33.7379 27.6234 32.7861 26.6715Z"
//                             stroke="url(#paint2_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <defs>
//                             <linearGradient
//                               id="paint0_linear_3043_11"
//                               x1="18.9453"
//                               y1="11.5808"
//                               x2="29.6887"
//                               y2="11.5808"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                             <linearGradient
//                               id="paint1_linear_3043_11"
//                               x1={2}
//                               y1="19.1953"
//                               x2="33.5"
//                               y2="19.1953"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                             <linearGradient
//                               id="paint2_linear_3043_11"
//                               x1={2}
//                               y1={18}
//                               x2="35.8906"
//                               y2={18}
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                           </defs>
//                         </svg>
//                       </span>
//                       <div className="tp-hero-call-inner">
//                         <p>Need help?</p>
//                         <span>
//                           <a href="tel:5550111">(808) 555-0111</a>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-5">
//                 <div className="tp-hero-thumb p-relative">
//                   <div className="tp-hero-thumb-shape">
//                     <img
//                       className="shape-1"
//                       src="assets/img/hero/shape-2.png"
//                       alt=""
//                     />
//                     <img
//                       className="shape-2"
//                       src="assets/img/hero/shape-1.png"
//                       alt=""
//                     />
//                     <img
//                       className="shape-3"
//                       src="assets/img/hero/shape-1.png"
//                       alt=""
//                     />
//                   </div>
//                   <img src="assets/img/hero/img-2.jpg" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide className="swiper-slide pt-160 pb-115" data-bg-color="#16243E">
//           <div
//             className="tp-hero-bg"
//             data-background="assets/img/hero/shape-bg.png"
//           />
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-7">
//                 <div className="tp-hero-content p-relative">
//                   <div className="tp-hero-title-wrapper">
//                     <span className="tp-hero-subtitle">Be Invest</span>
//                     <h2 className="tp-hero-title">
//                       Our mission is your financial success
//                     </h2>
//                     <p>
//                       And In Order To Make A Business, Brand Advertising And
//                       Marketing Plays An Important <br /> Role. Similarly, In
//                       Making Cultivation Business A Brand.
//                     </p>
//                   </div>
//                   <div className="tp-hero-button-wrapper d-flex flex-wrap align-items-center">
//                     <div className="tp-hero-btn mr-30">
//                       <a className="tp-btn" href="contact.html">
//                         Get Started{" "}
//                         <span>
//                           <i className="fa-regular fa-plus" />
//                         </span>
//                       </a>
//                     </div>
//                     <div className="tp-hero-call d-flex align-items-center">
//                       <span>
//                         <svg
//                           width={37}
//                           height={36}
//                           viewBox="0 0 37 36"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M29.6887 13.0168H25.1079C25.1079 13.0168 27.5332 8.62052 27.9335 8.12946C28.3382 7.63298 28.7214 7.94264 28.758 8.38069C28.7945 8.81866 28.7397 15.1698 28.7397 15.1698M22.9387 15.2699C22.9387 15.2699 19.4019 15.3144 19.2343 15.2585C19.0667 15.2027 19.503 14.9077 21.8218 11.5945C22.2549 10.9757 22.4932 10.4537 22.5947 10.0163L22.6306 9.73512C22.6306 8.70778 21.7978 7.875 20.7705 7.875C19.8665 7.875 19.1132 8.51977 18.9453 9.37455"
//                             stroke="url(#paint0_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M32.7861 26.6714L29.7163 23.6016C28.7645 22.6497 27.2212 22.6497 26.2694 23.6016L23.6842 26.1867C21.5426 28.3284 18.0577 27.4539 13.7745 23.1708C9.49123 18.8875 8.61683 15.4026 10.7585 13.2611L13.3436 10.6759C14.2954 9.72406 14.2954 8.18084 13.3436 7.22902L10.2737 4.15918C9.32192 3.20736 7.7787 3.20736 6.82688 4.15918L4.24177 6.74429C-0.279393 11.2655 2.32723 20.3406 9.46592 27.4793C16.6046 34.618 25.6798 37.2246 30.201 32.7035L32.7862 30.1183C33.7379 29.1665 33.7379 27.6233 32.7861 26.6714Z"
//                             stroke="url(#paint1_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <path
//                             d="M34.2298 21.7512C35.2892 19.7749 35.8906 17.5164 35.8906 15.1172C35.8906 7.35068 29.5946 1.05469 21.8281 1.05469C19.4289 1.05469 17.1704 1.65614 15.1941 2.71554M32.7861 26.6715L29.7163 23.6017C28.7645 22.6498 27.2212 22.6498 26.2694 23.6017L23.6842 26.1868C21.5426 28.3285 18.0577 27.454 13.7745 23.1709C9.49123 18.8876 8.61683 15.4027 10.7585 13.2611L13.3436 10.676C14.2954 9.72415 14.2954 8.18093 13.3436 7.22911L10.2737 4.15927C9.32192 3.20745 7.7787 3.20745 6.82688 4.15927L4.24177 6.74437C-0.279393 11.2655 2.32723 20.3407 9.46592 27.4794C16.6046 34.6181 25.6798 37.2247 30.201 32.7035L32.7862 30.1184C33.7379 29.1665 33.7379 27.6234 32.7861 26.6715Z"
//                             stroke="url(#paint2_linear_3043_11)"
//                             strokeWidth="2.10938"
//                             strokeMiterlimit={10}
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                           <defs>
//                             <linearGradient
//                               id="paint0_linear_3043_11"
//                               x1="18.9453"
//                               y1="11.5808"
//                               x2="29.6887"
//                               y2="11.5808"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                             <linearGradient
//                               id="paint1_linear_3043_11"
//                               x1={2}
//                               y1="19.1953"
//                               x2="33.5"
//                               y2="19.1953"
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                             <linearGradient
//                               id="paint2_linear_3043_11"
//                               x1={2}
//                               y1={18}
//                               x2="35.8906"
//                               y2={18}
//                               gradientUnits="userSpaceOnUse"
//                             >
//                               <stop stopColor="#004D6E" />
//                               <stop offset={1} stopColor="#00ACCC" />
//                             </linearGradient>
//                           </defs>
//                         </svg>
//                       </span>
//                       <div className="tp-hero-call-inner">
//                         <p>Need help?</p>
//                         <span>
//                           <a href="tel:5550111">(808) 555-0111</a>
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-5">
//                 <div className="tp-hero-thumb p-relative">
//                   <div className="tp-hero-thumb-shape">
//                     <img
//                       className="shape-1"
//                       src="assets/img/hero/shape-2.png"
//                       alt=""
//                     />
//                     <img
//                       className="shape-2"
//                       src="assets/img/hero/shape-1.png"
//                       alt=""
//                     />
//                     <img
//                       className="shape-3"
//                       src="assets/img/hero/shape-1.png"
//                       alt=""
//                     />
//                   </div>
//                   <img src="assets/img/hero/img-3.jpg" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
 
//       </Swiper>
//     </div>
//     <div className="tp-hero-nav">
//       <button ref={prevRef}  type="button" className="hero-button-prev-1">
//         <i className="fa-regular fa-arrow-left" />
//       </button>
//       <button  ref={nextRef} type="button" className="hero-button-next-1">
//         <i className="fa-regular fa-arrow-right" />
//       </button>
//     </div>
//     <div className="tp-hero-pagination" />
//   </div>
// </section>

  )
}


