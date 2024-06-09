import { useState, useEffect, Fragment } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { showsList } from "@/constants";
import { CustomButton, LoadingGears, Icon } from "@/components";
import { useAppContext } from "@/context";
import css from "./shows.module.scss";

export default function Shows() {
  const [header, setHeader] = useState("Shows!");
  const [shows, setShows] = useState([]);
  // Get the current date
  const { darkMode } = useAppContext();

  useEffect(() => {
    const currentDate = new Date();

    // Filter the shows to display only upcoming ones
    const upcomingShows = showsList.filter((show) => {
      // Extract the date part of the show.date
      const showDate = new Date(
        show.date.getFullYear(),
        show.date.getMonth(),
        show.date.getDate()
      );
      // Extract the date part of the current date
      const currentDateOnly = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );
      // Compare the dates
      return showDate >= currentDateOnly;
    });
    const displayHeader =
      upcomingShows.length > 0 ? "Shows!" : `Booking soon!`;
    setHeader(displayHeader);
    setShows(upcomingShows);
  }, []);

  // // Filter the shows to display only upcoming ones
  // const upcomingShows = showsList.filter((show) => {
  //   // Extract the date part of the show.date
  //   const showDate = new Date(
  //     show.date.getFullYear(),
  //     show.date.getMonth(),
  //     show.date.getDate()
  //   );
  //   // Extract the date part of the current date
  //   const currentDateOnly = new Date(
  //     currentDate.getFullYear(),
  //     currentDate.getMonth(),
  //     currentDate.getDate()
  //   );
  //   // Compare the dates
  //   return showDate >= currentDateOnly;
  // });
  // const header = upcomingShows.length > 0 ? "SEE JAM LIVE!" : `Booking soon!`;

  return (
    <Container fluid="sm" className={`${css.shows} mx-0 px-0 mt-4 mb-auto`}>
      <Card className="position-relative">
        <div className={css.calendars}>
          <div className={css.calendar1}>
            <Icon spriteName="icon-calendar" />
          </div>

          <div className={css.calendar2}>
            <Icon spriteName="icon-calendar" />
          </div>
          <div className={css.calendar3}>
            <Icon spriteName="icon-calendar" />
          </div>
          <div className={css.calendar4}>
            <Icon spriteName="icon-calendar" />
          </div>
        </div>
        <h2
          className={`mt-2 text-center fw-bold text-uppercase  ${css.heading}`}
        >
          {header}
        </h2>
        <div className="">
          {shows.length > 0 && (
            <h3 className="px-3 pt-1 mt-3 mb-2 h4 text-uppercase fw-bold">
              Upcoming SHOWS:
            </h3>
          )}
          <section className="px-2 pt-3 d-flex flex-column align-items-center">
            {shows.map((show, index) => (
              <Fragment key={index}>
                <div className="col-lg-8 d-flex justify-content-center mb-2">
                  <Card className="mb-2" style={{ border: "none"}}>
                    <Card.Img
                      variant="top"
                      src={show.flyer}
                      alt={show.alt}
                      className="max-height-img"
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        <u className="h3 fw-bold">{show.name}</u>{" "}
                        {/* Add underlined text */}
                      </Card.Title>
                      <Card.Text className="larger-text">
                        <p>
                          <strong>Show Date:</strong>{" "}
                          {show.date.toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Show Time:</strong> {show.time}
                        </p>
                        <p>
                          <strong>Venue:</strong> {show.venue}
                        </p>
                        <p>
                          <strong>Address:</strong> {show.address}
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer
                      className={`text-center border-0 pt-0 ${
                        darkMode ? "bg-black" : "bg-white"
                      }`}
                    >
                      <div className="mb-4 pb-2">
                        <CustomButton text="More Info" href={show.info} />
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              </Fragment>
            ))}
          </section>
          <h4 className="px-3 pt-1 mt-3 mb-1 h4 text-uppercase fw-bold">
            BE ON THE LOOKOUT:
          </h4>
          <section className="px-3 pt-2">
            <p className="p-0 mb-0">
              {` I am currently hard at work, meticulously scheduling and booking
  upcoming shows. I am passionate about live instrumental music and
  I'm eager to perform in venues where original music is truly
  appreciated. Please check back soon! I will be starting my live
  performances this Fall. While I'll primarily be performing locally
  in Jacksonville and St. Augustine, please don't hesitate to reach
  out if you'd like me to visit your town and play for you! Thank
  you once again for stopping by, and keep an eye out for updates on
  upcoming shows!`}
            </p>
          </section>
          <div className={css.gears}>
            <LoadingGears />
          </div>
        </div>
      </Card>
    </Container>
  );
}
