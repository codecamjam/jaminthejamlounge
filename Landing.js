import { Picture, JamInChinese, LandingWords } from "@/components";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Shows from "@/pages/shows/Shows";
import Support from "@/pages/support/Support";

export default function Landing() {
  return (
    <>
      <Picture
        img="instruments.jpg"
        alt="cartoon drawing of instruments"
        w={850}
        h={503}
      />

      <JamInChinese />
      <LandingWords position="bottom" />
      <About />
      <Contact />
      <Shows />
      <Support />
    </>
  );
}
