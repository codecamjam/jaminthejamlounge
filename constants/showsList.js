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
    date: utcToZonedTime(parseISO("2025-01-17T00:00:00"), "America/New_York"),
    time: "8:00PM - 11:00PM",
    name: "Jam at Bedlam!",
    venue: "Bedlam Live in Mayport",
    address: "660 Mayport Rd, Atlantic Beach, FL 32233",
    flyer: "/images/jam-face.jpg",
    info: "https://bedlamlive.com/",
    alt: "Bedlam Live in Mayport",
  },
  {
    date: utcToZonedTime(parseISO("2025-01-18T00:00:00"), "America/New_York"),
    time: "7:30PM - 9:00PM",
    name: "Jam at Balis Park!",
    venue: "San Marco Balls, Beats, & Eats",
    address: "1999 San Marco Blvd, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.sanmarcomerchants.com/community/san-marco-square-clean-up-5xngp-6z6dp-alljh-x65pd-xy5lz-jf7lp",
    alt: "San Marco Balls Beats & Eats",
  },
  {
    date: utcToZonedTime(parseISO("2025-02-15T00:00:00"), "America/New_York"),
    time: "10PM - 12:00AM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
    invert: true,
  },
  {
    date: utcToZonedTime(parseISO("2025-03-07T00:00:00"), "America/New_York"),
    time: "10PM - 12:00AM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
  },
  {
    date: utcToZonedTime(parseISO("2025-03-29T00:00:00"), "America/New_York"),
    time: "10PM - 12:00AM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
    invert: true,
  },
  {
    date: utcToZonedTime(parseISO("2025-04-18T00:00:00"), "America/New_York"),
    time: "10PM - 12:00AM",
    name: "Jam at Kava & Company!",
    venue: "Kava & Company - San Marco",
    address: "1224 Kings Ave, Jacksonville, FL 32207",
    flyer: "/images/shows/kava.png",
    info: "https://www.kavaandcompany.com/",
    alt: "Kava & Company - San Marco",
    invert: true,
  },
  {
    date: utcToZonedTime(parseISO("2025-04-04T00:00:00"), "America/New_York"),
    time: "7PM - 9PM",
    name: "Jam at Back Bar",
    venue: "Back Bar at Be-In",
    address: "20 Seminole Road, Atlantic Beach, FL",
    flyer: "/images/jam-face.jpg",
    alt: "Back Bar at Be-In",
    info: "https://www.instagram.com/thebackbar__/",
  },
];
