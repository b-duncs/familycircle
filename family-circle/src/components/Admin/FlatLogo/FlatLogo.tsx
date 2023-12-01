import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import classes from './FlatLogo.module.css';

interface Props {
  className?: string;
  classes?: {
    ellipse1?: string;
    root?: string;
  };
  swap?: {
    ellipse1?: ReactNode;
    ellipse2?: ReactNode;
  };
  text?: {
    familyCircle?: ReactNode;
  };
}
/* @figmaId 54:993 */
export const FlatLogo: FC<Props> = memo(function FlatLogo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.familyCircle != null ? (
        props.text?.familyCircle
      ) : (
        <div className={classes.familyCircle}>FamilyCircle</div>
      )}
      <div className={`${props.classes?.ellipse1 || ''} ${classes.ellipse1}`}>
        {props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}
      </div>
      <div className={classes.ellipse2}>{props.swap?.ellipse2 || <Ellipse2Icon className={classes.icon2} />}</div>
    </div>
  );
});
