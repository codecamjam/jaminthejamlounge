import css from './head-shot.module.scss';

export default function HeadShot({ mobile }) {
  return (
    <>
      {mobile ? (
        <div className={css.headshotSmol}>
          <div className={css.img}></div>
        </div>
      ) : (
        <div className={css.headshotLg}>
          <div className={css.img}></div>
        </div>
      )}
    </>
  );
}
