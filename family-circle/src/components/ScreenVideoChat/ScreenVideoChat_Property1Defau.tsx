import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { EndCallButton_Property1Default } from './EndCallButton/EndCallButton_Property1Default.js';
import classes from './ScreenVideoChat_Property1Defau.module.css';
import { Vector_Property1Default2 } from './Vector_Property1Default2/Vector_Property1Default2.js';
import { Vector_Property1Default3 } from './Vector_Property1Default3/Vector_Property1Default3.js';
import { Vector_Property1Default } from './Vector_Property1Default/Vector_Property1Default.js';
import { VideoCallBoxIcon } from './VideoCallBoxIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 35:209 */
export const ScreenVideoChat_Property1Defau: FC<Props> = memo(function ScreenVideoChat_Property1Defau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background2}></div>
      <div className={classes.volumePanel}>
        <div className={classes.rectangle18}></div>
        <div className={classes.rectangle19}></div>
        <Vector_Property1Default className={classes.vector} />
        <Vector_Property1Default2 className={classes.vector2} />
        <Vector_Property1Default3 className={classes.vector3} />
      </div>
      <div className={classes.videoCallBox}>
        <VideoCallBoxIcon className={classes.icon} />
      </div>
      <EndCallButton_Property1Default className={classes.endCallButton} />
      <div className={classes.youReSpeakingToYourGrandsonBen}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>You’re Speaking to your </span>
          <span className={classes.label2}>grandson</span>
          <span className={classes.label3}>, </span>
          <span className={classes.label4}>Ben Sbanotto</span>
          <span className={classes.label5}>. </span>
        </p>
      </div>
    </div>
  );
});
