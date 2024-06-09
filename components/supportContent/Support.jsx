import { CardTitle, Icon, Picture } from "@/components";
import { useAppContext } from "@/context";
import { Card, Container, Row, Col } from "react-bootstrap";
import css from "./support.module.scss";

const Heart = () => (
  <div className={css.heart}>
    <Icon spriteName="icon-heart" />
  </div>
);

const defaultSizes = { xs: 12, sm: 12, md: 12, lg: 4, xl: 4 };

export default function Support() {
  const { darkMode } = useAppContext();
  return (
    <>
    <Container className={`my-auto px-0 mx-0 mt-4 ${css.support}`}>
      <Card className="pb-2 pt-4 px-3 position-relative">
      <CardTitle element="h2">
          <Heart />
          THANK YOU
          <Heart />
        </CardTitle>
        <h3 className={css.tips}>{`Feelin Tipsy?`}</h3>
        <p
          className={css.instructions}
        >{`(Tap an icon below to send a tip! Thank you!)`}</p>
        <Row className="">
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>CASH APP</p>

            <a
              href="https://cash.app/$toysfromtaiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Icon spriteName="icon-cashapp" />
            </a>
          </Col>
          {/* <Col
            {...defaultSizes}
            className={`d-flex flex-column align-items-center my-2 ${css.tape}`}
          >
            <Icon spriteName="icon-tape" />
          </Col> */}
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>VENMO</p>

            <a
              href="https://account.venmo.com/u/toysfromtaiwan"
              target="_blank"
              rel="noopener noreferrer"
              className={`mb-2 ${css.venmo}`}
            >
              <Icon spriteName="icon-venmo" />
            </a>
          </Col>
          <Col
            {...defaultSizes}
            className="d-flex flex-column align-items-center my-2"
          >
            <p className={css.payer}>PAYPAL</p>

            <a
              href="https://www.paypal.com/paypalme/toysfromtaiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2"
            >
              <Icon spriteName="icon-paypal" />
            </a>
          </Col>
        </Row>

        <CardTitle element="h3">
          <Heart />
          THANK YOU
          <Heart />
        </CardTitle>
        <p className="ml-2 pb-2">
          I am truly passionate about creating live music, and I sincerely
          appreciate your visit and contribution to my work! Your support and
          encouragement mean the world to me. Please spread the word with your
          friends and loved ones about Jam in the Jam Lounge! Thanks
          again, and I hope to play for you someday soon!
        </p>
      </Card>
    </Container>
    <br />
     <div className="mt-1">
     <Picture
       img="derp.jpeg"
       alt="cartoon drawing of jam's face"
       w={500}
       h={296}
     />
   </div>
   <p className="display-4 fw-bold mt-3">
     {`Let's jam out soon!`}
   </p>
   </>
  );
}
