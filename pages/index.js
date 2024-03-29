import {
  MediaLinks,
  Picture,
  JamInChinese,
  LandingWords,
  AboutContent,
  ContactContent,
  ShowsContent,
  SupportContent,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <b className="pt-2" />
      <Picture
        invert={true}
        img="instruments.jpg"
        alt="cartoon drawing of instruments"
        w={850}
        h={503}
      />
      <LandingWords position="bottom" />
      <div className="my-4 mx-auto">
        <MediaLinks />
      </div>
      <AboutContent />
      <ContactContent />
      <ShowsContent />
      <SupportContent />
    </>
  );
}
