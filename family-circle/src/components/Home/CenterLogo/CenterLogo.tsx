import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CenterLogo.module.css';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse2?: ReactNode;
    ellipse3?: ReactNode;
  };
  text?: {
    familyCircle?: ReactNode;
  };
}
/* @figmaId 16:33 */
export const CenterLogo: FC<Props> = memo(function CenterLogo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.familyCircle != null ? (
        props.text?.familyCircle
      ) : (
        <div className={classes.familyCircle}>FamilyCircle</div>
      )}
      <div className={classes.ellipse2}>{props.swap?.ellipse2 || <Ellipse2Icon className={classes.icon} />}</div>
      <div className={classes.ellipse3}>{props.swap?.ellipse3 || <Ellipse3Icon className={classes.icon2} />}</div>
    </div>
  );
});
