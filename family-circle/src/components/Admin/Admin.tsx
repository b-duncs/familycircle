import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Admin.module.css';
import { CancelButton_Property1Default } from './CancelButton_Property1Default/CancelButton_Property1Default.js';
import { ChangePINButton_Property1Defau } from './ChangePINButton_Property1Defau/ChangePINButton_Property1Defau.js';
import { EditContactsCards_Property1Def } from './EditContactsCards_Property1Def/EditContactsCards_Property1Def.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { FlatLogo } from './FlatLogo/FlatLogo.js';
import { SaveButton_Property1Default } from './SaveButton_Property1Default/SaveButton_Property1Default.js';

interface Props {
  className?: string;
  hide?: {
    rectangle30?: boolean;
    benSbanotto?: boolean;
    grandson?: boolean;
    vector?: boolean;
    vector2?: boolean;
  };
}
/* @figmaId 64:2941 */
export const Admin: FC<Props> = memo(function Admin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background1}></div>
      <EditContactsCards_Property1Def
        className={classes.editContactsCards}
        classes={{
          rectangle30: classes.rectangle30,
          rectangle302: classes.rectangle302,
          rectangle303: classes.rectangle303,
        }}
      />
      <FlatLogo
        className={classes.flatLogo}
        classes={{ ellipse1: classes.ellipse1 }}
        swap={{
          ellipse1: (
            <div className={classes.ellipse1}>
              <Ellipse1Icon className={classes.icon} />
            </div>
          ),
          ellipse2: <Ellipse2Icon className={classes.icon2} />,
        }}
        text={{
          familyCircle: <div className={classes.familyCircle}>FamilyCircle</div>,
        }}
      />
      <SaveButton_Property1Default className={classes.saveButton} />
      <ChangePINButton_Property1Defau className={classes.changePINButton} />
      <CancelButton_Property1Default className={classes.cancelButton} />
    </div>
  );
});
