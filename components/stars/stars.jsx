import Icon from '../icon';
import css from './stars.module.scss';

export default function Stars() {
  return (
    <div className={css.stars}>
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
      <Icon spriteName="icon-star-empty" />
    </div>
  );
};
