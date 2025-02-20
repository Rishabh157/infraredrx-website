import React from 'react';
import Hero from '../Hero';
import AboutSection from '../Section/AboutSection';
import BrandsSection from '../Section/BrandsSection';
import Banner from '../Section/BannerSection';
import Section from '../Section';
import FeaturesSection from '../Section/FeaturesSection';
import TestimonialSection from '../Section/TestimonialSection';
import BlogSection from '../Section/BlogSection';
import AppointmentSection from '../Section/AppointmentSection';
import FaqSection from '../Section/FaqSection';
import AwardSection from '../Section/AwardSection';
import DepartmentSection from '../Section/DepartmentSection';
import { pageTitle } from '../../helpers/PageTitle';
import HeroStyle2 from '../Hero/HeroStyle2';
import AboutSectionStyle4 from '../Section/AboutSection/AboutSectionStyle4';
import TeamSectionStyle4 from '../Section/TeamSection/TeamSectionStyle4';
import DepartmentSectionStyle2 from '../Section/DepartmentSection/DepartmentSectionStyle2';
import MitoSoftwareSectionStyle from '../Section/TeamSection/MitoSoftwareSectionStyle';
import HowItWorksSoftwareSectionStyle from '../Section/TeamSection/HowItWorksSoftwareSectionStyle';
import TestimonialSectionStyle4 from '../Section/TestimonialSection/TestimonialSectionStyle4';
import MitoSoftTestimonialSectionStyle from '../Section/TestimonialSection/MitoSoftTestimonialSectionStyle';

const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Compassion',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.',
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Excellence',
    subTitle:
      'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Integrity',
    subTitle: `We believe in practicing medicine with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.`,
  },
  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Respect',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Teamwork',
    subTitle:
      'We believe in working collaboratively with our team membersvand other healthcare professionals to provide comprehensive and effective care to our patients.',
  },
];
const brandData = [
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_1.png', imgAlt: 'Brand' },
  // { imgUrl: 'images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_8.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: 'https://prohealth-react.vercel.app/images/brand_6.png', imgAlt: 'Brand' },
];

const faqData = [
  {
    title: 'What services does ProHealth offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with ProHealth?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/post_1.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/post_2.jpeg',
    date: 'May 4, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/post_3.jpeg',
    date: 'May 1, 2023',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
];
const awardData = [
  {
    title: 'Malcolm Baldrige National Quality Award',
    subTitle:
      'This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'HIMSS Davies Award',
    subTitle:
      'This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'Healthgrades National’s Best Hospital',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: 'images/icons/award.svg',
  },
  {
    title: 'Joint Commission Gold Seal of Approval',
    subTitle:
      'This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.',
    iconUrl: 'images/icons/award.svg',
  },
];

// const departmentData = [
//   {
//     title: 'Emergency Department',
//     iconUrl: 'images/home_1/department_icon_1.svg',
//     href: '/departments/department-details',
//   },
//   {
//     title: 'Pediatric Departement',
//     iconUrl: 'images/home_1/department_icon_2.svg',
//     href: '/departments/department-details',
//   },
//   {
//     title: 'Gynecology Department',
//     iconUrl: 'images/home_1/department_icon_3.svg',
//     href: '/departments/department-details',
//   },
//   {
//     title: 'Cardiology Department',
//     iconUrl: 'images/home_1/department_icon_4.svg',
//     href: '/departments/department-details',
//   },
//   {
//     title: 'Neurology Department',
//     iconUrl: 'images/home_1/department_icon_5.svg',
//     href: '/departments/department-details',
//   },
//   {
//     title: 'Psychiatry Department',
//     iconUrl: 'images/home_1/department_icon_6.svg',
//     href: '/departments/department-details',
//   },
// ];


const teamData = [
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/home_3/doctor_1.png',
    // imgUrl: '/images/home_3/doctor_1.png',
    name: 'Dr. James Lee, MD',
    designation: 'Head of Cardiologist',
    description:
      'With expertise in managing complex heart conditions and performing advanced cardiac procedures',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/home-v3' },
      { icon: 'fa6-brands:linkedin-in', href: '/home-v3' },
      { icon: 'fa6-brands:twitter', href: '/home-v3' },
    ],
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/home_3/doctor_2.png',
    // imgUrl: '/images/home_3/doctor_2.png',
    name: 'Dr. John Smith, MD',
    designation: 'Emergency Medicine Physician',
    description:
      'He is a highly experienced emergency medicine physician with over 15 years of experience.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/home-v3' },
      { icon: 'fa6-brands:linkedin-in', href: '/home-v3' },
      { icon: 'fa6-brands:twitter', href: '/home-v3' },
    ],
  },
  {
    imgUrl: 'https://prohealth-react.vercel.app/images/home_3/doctor_3.png',
    // imgUrl: '/images/home_3/doctor_3.png',
    name: 'Dr. Susan Bones, MD',
    designation: 'Board-certified Pediatrician',
    description:
      'With experience in managing complex medical conditions in children',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/home-v3' },
      { icon: 'fa6-brands:linkedin-in', href: '/home-v3' },
      { icon: 'fa6-brands:twitter', href: '/home-v3' },
    ],
  },
];


