import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const showsList = [
  {
    date: utcToZonedTime(parseISO("2024-07-13T00:00:00"), "America/New_York"),
    time: "7:00PM-2:00AM",
    name: "Beats and Brews!",
    venue: "ShantyTown Pub",
    address: "22 W 6th Street, 32206 Jacksonville FL",
    flyer: "/images/jam-face.jpg",
    info: "https://allevents.in/jacksonville/beats-and-brews-july-edition-saturday-7-13-24-presented-by-milky-von/10000924146977487",
    alt: "Beats and Brews July 13 at ShantyTown Pub",
  },
];
