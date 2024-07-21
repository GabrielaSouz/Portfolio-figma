import "./AboutMe.css";
import Twitter from './../../assets/ícons/twitter.svg';
import Twitch from './../../assets/ícons/twitch.svg';
import Youtube from './../../assets/ícons/youtube.svg';
import figma from './../../assets/ícons/figma.svg';
import Codepen from './../../assets/ícons/codepen.svg';
import Facebook from './../../assets/ícons/facebook.svg';


function AboutMe() {
  return (
    <div className="body_about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="part1_about">
              <h1>Sobre mim</h1>
            </div>
            <div className="part2_about">
              <p>Campinas, São Paulo</p>
            </div>
            <div className="part3_about">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                omnis nihil eveniet pariatur autem voluptatem perferendis ipsa
                id, similique, vero iusto illum facilis natus, sint nemo nulla
                magni assumenda. Nisi?Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
              </p>
            </div>

          <div className="part4_about">
            <img src={Twitter} className="twitter"/>
            <img src={Twitch} className="twitch"/>
            <img src={Youtube} className="youtube"/>
            <img src={figma} className="figma"/>
            <img src={Codepen} className="codepen"/>
            <img src={Facebook} className="facebook"/>

          </div>

          <div className="part5_about">
            <a href="" target="">
              Baixar arquivo
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
