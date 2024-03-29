import { Icon } from "@/components";
import css from "./cardTitle.module.scss";

export default function CardTitle({ children, element, className }) {
  return (
    <>
      {element === "h2" ? (
        <h2 className={`fw-bold text-center mb-4 ${css.cardTitle}`}>
          {children}
        </h2>
      ) : (
        <h3 className={`fw-bold text-center mb-4 ${css.cardTitle}`}>
          {children}
        </h3>
      )}
    </>
  );
}
