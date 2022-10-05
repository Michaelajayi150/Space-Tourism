import desktopBackground from "../assets/home/background-home-desktop.jpg";
import tabBackground from "../assets/home/background-home-tablet.jpg";
import mobileBackground from "../assets/home/background-home-mobile.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <picture className="page-background">
        <source srcSet={desktopBackground} media="(min-width: 968px)" />
        <source srcSet={tabBackground} media="(min-width: 768px)" />
        <img src={mobileBackground} alt="background" />
      </picture>
      <div className="content lg:flex lg:items-end lg:justify-between mx-auto max-w-7xl pl-2 sm:pl-6 text-center lg:text-start">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="cz-text-medium">SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p className="normal-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/dist" className="max-w-xl mt-12 lg:mt-0">
          <div className="btn-container mx-auto lg:mx-0 rounded-full">
            <h2 className="btn-tag rounded-full bg-white">EXPLORE</h2>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Home;
