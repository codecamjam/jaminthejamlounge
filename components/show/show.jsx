/* eslint-disable @next/next/no-img-element */
export default function Show({
  date,
  time,
  name,
  venue,
  address,
  flyer,
  info,
  alt,
}) {
  return (
    <div>
      <h2>Show Date: {date.toLocaleDateString()}</h2>
      <p>Show Time: {time}</p>
      <p>Show Name: {name}</p>
      <p>Venue: {venue}</p>
      <p>Address: {address}</p>
      <p>More Info: {info}</p>
      <img src={flyer} alt={alt} />
    </div>
  );
}
