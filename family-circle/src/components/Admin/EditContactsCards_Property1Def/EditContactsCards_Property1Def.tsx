import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Component1_Property1Default } from '../Component1_Property1Default/Component1_Property1Default.js';
import { Vector_Property1Default3 } from '../Vector_Property1Default3/Vector_Property1Default3.js';
import classes from './EditContactsCards_Property1Def.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle30?: string;
    rectangle302?: string;
    rectangle303?: string;
    root?: string;
  };
  hide?: {
    rectangle30?: boolean;
    benSbanotto?: boolean;
    grandson?: boolean;
    vector?: boolean;
    vector2?: boolean;
  };
}
/* @figmaId 62:1502 */
export const EditContactsCards_Property1Def: FC<Props> = memo(function EditContactsCards_Property1Def(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Component1_Property1Default
        className={classes.component1}
        classes={{ rectangle30: `${props.classes?.rectangle30 || ''} ${classes.rectangle30}` }}
        text={{
          benSbanotto: <div className={classes.benSbanotto}>Ben S.</div>,
        }}
      />
      <Component1_Property1Default
        className={classes.component4}
        hide={{
          rectangle30: true,
          benSbanotto: true,
          grandson: true,
          vector: true,
          vector2: true,
        }}
      />
      <Component1_Property1Default
        className={classes.component3}
        classes={{ rectangle30: `${props.classes?.rectangle302 || ''} ${classes.rectangle302}` }}
        text={{
          benSbanotto: <div className={classes.benSbanotto2}>Baylee D.</div>,
          grandson: <div className={classes.grandson}>daughter</div>,
        }}
      />
      <Component1_Property1Default
        className={classes.component2}
        classes={{ rectangle30: `${props.classes?.rectangle303 || ''} ${classes.rectangle303}` }}
        text={{
          benSbanotto: <div className={classes.benSbanotto3}>Alex L.</div>,
          grandson: <div className={classes.grandson2}>favorite grandson</div>,
        }}
      />
      <Vector_Property1Default3 className={classes.vector} />
      <div className={classes.addNewContact}>Add new Contact</div>
    </div>
  );
});
