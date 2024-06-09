import { Icon } from "@/components";
import css from "./contact.module.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  return (
    <div className={`${css.contact} mx-0 px-0`}>
      <h2 className={css.heading}>GET IN TOUCH</h2>
      <div className={css.row}>
        <Icon spriteName="icon-eye" />
        <div className={css.text}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/cameron-taghlabi-33b69518a/"
            className={css.value}
            rel="noreferrer"
          >
            Jam on the Web
          </a>
        </div>
      </div>
      <div className={css.row} title="Phone number">
        <Icon spriteName="icon-phone" />
        <div className={css.text}>
          <a
            target="_blank"
            className={css.value}
            href="tel:9045633433"
            rel="noreferrer"
          >
            (904) 563-3433
          </a>
        </div>
      </div>
      <div className={css.row} title="Email">
        <Icon spriteName="icon-envelop" />
        <div className={css.text}>
          <a
            target="_blank"
            href="mailto:camjamt@gmail.com"
            className={css.value}
            rel="noreferrer"
          >
            {`Jam's Email`}
          </a>
        </div>
      </div>
    </div>
  );
}
