import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Vector_Property1Default.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    vector?: boolean;
  };
}
/* @figmaId 62:1472 */
export const Vector_Property1Default: FC<Props> = memo(function Vector_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.vector && (
        <div className={classes.vector}>
          <VectorIcon className={classes.icon} />
        </div>
      )}
    </div>
  );
});
