import { Icon } from "@/components";
import css from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.logos}>
        <a
          href="https://www.twitch.tv/jaminthejamlounge"
          title="Twitch"
          target="_blank"
          rel="noreferrer"
          className={`${css.hide}`}
        >
          <Icon spriteName="icon-twitch" />
        </a>
        <a
          href="https://jaminthejamlounge.bandcamp.com/"
          title="Bandcamp"
          target="_blank"
          rel="noreferrer"
          className={`${css.hide}`}
        >
          <Icon spriteName="icon-bandcamp" />
        </a>
        <a
          href="https://www.youtube.com/@jaminthejamlounge"
          title="YouTube"
          target="_blank"
          rel="noreferrer"
        >
          <Icon spriteName="icon-youtube2" />
        </a>
        <a
          href="https://www.instagram.com/jaminthejamlounge/"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <Icon spriteName="icon-instagram" />
        </a>

        <a
          href="https://www.tiktok.com/@jaminthejamlounge"
          title="TikTok"
          target="_blank"
          rel="noreferrer"
        >
          <Icon spriteName="icon-tiktok" />
        </a>
      </div>
      <p className={css.copyright}>Jam in the Jam Lounge</p>
      <p className={css.jam} title="JAM">
        果酱
      </p>
    </footer>
  );
}
