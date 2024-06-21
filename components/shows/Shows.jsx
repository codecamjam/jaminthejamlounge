import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { CustomButton } from "@/components";
import { useAppContext } from "@/context";

export default function Shows({ shows }) {
  const { darkMode } = useAppContext();
  return (
    <section className="px-2 pt-3 mx-2">
      <Row>
        {shows.map((show, idx) => (
          <Col
            key={idx}
            xl={4} // 4 cards per row on extra-large screens
            lg={4} // 3 cards per row on large screens
            md={6} // 2 cards per row on medium screens
            sm={12} // 1 card per row on small screens
            className="mb-4"
          >
            <Card className="h-100 pt-2" >
            <Card.Title className="text-center">
                  <u className="h4 fw-bold">{show.name}</u>
                </Card.Title>
              <Card.Img variant="top" src={idx % 2 === 0 ? '/images/derp.jpeg' : '/images/jam-face.jpg'} alt={show.alt} />
              <Card.Body>
               
                <Card.Text>
                  <p className="py-0 my-1"><strong>Show Date:</strong> {new Date(show.date).toLocaleDateString()}</p>
                  <p className="py-0 my-1"><strong>Show Time:</strong> {show.time}</p>
                  <p className="py-0 my-1"><strong>Venue:</strong> {show.v̶e̶n̶u̶e̶}</p>
                  <p className="py-0 my-1"><strong>Address:</strong> {show.address}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer className={`text-center border-0 pt-0 mb-2 ${darkMode ? "bg-black" : "bg-white"}`}>
                <CustomButton text="More Info" href={show.info} />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}