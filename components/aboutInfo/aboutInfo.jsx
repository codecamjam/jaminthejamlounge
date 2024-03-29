import React from "react";
import { Card, Container } from "react-bootstrap";
import css from "./aboutInfo.module.scss";

export default function AboutInfo() {
  return (
    <Container fluid="md" className={`my-3 px-0 mx-0 ${css.aboutInfo}`}>
      <Card className="p-4">
        <h2 className="mb-4">Jam in the Jam Lounge</h2>
        <p>
          {`Hi, I'm Jam, and welcome to the Jam Lounge. Thanks for stopping by! Here's a little bit about me and my music project:`}
        </p>
        <h3>About Me</h3>
        <p>
          {`I specialize in creating 100% live looping songs and jams. Every
          beat, melody, and rhythm you hear is crafted in real time, with no
          backing tracks or any pre-recorded music. I use a bunch of loop machines and effects pedals to put it all together. I play guitar, bass, keyboard, and I put together random jams on the fly with some singing in between!"`}
        </p>
        <h3>The Music</h3>
        <p>
          {`Experience deep relaxation
          through dynamic and spontaneous jams in the Jam Lounge. Truely, every jam I make is an improvised arrangement of sound, rhythm, and melody, brought to life before your ears. And it's all live and made in real time! Come check out my show soon. I bet you'll dig it! I'm looking forward to playing for you!`}
        </p>
        {/* <h3>The Website</h3>
        <p>
          {`This website was built from the ground up using Next.js, a powerful
          React framework. While it's currently a static site, I have big plans
          for its future:`}
        </p>
        <ul>
          <li>
            {`I'll be upgrading to the latest version of Next.js to leverage its
            advanced features.`}
          </li>
          <li>
            {`I'll be incorporating TypeScript for enhanced code quality and
            maintainability.`}
          </li>
          <li>
            {`I'm working on connecting the site to my personal backend services,
            enhancing the user experience and offering more interactive
            features.`}
          </li>
        </ul>
        <p>
          {`In the meantime, enjoy the current version of the site—it's a snapshot
          of my creative journey. Your visit means a lot to me, and your support
          fuels my passion for creating live looping music.`}
        </p> */}
        <p className={css.thanks}>
          {`Thanks for stopping by and hanging in the Jam Lounge!`}
          <br />
          <p className={css.jam}>-- <span>JAM</span></p>
        </p>
      </Card>
    </Container>
  );
}
