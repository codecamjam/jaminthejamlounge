import css from "./landingWords.module.scss";

export default function LandingWords({ position }) {
  return (
    <h2 className={`text-center fw-bold ${css.words} ${css[position]}`}>
      100% Live-Looping with JAM
    </h2>
  );
}
