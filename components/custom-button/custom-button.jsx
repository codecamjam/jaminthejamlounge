import css from "./custom-button.module.scss";

export default function CustomButton({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={[css.btn, css["btn--hero"], css["btn--animated"]].join(" ")}
    >
      <div className={css["bio-btn__content"]}>
        <span>{text}</span>
      </div>
    </a>
  );
}
