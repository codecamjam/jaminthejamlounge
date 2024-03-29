import { useAppContext } from "@/context";
import { Icon } from "@/components";
import { toggleDarkMode } from "@/utils";
import css from "./darkModeButton.module.scss";

export default function DarkModeButton() {
  const { doc, setDarkMode } = useAppContext();

  function clickHandler() {
    if (doc) {
      setDarkMode((prevDarkMode) => {
        const mode = !prevDarkMode;
        toggleDarkMode(doc, mode);
        return mode;
      });
    }
  }

  return (
    <div className={css.btn} onClick={clickHandler}>
      <Icon spriteName="icon-brightness-contrast" />
    </div>
  );
}
