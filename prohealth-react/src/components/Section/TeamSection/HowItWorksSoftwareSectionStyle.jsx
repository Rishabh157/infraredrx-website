import React from "react";
import SectionHeading from "../../SectionHeading";
import Spacing from "../../Spacing";

export default function HowItWorksSoftwareSectionStyle({
  sectionTitle = "How It Works",
  sectionTitleUp = "Our Process",
}) {
  return (
    <div className="container">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />

      <div className="row cs_gap_y_30">

        <div
          style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
        >

          {/* Main Image */}
          <img
            src="/images/Infrared-how-4.png"
            // src="/images/Infrared-how-3.png"
            // src="/images/Infrared-how-2.png"
            // src="/images/device-work-1.png"
            // src="/images/device-work.png"
            alt="How our software works"
            // style={{ height: "auto", maxWidth: "70%", display: 'flex', justifyContent: 'center', textAlign: 'center' }}
          />


          {/* Steps Section */}
          <div
            style={{
              display: "none",
              justifyContent: "space-between",
              gap: "40px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                // border: "1px solid #dadada",
                height: "200px",
                // width: "450px",
                borderRadius: "4px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3>Infrared Bio Sensor</h3>
              <p style={{
                textAlign: 'justify'
              }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime voluptate consequuntur autem officiis cum id optio vitae. Dolorum, soluta. Iure</p>
            </div>

            <div
              style={{
                // border: "1px solid #dadada",
                height: "200px",
                // width: "450px",
                borderRadius: "4px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3>Sensor Data Receiver Black Box</h3>
              <p style={{
                textAlign: 'justify'
              }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime voluptate consequuntur autem officiis cum id optio vitae. Dolorum, soluta. Iure</p>
            </div>

            <div
              style={{
                // border: "1px solid #dadada",
                height: "200px",
                // width: "450px",
                borderRadius: "4px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3>Data Anyalysis Application</h3>
              <p style={{
                textAlign: 'justify'
              }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis maxime voluptate consequuntur autem officiis cum id optio vitae. Dolorum, soluta. Iure</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
