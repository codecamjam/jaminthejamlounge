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
];
