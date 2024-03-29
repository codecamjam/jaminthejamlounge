import { Icon } from '@/components'
import css from './instruments.module.scss';

export default function instruments() {
  return (
    <div className={css.icons}>
      <div className={[css.icon__bongos, css.icon].join(' ')}>
        <Icon spriteName="icon-bongos" />
      </div>
      <div className={[css.icon__flute, css.icon].join(' ')}>
        <Icon spriteName="icon-flute" />
      </div>
      <div className={[css.icon__xylophone, css.icon].join(' ')}>
        <Icon spriteName="icon-xylophone" />
      </div>
      <div className={[css.icon__rockstar, css.icon].join(' ')}>
        <Icon spriteName="icon-rockstar" />
      </div>
      <div className={[css.icon__handsonic, css.icon].join(' ')}>
        {' '}
        <Icon spriteName="icon-handsonic" />
      </div>
      <div className={[css.icon__synth, css.icon].join(' ')}>
        {' '}
        <Icon spriteName="icon-synth" />
      </div>
      <div className={[css.icon__shakers, css.icon].join(' ')}>
        <Icon spriteName="icon-shakers" />
      </div>
    </div>
  );
}
