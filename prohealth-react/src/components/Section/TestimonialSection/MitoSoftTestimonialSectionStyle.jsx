import React from 'react';
import SectionHeading from '../../SectionHeading';
import TestimonialCarouselStyle3 from '../../Slider/TestimonialCarouselStyle3';
import TestimonialCarouselStyle3Mito from '../../Slider/TestimonialCarouselStyle3Mito';

export default function MitoSoftTestimonialSectionStyle({
  sectionTitle,
  sectionTitleUp,
  avatarListTitle,
  avatarList,
  data,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="cs_section_wrap_1">
            <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} />

            <p style={{
              textAlign: 'justify'
            }}
              className='cs_avatar_card_title cs_fs_20 cs_semibold'
            >

              {/* cs_avatar_card_title cs_fs_20 cs_semibold */}
              {avatarListTitle}
            </p>

            <ul style={{
              marginTop: '20px',
              color: '#3D3D3D',
              fontSize: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px',

            }}>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quae incidunt est cum ducimus</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quae incidunt est cum ducimus</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quae incidunt est cum ducimus</li>
            </ul>

            <div className="cs_avatar_card">
              <div className="cs_avatar_group">

              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <TestimonialCarouselStyle3Mito data={data} />
        </div>

      </div>
    </div>
  );
}
