import css from "./hero.module.scss";

export default function Hero() {
  return (
    <div className="mx-auto">
      <h1 className={` ${css.hero} jam-header`}>
        JAM IN THE JAM LOUNGE
      </h1>
    </div>
  );
}
