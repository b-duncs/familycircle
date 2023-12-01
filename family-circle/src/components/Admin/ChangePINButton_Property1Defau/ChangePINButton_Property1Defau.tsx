import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { KeyIcon } from '../KeyIcon/KeyIcon.js';
import classes from './ChangePINButton_Property1Defau.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 62:1459 */
export const ChangePINButton_Property1Defau: FC<Props> = memo(function ChangePINButton_Property1Defau(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle57}></div>
      <div className={classes.updatePIN}>Update PIN</div>
      <KeyIcon
        className={classes.keyIcon}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </button>
  );
});
