import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ContactCard1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse1?: ReactNode;
  };
  text?: {
    benS?: ReactNode;
    grandson?: ReactNode;
  };
}
/* @figmaId 16:52 */
export const ContactCard1: FC<Props> = memo(function ContactCard1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle12}></div>
      {props.text?.benS != null ? props.text?.benS : <div className={classes.benS}>Ben S.</div>}
      {props.text?.grandson != null ? props.text?.grandson : <div className={classes.grandson}>grandson</div>}
      <div className={classes.ellipse1}>{props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}</div>
    </div>
  );
});
