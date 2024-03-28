/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer({ light }) {
  const { size } = typography;

  return (
    <footer>
    <div data-elementor-type="wp-post" data-elementor-id={172} className="elementor elementor-172">
          <div className="elementor-inner">
            <div className="elementor-section-wrap">
              <section className="elementor-section elementor-top-section elementor-element elementor-element-373f121 elementor-section-full_width footer-layout1 elementor-section-height-default elementor-section-height-default" data-id="373f121" data-element_type="section" data-settings="{'
              background_background':'classic'}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-row">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8659c6f" data-id="8659c6f" data-element_type="column">
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-528b08f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="528b08f" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7af8bf1" data-id="7af8bf1" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-aa30123 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="aa30123" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            <div className="footer-info">
                                              <div className="footer-info_icon"><i className="fal fa-map-marker-alt" />
                                              </div>
                                              <div className="media-body">
                                                <span className="footer-info_label">Адрес</span>
                                                <div className="footer-info_link">
                                                  Раззакова 32, Бишкек</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-42336e0" data-id={42336e0} data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-21d846c elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="21d846c" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            <div className="footer-info">
                                              <div className="footer-info_icon"><i className="fal fa-clock" />
                                              </div>
                                              <div className="media-body">
                                                <span className="footer-info_label">Режим
                                                  работы</span>
                                                <div className="footer-info_link">
                                                  ПН-ПТ 9:00 – 18:00
                                                  Суббота
                                                  9:00 – 16:00</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8c6c292" data-id="8c6c292" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-9760504 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id={9760504} data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            <div className="footer-info">
                                              <div className="footer-info_icon"><i className="fal fa-phone-volume" />
                                              </div>
                                              <div className="media-body">
                                                <span className="footer-info_label">КОНТАКТЫ</span>
                                                <div className="footer-info_link"><a href="mailto:info@techbiz.com">adbsolution@gmail.com</a>
                                                  <br />
                                                  <a href="tel:+2597462153">
                                                    996 (500)-177-009
                                                  </a></div>
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
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-89d02d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="89d02d5" data-element_type="section">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cb65c73" data-id="cb65c73" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-6d140d3 elementor-widget elementor-widget-heading" data-id="6d140d3" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2 className="elementor-heading-title elementor-size-default">
                                            О НАС</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-4792919 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id={4792919} data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <p className="elementor-heading-title elementor-size-default">
                                            В ADB Solution мы стремимся предоставлять высококачественные услуги в области аудита и консалтинга, помогая вам эффективно управлять финансовыми рисками и достигать ваших бизнес-целей. </p>
                                        </div>
                                      </div>
                                     
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ba3d77d" data-id="ba3d77d" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-9b3dd0e elementor-widget elementor-widget-heading" data-id="9b3dd0e" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2 className="elementor-heading-title elementor-size-default">
                                            Полезные ссылки</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-0804c61 footer-widget widget_nav_menu  elementor-widget elementor-widget-wp-widget-nav_menu" data-id="0804c61" data-element_type="widget" data-widget_type="wp-widget-nav_menu.default">
                                        <div className="elementor-widget-container">
                                          <div className="menu-links-container">
                                            <ul id="menu-links" className="menu">
                                              <li id="menu-item-189" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-189">
                                                <a href="https://sti.gov.kg/" target='_blank'>Государственная налоговая служба</a>
                                              </li>
                                              <li id="menu-item-188" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-188">
                                                <a href='https://cabinet.salyk.kg/' target='_blank'>Кабинет налогоплательщика</a>
                                              </li>
                                              <li id="menu-item-187" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-187">
                                                <a href='https://esf.salyk.kg/' target='_blank'>ESF</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-bef5374" data-id="bef5374" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-839fe4e elementor-widget elementor-widget-heading" data-id="839fe4e" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2 className="elementor-heading-title elementor-size-default">
                                            Услуги</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-3679921 footer-widget widget_nav_menu elementor-widget elementor-widget-wp-widget-nav_menu" data-id={3679921} data-element_type="widget" data-widget_type="wp-widget-nav_menu.default">
                                        <div className="elementor-widget-container">
                                          <div className="menu-explore-container">
                                            <ul id="menu-explore" className="menu">
                                              <li id="menu-item-194" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-194">
                                                <a >Заполнение декларации</a>
                                              </li>
                                         
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-854589d" data-id="854589d" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-08c8cfd elementor-widget elementor-widget-heading" data-id="08c8cfd" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                          <h2 className="elementor-heading-title elementor-size-default">
                                            Адрес</h2>
                                        </div>
                                      </div>
                                      <div className="elementor-element elementor-element-6201414 elementor-widget elementor-widget-google_maps" data-id={6201414} data-element_type="widget" data-widget_type="google_maps.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-custom-embed">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d414.7126426735958!2d74.60364209123351!3d42.86948512324052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d03414d985%3A0x274d82285a1fa51!2zQVJJREFOINCR0YPRhdCz0LDQu9GC0LXRgNGB0LrQsNGPINC60L7QvNC_0LDQvdC40Y8!5e0!3m2!1sru!2skg!4v1704650446183!5m2!1sru!2skg" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section className="elementor-section elementor-inner-section elementor-element elementor-element-e39f67f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e39f67f" data-element_type="section" data-settings="{'
                          background_background':'classic'}">
                            <div className="elementor-container elementor-column-gap-no">
                              <div className="elementor-row">
                                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a69a99a" data-id="a69a99a" data-element_type="column">
                                  <div className="elementor-column-wrap elementor-element-populated">
                                    <div className="elementor-widget-wrap">
                                      <div className="elementor-element elementor-element-3d8e32a elementor-widget elementor-widget-text-editor" data-id="3d8e32a" data-element_type="widget" data-widget_type="text-editor.default">
                                        <div className="elementor-widget-container">
                                          <div className="elementor-text-editor elementor-clearfix">
                                            <p className="copyright-text"> 
                                              ADB Solution
                                              2024 
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </footer>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
