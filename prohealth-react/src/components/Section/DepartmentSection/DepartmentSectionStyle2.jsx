import React from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import IconBoxStyle4 from '../../IconBox/IconBoxStyle4';

export default function DepartmentSectionStyle1({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container">
      <div className="row">
        <SectionHeading
          title={sectionTitle}
          titleUp={sectionTitleUp}
        />
        <Spacing md="72" lg="50" />

        <div className="row cs_gap_y_30">
          {data?.map((item, index) => (
            <div className="col-md-6 col-xl-4" key={index}>
              <IconBoxStyle4 {...item} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
