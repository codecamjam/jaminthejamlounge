import { Container, Row, Col } from "react-bootstrap";
import AboutInfo from '../aboutInfo'
import AboutCard from '../aboutCard'
import  Instrument from '../instrument'
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
                <AboutCard
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
                </AboutCard>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0">
              <section>
                <AboutCard
                  title="Live"
                  icon="icon-headphones"
                  list={[
                    "Singing & Songwriting",
                    "Instrumental Jams",
                    "Experimentation",
                    "Improvisation",
                  ]}
                  text="Music To Help You Relax"
                >
                  <Instrument instrument="icon-bongos" />
                </AboutCard>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0 mx-lg-auto mx-xl-0">
              <section>
                <AboutCard
                  title="Looping"
                  icon="icon-equalizer2"
                  list={[
                    "Acoustic/Electric Guitars",
                    "Keyboards & Gizmos",
                    "Drum Machines",
                    "Bass Guitar",
                  ]}
                  text="JAM Plays It All"
                >
                  <Instrument instrument="icon-keys" />
                </AboutCard>
              </section>
            </Col>
            <Col
              xs={12}
              lg={6}
              xl={{ span: 4, offset: 12 }}
              className="my-2 mx-0 p-0"
            >
              <section>
                <AboutCard
                  title="Playing"
                  icon="icon-music"
                  list={[
                    "Spacey Surfer Rock",
                    "Psychedelic Jams",
                    "Hawaiian Slide",
                    `60's Lounge`,
                  ]}
                  text="Really Chill Vibes"
                >
                  <Instrument instrument="icon-vibes" />
                </AboutCard>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0">
              <section>
                <AboutCard
                  title="Trippy"
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
                </AboutCard>
              </section>
            </Col>
            <Col {...sizes} className="my-2 mx-0 p-0 mx-lg-auto mx-xl-0">
              <section>
                <AboutCard
                  title="Sounds"
                  icon="icon-mic"
                  list={[
                    "Relaxing",
                    "Jammy",
                    "Funky",
                    "Retro",
                  ]}
                  text="90's Hippie Weather Channel"
                >
                  <Instrument instrument="icon-synth" />
                </AboutCard>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutInfo />
    </>
  );
}
