import Icon from "../icon";
import Stars from "../stars";
import css from "./aboutCard.module.scss";

export default function AboutCard({
  title,
  icon,
  list,
  text,
  instrument,
  children,
}) {
  return (
    <div className={css.card}>
      <div className={css.header}>
        <Icon spriteName={icon} />
        <h3 className={`fw-bold ${css.title}`}>{title}</h3>
      </div>

      <div className={css.body}>
        <ul className={css.list}>
          {list.map((item, idx) => (
            <li key={idx} className={css.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={css.instrument}>{children}</div>
      </div>
      <div className={css.footer}>
        <blockquote className={css.quote}>&ldquo;{text}&rdquo;</blockquote>
        <Stars />
      </div>
    </div>
  );
}