const departmentData = [
  // {
  //   title: 'Diagnostic testing',
  //   subTitle:
  //     'Blood tests, imaging studies, and other tests to diagnose health conditions',
  //   iconUrl: '/images/icons/calendar_white.svg',
  //   href: '/departments/department-details',
  // },
  // {
  //   title: 'Rehabilitation services',
  //   subTitle:
  //     'Physical therapy, occupational therapy, and other services to help patients recover from injuries',
  //   iconUrl: '/images/icons/calendar_white.svg',
  //   href: '/departments/department-details',
  // },
  {
    title: 'Preventive care',
    subTitle:
      'Annual checkups, immunizations, and health screenings care preventive',
    iconUrl: '/images/mito-soft-1.png',
    // iconUrl: '/images/select-screen.png',
    // iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Preventive care',
    subTitle:
      'Annual checkups, immunizations, and health screenings care preventive',
    iconUrl: '/images/mito-soft-2.png',
    // iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Preventive care',
    subTitle:
      'Annual checkups, immunizations, and health screenings care preventive',
    iconUrl: '/images/mito-soft-3.png',
    // iconUrl: '/images/icons/calendar_white.svg',
    href: '/departments/department-details',
  },
  // {
  //   title: 'Treatment for acute and chronic conditions',
  //   subTitle:
  //     'Medication management, disease management, and other treatments to improve health outcomes',
  //   iconUrl: '/images/icons/calendar_white.svg',
  //   href: '/departments/department-details',
  // },
  // {
  //   title: 'Mental health services',
  //   subTitle:
  //     'Counseling, therapy, and other services to help patients manage mental health conditions',
  //   iconUrl: '/images/icons/calendar_white.svg',
  //   href: '/departments/department-details',
  // },
];


const testimonialData = [
  {
    text: '"I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
    ratingNumber: '5',
    // avatarImgUrl: '/images/mac-device.png',
    avatarImgUrl: '/images/mito-soft-1.png',
    // avatarImgUrl: '/images/home_4/avatar_2.png',
    avatarName: 'Sophia Torres',
    avatarDesignation: 'New York, USA',
  },
  {
    text: '"ProHealth has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/mito-soft-2.png',
    avatarName: 'John Dupont',
    avatarDesignation: 'Manhattan, USA',
  },
  {
    text: '“I had a great experience with ProHealth. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”',
    ratingNumber: '5',
    avatarImgUrl: '/images/mito-soft-3.png',
    avatarName: 'Allen Duarte',
    avatarDesignation: 'California, USA',
  },
  // {
  //   text: '"I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease.”',
  //   ratingNumber: '5',
  //   avatarImgUrl: '/images/home_4/avatar_2.png',
  //   avatarName: 'Sophia Torres',
  //   avatarDesignation: 'New York, USA',
  // },
  // {
  //   text: '"ProHealth has been a game-changer for me. The doctors are caring and highly skilled, and the staff is always friendly and accommodating. We hope for the best wishes.”',
  //   ratingNumber: '5',
  //   avatarImgUrl: '/images/home_4/avatar_3.png',
  //   avatarName: 'John Dupont',
  //   avatarDesignation: 'Manhattan, USA',
  // },
  // {
  //   text: '“I had a great experience with ProHealth. The staff were friendly and professional, and the doctor took the time to answer all my questions and address my concerns.”',
  //   ratingNumber: '5',
  //   avatarImgUrl: '/images/home_4/avatar_4.png',
  //   avatarName: 'Allen Duarte',
  //   avatarDesignation: 'California, USA',
  // },
];

