import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';
const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Doctors', href: '/doctors' },
  { title: 'Timetable', href: '/timetable' },
  { title: 'Appointment', href: '/appointments' },
  { title: 'Testimonials', href: '/' },
];
const menuDataTwo = [
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'FAQs', href: '/' },
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/' },
];

export default function Footer() {
  return (
    <footer id='contact' className="cs_footer cs_style_1 cs_heading_color">
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}
      >
        <div
          className="cs_footer_brand"
          style={{ backgroundImage: 'url(/images/footer_logo_bg.png)' }}
        >
          {/* <img
            // src="/Infrared-RX.png"
            src="/images/logo_icon.svg" // :TODO:
            alt="Logo Icon"
            // className="cs_footer_brand_icon"
            height={140}
            width={140}
          /> */}
          <h2 className="cs_footer_brand_text">

            <span style={{
              fontSize: '22px'
            }}>INFRARED<sup>RX</sup></span>
            {/* <img
              src="/Infrared-RX.png"
              // src="/images/logo_icon.svg" // :TODO:
              alt="Logo Icon"
              // className="cs_footer_brand_icon"
              height={200}
              width={200}
            /> */}
          </h2>
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="INFRARED<sup>RX</sup>" />
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <Newsletter
                  title="Be Our Subscribers"
                  subTitle="To get the latest news about health from our experts"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cs_accent_bg :TODO: */}
      <div className="cs_footer_bottom ">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2025 InfraRed <sup>RX</sup>. All rights reserved.
              {/* Copyright © 2025 INFRA <span className='cs_accent_color'>RED</span> <sup>RX</sup> Health. All rights reserved. */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
