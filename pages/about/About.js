import { Container, Row, Col } from "react-bootstrap";
import { AboutInfo, AboutCard as Card, Instrument } from "@/components";
import css from "./about.module.scss";

const sizes = { xs: 12, lg: 6, xl: 4 };

export default function About() {
  return (
    <>
      <div className={css.about}>
        <Container className="m-0 p-0" fluid={true}>
          <Row className="w-100 m-0 p-0">
            <Col
              xs={12}
              lg={6}
              xl={{ span: 4, offset: 12 }}
              className="my-2 mx-0 p-0"
            >
              <section>
                <Card
                  title="100%"
                  icon="icon-tv"
                  list={[
                    "Live Looping Jams",
                    "No Backing Tracks",
                    "In Real Time",
                    "On The Fly",
                  ]}
                  text="Live Looping Jams"
                >
                  <Instrument instrument="icon-guitar" />
                </Card>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0">
              <section>
                <Card
                  title="Live"
                  icon="icon-headphones"
                  list={[
                    "Live Entertainment",
                    "Instrumental Jams",
                    "Experimentation",
                    "Improvisation",
                  ]}
                  text="Music To Help You Relax"
                >
                  <Instrument instrument="icon-bongos" />
                </Card>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0 mx-lg-auto mx-xl-0">
              <section>
                <Card
                  title="Looping"
                  icon="icon-equalizer2"
                  list={[
                    "Keyboards / Synths",
                    "Drum Machines",
                    "Electric Guitar",
                    "Bass Guitar",
                  ]}
                  text="JAM Plays It All"
                >
                  <Instrument instrument="icon-keys" />
                </Card>
              </section>
            </Col>
            <Col
              xs={12}
              lg={6}
              xl={{ span: 4, offset: 12 }}
              className="my-2 mx-0 p-0"
            >
              <section>
                <Card
                  title="Made"
                  icon="icon-music"
                  list={[
                    "Spacey Surfer Rock",
                    "Psychedelic Jams",
                    "Hawaiian Slides",
                    `60's Lounge`,
                  ]}
                  text="Really Chill Vibes"
                >
                  <Instrument instrument="icon-vibes" />
                </Card>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0">
              <section>
                <Card
                  title="In"
                  icon="icon-video-camera"
                  list={[
                    "Ambient Spaces",
                    "Soundscapes",
                    "Guitar Solos",
                    "Island Vibes",
                  ]}
                  text="For Melting Into The Couch"
                >
                  <Instrument instrument="icon-drums" />
                </Card>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0 mx-lg-auto mx-xl-0">
              <section>
                <Card
                  title="Taiwan"
                  icon="icon-mic"
                  list={[
                    "Video Game Sounds",
                    "Retro Space Funk",
                    "N64 Water Levels",
                    "Vaporwave",
                  ]}
                  text="90's PC-Game Music"
                >
                  <Instrument instrument="icon-synth" />
                </Card>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutInfo />
    </>
  );
}
