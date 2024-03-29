import { Icon } from "@/components";
import css from "./instrument.module.scss";

export default function Instrument({ instrument }) {
  return (
    <div className={css.instrument}>
      <Icon spriteName={instrument} />
    </div>
  );
}
