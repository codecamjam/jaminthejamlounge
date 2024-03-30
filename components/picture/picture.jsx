/* eslint-disable @next/next/no-img-element */
import { useAppContext } from "@/context";
import {publicPath} from '@/constants'
import css from "./picture.module.scss";

export default function Picture({ img, alt, invert }) {
  const { darkMode } = useAppContext();

  const imgSrc = `${publicPath}/images/${img}`;

  const imgStyle = {
    maxWidth: invert ? "100%" : "70%", // Set maximum width to 100% of container
    height: "auto", // Allow automatic height calculation
    ...(darkMode && invert ? { filter: "invert(100%)" } : {}),
  };

  return (
    <div className='d-flex justify-content-center'>
      <img
        src={imgSrc}
        alt={alt}
        style={imgStyle}
        className={invert ? '' : css.circle} // Apply any additional styles here
        width={850}
        height={503}
      />
    </div>
  );
}
