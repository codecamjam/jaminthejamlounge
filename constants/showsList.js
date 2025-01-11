import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const showsList = [
  {
    date: utcToZonedTime(parseISO("2025-02-23T00:00:00"), "America/New_York"),
    time: "6:00PM - 9:00PM",
    name: "Jam at BrewHound!",
    venue: "BrewHound Dog Park + Bar",
    address: "1848 Kings Cir S, Neptune Beach, FL 32266",
    flyer: "/images/shows/brewhound.png",
    info: "https://www.brew-hound.com/",
    alt: "BrewHound Dog Park + Bar",
  },
  {
    date: utcToZonedTime(parseISO("2025-05-06T00:00:00"), "America/New_York"),
    time: "5:30PM - 8:00PM",
    name: "Jam at The Cummer!",
    venue: "Cummer Museum of Art & Gardens",
    address: "829 Riverside Ave, Jacksonville, FL 32204",
    flyer: "/images/shows/cummer.png",
    info: "https://www.cummermuseum.org/",
    alt: "Cummer Museum of Art & Gardens",
  },
  {
    date: utcToZonedTime(parseISO("2025-01-18T00:00:00"), "America/New_York"),
    time: "7:30PM - 9:00PM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
  },
  {
    date: utcToZonedTime(parseISO("2025-02-08T00:00:00"), "America/New_York"),
    time: "10PM - 12:00AM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
    invert: true
  },
  {
    date: utcToZonedTime(parseISO("2025-03-08T00:00:00"), "America/New_York"),
    time: "10PM - 12:00AM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
  },
];
