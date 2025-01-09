import { format, parseISO } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const showsList = [
  {
    date: utcToZonedTime(parseISO("2024-06-15T00:00:00"), "America/New_York"),
    time: "4:00PM-6:30PM",
    name: "Green Room Brewing",
    venue: "Green Room Brewing",
    address: "228 3rd St N, Jacksonville Beach, FL 32250",
    flyer: "https://greenroombrewing.com/img/greenroomoutside-edit-min.jpg",
    info: "https://www.instagram.com/reel/C6e_K0Au2Mv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    alt: "Jam at Green Room Brewing for 13 Year Anniversary",
  },
  {
    date: utcToZonedTime(parseISO("2024-06-19T00:00:00"), "America/New_York"),
    time: "6:00PM - 8:00PM",
    name: "West King Wednesday",
    venue: "Graet Goods",
    address: "225 W. King Street, Saint Augustine, FL 32084",
    flyer: "/images/shows/graet.png",
    info: "https://www.facebook.com/graetgoods",
    alt: "Jam at Graet Goods for West King Wednesday",
  },
  {
    date: utcToZonedTime(parseISO("2025-02-23T00:00:00"), "America/New_York"),
    time: "6:00PM - 9:00PM",
    name: "Jam at BrewHound!",
    venue: "BrewHound Dog Park + Bar",
    address: "1848 Kings Cir S, Neptune Beach, FL 32266",
    flyer: "/images/jam-face.jpg",
    info: "https://www.brew-hound.com/",
    alt: "BrewHound Dog Park + Bar",
    bgColor: "white",
  },
  {
    date: utcToZonedTime(parseISO("2025-05-06T00:00:00"), "America/New_York"),
    time: "5:30PM - 8:00PM",
    name: "Jam at The Cummer!",
    venue: "Cummer Museum of Art & Gardens",
    address: "829 Riverside Ave, Jacksonville, FL 32204",
    flyer: "/images/jam-face.jpg",
    info: "https://www.cummermuseum.org/",
    alt: "Cummer Museum of Art & Gardens",
    bgColor: "white",
  },
];
