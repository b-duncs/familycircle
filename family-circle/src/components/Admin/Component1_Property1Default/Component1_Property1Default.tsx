import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Vector_Property1Default2 } from '../Vector_Property1Default2/Vector_Property1Default2.js';
import { Vector_Property1Default } from '../Vector_Property1Default/Vector_Property1Default.js';
import classes from './Component1_Property1Default.module.css';
import { Rectangle57Icon } from './Rectangle57Icon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle30?: string;
    root?: string;
  };
  hide?: {
    rectangle30?: boolean;
    benSbanotto?: boolean;
    grandson?: boolean;
    vector?: boolean;
    vector2?: boolean;
  };
  text?: {
    benSbanotto?: ReactNode;
    grandson?: ReactNode;
  };
}
/* @figmaId 62:1482 */
export const Component1_Property1Default: FC<Props> = memo(function Component1_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle57}>
        <Rectangle57Icon className={classes.icon} />
      </div>
      {!props.hide?.rectangle30 && <div className={`${props.classes?.rectangle30 || ''} ${classes.rectangle30}`}></div>}
      {!props.hide?.benSbanotto &&
        (props.text?.benSbanotto != null ? (
          props.text?.benSbanotto
        ) : (
          <div className={classes.benSbanotto}>Ben Sbanotto</div>
        ))}
      {!props.hide?.grandson &&
        (props.text?.grandson != null ? props.text?.grandson : <div className={classes.grandson}>grandson</div>)}
      <Vector_Property1Default
        className={classes.vector}
        hide={{
          vector: props.hide?.vector,
        }}
      />
      {!props.hide?.vector2 && <Vector_Property1Default2 className={classes.vector2} />}
    </div>
  );
});
