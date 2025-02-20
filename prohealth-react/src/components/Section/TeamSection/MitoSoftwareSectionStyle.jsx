import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
// import TeamStyle4 from '../../Team/TeamStyle4';
import IconBoxStyleMito from '../../IconBox/IconBoxStyleMito';

export default function MitoSoftwareSectionStyle({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div className="row cs_gap_y_30">
        {data?.map((item, index) => (
          <div className="col-lg-4" key={index}>
            <IconBoxStyleMito {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
