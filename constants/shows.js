import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const shows = [
  {
    date: utcToZonedTime(parseISO("2023-09-16T00:00:00"), "America/New_York"), // Replace "America/New_York" with your desired time zone
    time: "7:00PM - 2:00AM",
    name: "Beats and Brews",
    venue: "Shanty Town Pub",
    address: "22 W 6th St, Jacksonville, FL 32206",
    flyer: "/images/shows/beats-brews-9-16.jpg",
    info: "https://www.facebook.com/events/656764579733862/?ti=ls",
    alt: "Beats and Brews 9/16/2023",
  },
  {
    date: utcToZonedTime(parseISO("2023-09-20T00:00:00"), "America/New_York"), // Replace "America/New_York" with your desired time zone
    time: "9:00PM-12:00AM",
    name: "Singer-Songwriter Spotlight",
    venue: "Rain Dogs",
    address: "1045 Park St, Jacksonville, FL 32204",
    flyer: "/images/shows/raindogs-9-20.jpg",
    info: "https://www.facebook.com/raindogsjax/",
    alt: "Singer-Songwriter Spotlight 9/20/2023",
  },
  // Add more show objects here
];
