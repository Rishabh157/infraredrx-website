import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

export default function IconBoxStyleMito({ title, subTitle, iconUrl, href }) {
  return (

    <div style={{
      // border: '1px solid #2c2c2c',
      padding: '10px'
    }} className="cs_style_1 text-center cs_radius_20 overflow-hidden">
      {/*  <div className="cs_iconbox cs_style_4"> */}

      <Link to={href} className="cs_member_img d-block">
        {/* <img src={imgUrl} alt="Doctor" /> */}
        <img src={iconUrl} alt="Doctor" />
      </Link>

      <div style={{
        marginTop: '30px'
      }} className='cs_team_meta cs_white_bg'>
        <h2 className="cs_iconbox_title cs_fs_32">{title}</h2>
        <p className="cs_iconbox_subtitle m-0">{subTitle}</p>
      </div>
      {href && (
        <Link to={href} className="cs_iconbox_btn cs_center">
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
          <img src="/images/icons/arrow_white.svg" alt="Icon" />
        </Link>
      )}
    </div>

  );
}
