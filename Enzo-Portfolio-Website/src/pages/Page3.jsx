import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OpportunitySection from "../components/OpportunitySection";
import LineBreak from "../components/lineBreak";
import Footer from "../components/footer";
const Page3 = () => {
  const heading1 = "OPPORTUNITY";
  const heading2 = "Crafting Infinite Possibilities";
  const paragraphs = [
    "In crafting a transparent, custom digital form of the initial prototype, I've not only preserved the essence of the brand but opened a gateway to endless opportunities. This strategic move empowers us to explore a multitude of variations for the idea seamlessly.",
    "The versatility of the design isn't confined to a static representation. It's a living canvas that allows for effortless expansions. Whether it's introducing new pages, services, or other idea's prototypes, the simplicity lies in adding an element to the initial website design. This not only ensures coherence but also transforms our digital space into an ever-evolving platform, ready to embrace the unfolding chapters of our brand's journey.",
    "In essence, what may seem like a design detail today becomes the key to unlocking tomorrow's innovations. This foresight not only saves time and resources but instills the brand with the agility to adapt, grow, and consistently captivate the audience with fresh, meaningful content.",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="section3" className="bg-white text-center text-black">
      <div className="mb-20" data-aos="fade-up">
        <img
          className="w-full"
          src="https://static.wixstatic.com/media/f1c650_14c87460c9074abca7a14fb1952dde89~mv2.jpg/v1/fill/w_1210,h_908,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/V%20iPhone%2015%20Pro.jpg"
          alt="V iPhone 15 Pro"
          loading="lazy"
          fetchpriority="high"
        />
      </div>

      <LineBreak />

      <OpportunitySection
        headingTop={heading1}
        headingMain={heading2}
        paragraphs={paragraphs}
      />

      <LineBreak />

      <div className="mt-10 mb-10" data-aos="fade-up">
        <img
          className="w-full"
          src="https://static.wixstatic.com/media/f1c650_88a706909e4f4c9b8c6879584fc0bdef~mv2.jpg/v1/fill/w_2070,h_1552,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMac_V.jpg"
          alt="iMac V"
          loading="lazy"
          fetchpriority="high"
        />
      </div>

      <OpportunitySection
        headingTop="SOLVED"
        headingMain="Transforming Challenges into Design Triumphs1"
        paragraphs={[
          "Embarking on the UX redesign, I sculpted an intuitive prototype, seamlessly improving the user experience. The logo transformation became an artful dance, integrating the client's artistic elements into a symbol of brand identity.",
          "The digital frontier demanded a website beyond aesthetics - a dynamic platform poised for growth. I engineered not just a site but a strategic space, offering both plasticity for future adaptations and a compelling canvas for brand storytelling.",
        ]}
      />

      {/* iPad lazy load + fade-up */}
      <div className="mt-10 mb-10" data-aos="fade-up">
        <img
          src="https://static.wixstatic.com/media/f1c650_2ff68fd403f54548a18a944deeb498d1~mv2.jpg/v1/fill/w_1863,h_1397,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/iPad%20Pro_V_%20Mockup.jpg"
          alt="Custom logo and brand asset collection that exudes timeless luxury, by Anzo.Studio."
        />
      </div>
      <LineBreak />

      <OpportunitySection
        headingTop="RESULT"
        headingMain="A Symphony of Style and Character"
        paragraphs={[
          "In the pursuit of introducing a new brand to the market, I dedicated myself to a meticulous design process, ensuring every detail reflected the transparency of the underlying idea and the sophistication my client's brand aimed to embody.",
          "The outcome is more than a visual identity; it's a pure and elegant representation frozen in a moment. The logo stands as a testament to the seamless integration of the author's and product's essence with the brand, forging a connection that lingers in the minds of the audience.",
          "This endeavor wasn't just about creating a design; it was about curating an experience. The refined aesthetics not only elevate the brand but serve as a gateway to a world where every nuance tells a story, where the brand and the author's identity converge into a singular, compelling action and narrative.",
        ]}
      />
      <LineBreak />
      <div className="mt-10 relative flex items-center justify-center" data-aos="fade-up">
        <video src="https://video.wixstatic.com/video/f1c650_ce07b5ec772e4cdfbae04217a5d34bf5/1080p/mp4/file.mp4" 
        
        muted loop autoplay="true" ></video>
      </div>

      <Footer />
    </div>
  );
};

export default Page3;
