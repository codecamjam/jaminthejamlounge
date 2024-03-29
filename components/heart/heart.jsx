import Icon from "../icon";
import css from "./heart.module.scss";
export default function heart() {
  return (
    <div className={css.heart}>
      <Icon spriteName="icon-heart" />
    </div>
  );
}
