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
        <p className={`${css.thanks} fw-bold m-0`}>
          Thanks for stopping by and hanging in the Jam Lounge!
        </p>
       <span>-- <span>JAM</span></span>
            
        
      </Card>
    </Container>
  );
}
