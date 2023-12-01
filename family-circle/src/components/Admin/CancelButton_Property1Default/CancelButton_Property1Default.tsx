import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CancelIcon } from '../CancelIcon/CancelIcon.js';
import classes from './CancelButton_Property1Default.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 62:1444 */
export const CancelButton_Property1Default: FC<Props> = memo(function CancelButton_Property1Default(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle57}></div>
      <div className={classes.cancel}>Cancel</div>
      <CancelIcon
        className={classes.cancelIcon}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </button>
  );
});
