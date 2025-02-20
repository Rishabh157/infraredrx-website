import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../VideoModal';

export default function HeroStyle2({
  id,
  title,
  subTitle,
  bgUrl,
  imgUrl,
  videoBtnText,
  videoUrl,
  funfactList,
  btnText,
  btnUrl,
}) {
  return (
    <section
      id={id}
      className="cs_hero cs_style_2 cs_bg_filed"
      style={{ backgroundImage: `url(/images/background-3.jpg)`}}
      // style={{ backgroundImage: `url(/images/background-2.jpg)`}}
      // style={{ backgroundImage: `url(/images/background-1.jpg)`}}
      // style={{ backgroundImage: `url(https://media.istockphoto.com/id/1333139325/photo/mitochondrion-structure.jpg?s=2048x2048&w=is&k=20&c=TIdnp8tLFr2xdLqbTiy7KnCkZA8IF1-RZmNdn1COddY=)` }}
      // style={{ backgroundImage: `url(https://media.istockphoto.com/id/843281624/photo/mitochondria.jpg?s=2048x2048&w=is&k=20&c=0YhZuV3Z2fpyZPrNdGffQjtXcT6euttzxLueIwit4KQ=)` }}
      // style={{ backgroundImage: `url(https://media.istockphoto.com/id/1400779732/vector/futuristic-mitochondria-eukaryotic-organelle-in-glowing-low-polygonal-style-isolated-on-dark.jpg?s=2048x2048&w=is&k=20&c=YdpsQ7A_-LkR50eKBDk8XFe2XfzkxuzJudWVZnVfZFU=)` }}
      // style={{ backgroundImage: `url(https://plantlet.org/wp-content/uploads/2021/08/Mitochondria-Drawing-660x330.jpg)` }}
      // style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486291301608-a503c774721a?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
      // style={{ backgroundImage: `url(https://prohealth-react.vercel.app/images/home_2/hero_bg.jpeg)` }}
    // style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="container">
        <div className="cs_hero_text">
          <h1 className="cs_hero_title cs_white_color cs_fs_84">{title}</h1>
          <div className="cs_hero_text_in">
            <div className="cs_hero_btn cs_white_color">
              <Link to={btnUrl} className="cs_text_btn">
                {btnText}
              </Link>
            </div>
            <p className="cs_hero_subtitle cs_white_color">{subTitle}</p>
          </div>
        </div>
        <img src={'https://prohealth-react.vercel.app/images/home_2/patents.png'} alt="Hero" className="cs_hero_patents" />
        {/* <img src={imgUrl} alt="Hero" className="cs_hero_patents" /> */}
      </div>
      <div className="container">
        <div className="cs_hero_bottom">
          <div className="cs_hero_bottom_left">
            <div className="cs_hero_btn_wrap">
              <VideoModal
                videoUrl={videoUrl}
                videoBtnText={videoBtnText}
                variant="cs_white_color"
              />
            </div>
          </div>
          <div className="cs_hero_bottom_right">
            {funfactList?.length > 0 && (
              <div className="cs_hero_funfact text-center">
                {funfactList?.map((item, index) => (
                  <div className="cs_hero_funfact_col" key={index}>
                    <h3 className="cs_white_color cs_fs_72">{item.number}</h3>
                    <p className="cs_white_color mb-0">{item.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
