import { getCustomStyle } from './utils';
import css from './icon.module.scss';

export default function Icon({ spriteName, variant }) {
  const customStyle = getCustomStyle(spriteName);

  let spritePath = `/images/sprite.svg#${spriteName}`;

  return (
    <svg
      className={[
        css['icon'],
        css[`icon--${customStyle}`],
        css[`icon--${variant}`],
      ].join(' ')}
    >
      <use xlinkHref={spritePath}></use>
    </svg>
  );
};
