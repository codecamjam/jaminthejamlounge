import { Bio, CustomButton, Icon, Stars } from "@/components";
import css from "./contact.module.scss";
import { Container, Row, Col, Card } from "react-bootstrap";

const sizes = { xs: 12, lg: 6, lg: 4 };

export default function Contact() {
  return (
    <Container fluid="md" className="mt-4 mx-0 px-0">
      <Bio />
      <Row className={`${css.stuff} mx-0 px-0 mt-4`}>
        <h2 className={css.stuffHeader}>
          {`"How Much Music Stuff Should I Bring?"`}
        </h2>
        <Col {...sizes} className="px-0 mb-4">
          <Card className={`${css.cardStart} p-3`}>
            <section className="mx-0 px-0">
              <h3 className="text-center">SOME STUFF</h3>
              <p className="text-center">{`I'll travel lite and set up quickly!`}</p>
              <div className={`${css.icon} ${css.flip1}`}>
                <Icon spriteName="icon-record" />
              </div>
              <h4
                className={`${css.bringit} mt-4 pb-0 mb-2 fw-bold`}
              >{`Here's what I'll bring:`}</h4>
              <ul className={css.list}>
                <li className="">1 Looper</li>
                <li className="">Drum Machine / Percussion</li>
                <li className="">Electric Guitar</li>
                <li className="">Effects</li>
                <li className="">Maybe more!</li>
              </ul>
              <div className="d-flex justify-content-center my-3">
                <CustomButton
                  text="Book Now!"
                  href="mailto:toysfromtaiwan@gmail.com"
                />
              </div>
            </section>
          </Card>
        </Col>
        <Col {...sizes} className=" px-0 mb-4 order-lg-3">
          <Card className={`${css.cardMiddle} p-3`}>
            <section className="">
              <h3 className="text-center">MOST STUFF</h3>
              <p className="text-center">{`Now I'll really start jamming out!`}</p>
              <div className={`${css.icon} ${css.flip2}`}>
                <Icon spriteName="icon-record" />
              </div>
              <h4
                className={`${css.bringit} mt-4 pb-0 mb-2 fw-bold`}
              >{`Here's what I'll bring:`}</h4>
              <ul className={css.list}>
                <li className="">2 Loopers</li>
                <li className="">Drum Machine / Percussion</li>
                <li className="">Electric Guitar</li>
                <li className="">Effects</li>
                <li className="">Mystery Instruments</li>
              </ul>
              <div className="d-flex justify-content-center my-3">
                <CustomButton
                  text="Book Now!"
                  href="mailto:toysfromtaiwan@gmail.com"
                />
              </div>
            </section>
          </Card>
        </Col>
        <Col {...sizes} className="px-0 mb-3 order-lg-2">
          <Card className={`${css.cardEnd} p-3`}>
            <section className="">
              <h3 className="text-center fw-bold">ALL OF THE STUFF!</h3>
              <p className="text-center">{`I'll bring the whole rig and get really weird!`}</p>
              <div className={css.icon}>
                <Icon spriteName="icon-rockstar" />
              </div>
              <div className="">
                <h4
                  className={`${css.bringit} mt-4 pb-0 mb-2 fw-bold`}
                >{`Here's what I'll bring:`}</h4>
                <ul className={css.list}>
                  <li className="">3 Loopers</li>
                  <li className="">Drum Machines / Percussions</li>
                  <li className="">Electric Synth Guitar</li>
                  <li className="">Keyboards & Pads</li>
                  <li className="">Mystery instruments & Gizmos</li>
                  <li className="">All My Effects</li>
                </ul>
              </div>
              <div className="d-flex justify-content-center my-3">
                <CustomButton
                  text="Book Now!"
                  href="mailto:toysfromtaiwan@gmail.com"
                />
              </div>
              <div className="pt-2 mt-4 mb-0">
                <Stars />
              </div>
            </section>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
