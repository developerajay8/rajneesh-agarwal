import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
// import WhatYouLearn from "./components/whatyoulearn";
import Bonuses from "./components/bonuses";
import WhyShouldAttend from "./components/whyshouldattend";
import AboutCoach from "./components/aboutcoach";
// import Services from "./components/services";
import WhatYouGet from "./components/whatyouget";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ShowcaseSection from "./components/showcasesection";
// import FeaturesSection from "./components/featuressection";
import FeatureStrip from "./components/featurestrip";
import FrameworkSection from "./components/frameworksection";
import FinalCTA from "./components/finalcta";
import WhoShouldApply from "./components/whoshouldapply";
import VideoTestimonials from "./components/videotestimonials";
import WhatYouGetMines from "./components/whatyougetmines";

export default function Home() {
  return (
   <div className="">
    <Navbar />
      <Hero />
      <FeatureStrip/>
      <FrameworkSection/>
      {/* <WhatYouLearn /> */}
      <WhyShouldAttend />
      <Bonuses />
      <WhoShouldApply/>
      <VideoTestimonials/>
      <ShowcaseSection/>
      <AboutCoach />
      {/* <FeaturesSection/> */}
      {/* <Services /> */}
      <WhatYouGetMines/>
      <WhatYouGet />
      <FAQ />
      <FinalCTA/>
      {/* <Contact/>
      <Footer /> */}
   </div>
  );
}