export default function Home() {
  pageTitle('Home');
  return (
    <>
      <HeroStyle2
        id='home'
        title="Compassionate care, exceptional results."
        subTitle="Our team of experienced doctors and healthcare professionals are
            committed to providing quality care and personalized attention to
            our patients."
        bgUrl="/images/home_2/hero_bg.jpeg"
        imgUrl="/images/home_2/patents.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        btnText="Infrared"
        btnUrl="/"
        funfactList={[
          { number: '20+', title: 'Years of experience' },
          { number: '95%', title: 'Patient satisfaction rating' },
          { number: '5000+', title: 'Patients served annually' },
          { number: '10+', title: 'Healthcare providers on staff' },
        ]}
      />
      {/* <Hero
        title="Your Partner in Health and Wellness"
        subTitle="We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero_img.png"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        infoList={[
          {
            title: 'Hotline',
            subTitle: '123-456-7890',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Ambulance',
            subTitle: '876-256-876',
            iconUrl: '/images/icons/ambulance.svg',
          },
          {
            title: 'Location',
            subTitle: 'New York, US',
            iconUrl: '/images/icons/pin.svg',
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      /> */}
      {/* Start Feature Section */}
      {/* <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section> */}
      {/* End Feature Section */}
      {/* Start About Section */}

      <Section
        id='about'
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}>
        <AboutSectionStyle4
          imgUrl="https://prohealth-react.vercel.app/images/home_3/about.png"
          // imgUrl="/images/home_3/about.png"
          spiningImgUrl="/images/home_1/about_mini.svg"
          titleUp="ABOUT US"
          title="ProHealth is a team of experienced medical professionals"
          subTitle="Dedicated to providing top-quality healthcare services. We believe in a <br /> holistic approach to healthcare that focuses on treating the whole <br />person, not just the illness or symptoms."
        />
      </Section>

      {/* <Section>
        <AboutSection
        imgUrl="/images/home_1/about.png"
        spiningImgUrl="/images/home_1/about_mini.svg"
        title="About Us"
        subTitle="PRO HEALTH"
        featureList={[
          {
            featureListTitle:
            'ProHealth is a team of experienced medical professionals',
            featureListSubTitle:
            'Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.',
            },
            ]}
            />
            </Section> */}
      {/* End About Section */}
      {/* Start Departments Section */}
      {/* <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
        sectionTitle="Departments"
        bgUrl="images/home_1/department_bg.svg"
        data={departmentData}
        />
        </Section> */}

      {/* End Departments Section */}

      {/* <Section topMd={195} topLg={145} topXl={105}>
        <MitoSoftwareSectionStyle
        sectionTitle="MITOLAB"
        sectionTitleUp="SOFTWARE"
        data={departmentData}
        />
        </Section> */}


      <Section
        id='product'
        topMd={190}
        topLg={150}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <MitoSoftTestimonialSectionStyle
          sectionTitle="MITOLAB"
          sectionTitleUp="SOFTWARE"
          avatarListTitle="This advanced analytical tool helps researchers process biosensor-generated data with precision. Using proven methodologies, it ensures accurate insights for analyzing mitochondrial function, crucial for understanding metabolic disorders and neurodegenerative diseases.
It seamlessly integrates with biosensor devices, transforming raw data into meaningful insights using advanced algorithms. The tool handles large datasets efficiently, enabling trend analysis, anomaly detection, and biomarker identification.
With an intuitive interface featuring interactive graphs and automated reporting, researchers can easily interpret complex data. Ideal for clinical research, pharmaceuticals, and personalized medicine, it bridges the gap between raw sensor readings and actionable scientific knowledge, driving medical advancements."
          // avatarList={[
          //   { imgUrl: '/images/home_4/avatar_1.png' },
          //   { imgUrl: '/images/home_4/avatar_2.png' },
          //   { imgUrl: '/images/home_4/avatar_3.png' },
          //   { imgUrl: '/images/home_4/avatar_4.png' },
          //   { imgUrl: '/images/home_4/avatar_5.png' },
          // ]}
          data={testimonialData}
        />
      </Section>


      {/* <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="MITOLAB"
          // sectionTitle="Provides Our Best Services"
          sectionTitleUp="SOFTWARE"
          data={departmentData}
        />
      </Section> */}


      {/* <div style={{
        height: '100vh',
        width: '100%',
        background: '#fefefe',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} >
        <h1>FLOW DIAGNOSTIC TEST</h1>
      </div> */}


      <Section
      // topMd={190}
      // topLg={150}
      // topXl={105}
      // // bottomMd={200}
      // bottomLg={150}
      // bottomXl={110}
      >
        <MitoSoftTestimonialSectionStyle
          sectionTitle="FLOW DIAGNOSTIC TEST"
          sectionTitleUp="SOFTWARE"
          avatarListTitle="This advanced analytical tool helps researchers process biosensor-generated data with precision. Using proven methodologies, it ensures accurate insights for analyzing mitochondrial function, crucial for understanding metabolic disorders and neurodegenerative diseases.
It seamlessly integrates with biosensor devices, transforming raw data into meaningful insights using advanced algorithms. The tool handles large datasets efficiently, enabling trend analysis, anomaly detection, and biomarker identification.
With an intuitive interface featuring interactive graphs and automated reporting, researchers can easily interpret complex data. Ideal for clinical research, pharmaceuticals, and personalized medicine, it bridges the gap between raw sensor readings and actionable scientific knowledge, driving medical advancements."
          data={testimonialData}
        />
      </Section>

      {/* <div style={{
        height: '100vh',
        width: '100%',
        background: '#fefefe',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }} >
        <h1>HOW IT WORKS</h1>
      </div> */}


      <Section topMd={195} topLg={145} topXl={105}>
        <HowItWorksSoftwareSectionStyle
          sectionTitle="HOW IT WORKS"
          // sectionTitleUp="AN end-to-end solution for remote monitoring of lung health"
          data={departmentData}
        />
      </Section>


      <Section id='experts' topMd={195} topLg={145} topXl={105}>
        <TeamSectionStyle4
          sectionTitle="Experts Researcher"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>

      {/* Start Award Section */}
      {/* <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Departments" data={awardData} />
      </Section> */}
      {/* End Award Section */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
      {/* <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section> */}
      {/* End Banner Section */}
      {/* Start Blog Section */}
      <Section id='blog' topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section>
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section> */}
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
