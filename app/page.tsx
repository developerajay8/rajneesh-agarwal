import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhatYouLearn from "./components/whatyoulearn";
import Bonuses from "./components/bonuses";
import WhyShouldAttend from "./components/whyshouldattend";
import AboutCoach from "./components/aboutcoach";
import Services from "./components/services";
import WhatYouGet from "./components/whatyouget";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ShowcaseSection from "./components/showcasesection";
import FeaturesSection from "./components/featuressection";

export default function Home() {
  return (
   <div className="">
    <Navbar />
      <Hero />
      <WhatYouLearn />
      <Bonuses />
      <WhyShouldAttend />
      <AboutCoach />
      <ShowcaseSection/>
      <FeaturesSection/>
      <Services />
      <WhatYouGet />
      <FAQ />
      <Contact/>
      <Footer />
   </div>
  );
}
