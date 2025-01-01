import Icon from "../icon";
import css from "./media-links.module.scss";

export default function MediaLinks() {
  return (
    <div className={css.logos}>
      {/* <a
        className={`${css.link} ${css.hide}`}
        href="https://www.twitch.tv/jaminthejamlounge"
        title="Twitch"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-twitch" />
      </a> */}
        <a
        className={css.link}
        href="https://www.instagram.com/jaminthejamlounge/"
        title="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-instagram" />
      </a>

   
      <a
        className={css.link}
        href="https://www.youtube.com/@jaminthejamlounge"
        title="YouTube"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-youtube" />
      </a>
    
      <a
        className={css.link}
        href="https://www.tiktok.com/@jaminthejamlounge"
        title="TikTok"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-tiktok" />
      </a>

      {/* <a
        className={`${css.link} ${css.hide}`}
        href="https://jaminthejamlounge.bandcamp.com/"
        title="Bandcamp"
        target="_blank"
        rel="noreferrer"
      >
        <Icon spriteName="icon-bandcamp" />
      </a> */}
    </div>
  );
}
