import React, { useEffect, useRef } from 'react';
import sky from './assets/images/Home-Images/sky.png';
import water from './assets/images/Home-Images/water.png';
import centercity from './assets/images/Home-Images/center-city.png';
import rightcity from './assets/images/Home-Images/right-city.png';
import leftcity from './assets/images/Home-Images/left-city.png';
import trainImg from './assets/images/Home-Images/train.png';
import hillleft1 from './assets/images/Home-Images/hill-left-1.png';
import hillright1 from './assets/images/Home-Images/hill-right-1.png';

import waterfall from './assets/images/About-Images/waterfall.png';
import desertsky from './assets/images/About-Images/desert-sky.png';
import desertmoon from './assets/images/About-Images/desert-moon.png';
import desertNoSky from './assets/images/About-Images/desert-NoSky.png';
import desertrock from './assets/images/About-Images/desert-rock.png';
import water2 from './assets/images/About-Images/water.png';
import manImg from './assets/images/About-Images/man.png';
import grass from './assets/images/About-Images/grass.png';

import Salmon from './assets/images/products/Salmon.png';
import Tuna from './assets/images/products/Tuna.png';
import Swordfish from './assets/images/products/Swordfish.png';
import Snapper from './assets/images/products/Snapper.png';
import Header from './components/Header';

function App() {

  const moonRef = useRef(null);
  const textRef = useRef(null);
  const trainRef = useRef(null);
  const desertMoonRef = useRef(null);
  const manRef = useRef(null);
  const progressRef = useRef(null);

  const handleScroll = () => {
    const value = window.scrollY;
    if (moonRef.current) moonRef.current.style.top = value * 0.9 + 'px';
    if (textRef.current) textRef.current.style.top = 90 + value * -0.2 + '%';
    if (trainRef.current) trainRef.current.style.left = value * 1.5 + 'px';
    if (desertMoonRef.current) desertMoonRef.current.style.top = value * 0.3 + 'px';
    if (manRef.current) manRef.current.style.left = value * 0.6 + 'px';

    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);
    if (progressRef.current) {
      progressRef.current.style.background = `conic-gradient(#194eb9 ${scrollValue}%, #67ccff ${scrollValue}%)`;
      progressRef.current.style.display = pos > 100 ? 'grid' : 'none';
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (progressRef.current) {
      progressRef.current.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
      });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <section className="parallax_home">
        <img src={sky} alt="sky" />
        <img src={water} alt="water" />
        <img src={centercity} alt="center-city" />
        <img src={rightcity} alt="right-city" />
        <img src={leftcity} alt="left-city" />
        <img src={trainImg} alt="train" id="train" ref={trainRef} />
        <h1 id="text" ref={textRef}>Parallax Website</h1>
        <img src={hillleft1} alt="hill-left" />
        <img src={hillright1} alt="hill-right" />
      </section>

      <section className="about" id="about">
        <div className="info_box">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab rem vel laudantium molestias, vitae dolorum similique doloribus excepturi doloremque et, quae ex corporis modi. Commodi saepe iste corrupti adipisci?</p>
          <a href="#" className="btn">Read More!</a>
        </div>
        <img src={waterfall} alt="waterfall" className="waterfall" />
        <img src={desertsky} alt="desert-sky" />
        <img src={desertmoon} alt="desert-moon" id="desert-moon" ref={desertMoonRef} />
        <img src={desertNoSky} alt="desert-no-sky" />
        <img src={desertrock} alt="desert-rock" />
        <img src={water2} alt="water" />
        <img src={manImg} alt="man" id="man" ref={manRef} />
        <img src={grass} alt="grass" />
        <div id="progress" ref={progressRef}>
          <span id="pro_value">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.414 7.293 7.293 1.414-1.414L12 3.586l-8.707 8.707 1.414 1.414L12 6.414z"></path><path d="m3.293 18.293 1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586l-8.707 8.707z"></path></svg>
          </span>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product_cards">
          <div className="card">
            <img src={Salmon} alt="Salmon" />
            <div className="info">
              <div className="price_name">
                <h3>Salmon</h3>
                <span>$120</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias impedit id esse fugiat libero dolor nulla eius ad consequatur sed est recusandae assumenda, unde laborum fugit, deleniti iusto? Quis, recusandae?</p>
              <a href="#" className="btn">Go Shop</a>
            </div>
          </div>
          <div className="card">
            <img src={Tuna} alt="Tuna" />
            <div className="info">
              <div className="price_name">
                <h3>Tuna</h3>
                <span>$120</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias impedit id esse fugiat libero dolor nulla eius ad consequatur sed est recusandae assumenda, unde laborum fugit, deleniti iusto? Quis, recusandae?</p>
              <a href="#" className="btn">Go Shop</a>
            </div>
          </div>
          <div className="card">
            <img src={Swordfish} alt="Swordfish" />
            <div className="info">
              <div className="price_name">
                <h3>Swordfish</h3>
                <span>$120</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias impedit id esse fugiat libero dolor nulla eius ad consequatur sed est recusandae assumenda, unde laborum fugit, deleniti iusto? Quis, recusandae?</p>
              <a href="#" className="btn">Go Shop</a>
            </div>
          </div>
          <div className="card">
            <img src={Snapper} alt="Snapper" />
            <div className="info">
              <div className="price_name">
                <h3>Snapper</h3>
                <span>$120</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias impedit id esse fugiat libero dolor nulla eius ad consequatur sed est recusandae assumenda, unde laborum fugit, deleniti iusto? Quis, recusandae?</p>
              <a href="#" className="btn">Go Shop</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
