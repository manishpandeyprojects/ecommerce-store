import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";


const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
            <h1>Sales</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure maxime neque temporibus voluptatibus tenetur iste rerum placeat dolores, eos veniam odit magnam nostrum, alias quo, assumenda optio repellat dolore?</p>
            <div className="ctas">
                <div className="banner-ctas">Read More</div>
                <div className="banner-ctas v2">Shop More</div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
