import React, {RefObject} from "react";
import About from "./about/About.component";
// import BuyMartian from "./buyMartian/BuyMartian.component";
import Dao from "./dao/Dao.component";
import Header from "./header/Header.component";
import HowTo from "./howTo/HowTo.component";
import MeetMartians from "./meetMartians/MeetMartians.component";
import RoadMap from "./roadmap/RoadMap.component";
import "./Home.scss";
interface HomeProps {
    aboutRef: RefObject<HTMLDivElement>,
	howToRef: RefObject<HTMLDivElement>,
	roadMapRef: RefObject<HTMLDivElement>,
	buyMartianRef: RefObject<HTMLDivElement>,
	aboutDaoRef: RefObject<HTMLDivElement>
}
function Home({aboutRef, howToRef, roadMapRef, buyMartianRef, aboutDaoRef}: HomeProps) {
  return (
    <div className="page home">
      <Header />
      <About refToUse={aboutRef} />
	  <MeetMartians />
      <HowTo refToUse={howToRef} />
      <RoadMap refToUse={roadMapRef} />
      {/* <BuyMartian refToUse={buyMartianRef} /> */}
      <Dao refToUse={aboutDaoRef} />
    </div>
  );
}

export default Home;
