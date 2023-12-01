import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Vector_Property1Default4 } from '../Vector_Property1Default4/Vector_Property1Default4.js';
import classes from './SaveButton_Property1Default.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 62:1433 */
export const SaveButton_Property1Default: FC<Props> = memo(function SaveButton_Property1Default(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle57}></div>
      <div className={classes.saveChanges}>Save Changes</div>
      <Vector_Property1Default4
        className={classes.vector}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
    </button>
  );
});
