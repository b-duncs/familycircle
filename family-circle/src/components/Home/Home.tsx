import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CenterLogo } from './CenterLogo/CenterLogo.js';
import { ContactCard1 } from './ContactCard1/ContactCard1.js';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon3 } from './Ellipse1Icon3.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import classes from './Home.module.css';
import { SettingsButtonIcon } from './SettingsButtonIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 64:2213 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.background1}></div>
      <div className={classes.settingsButton}>
        <SettingsButtonIcon className={classes.icon6} />
      </div>
      <CenterLogo
        className={classes.centerLogo}
        swap={{
          ellipse2: <Ellipse2Icon className={classes.icon} />,
          ellipse3: <Ellipse3Icon className={classes.icon2} />,
        }}
        text={{
          familyCircle: <div className={classes.familyCircle}>FamilyCircle</div>,
        }}
      />
      <ContactCard1
        className={classes.contactCard1}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon3} />,
        }}
      />
      <ContactCard1
        className={classes.contactCard2}
        swap={{
          ellipse1: <Ellipse1Icon2 className={classes.icon4} />,
        }}
        text={{
          benS: <div className={classes.benS}>Alex L.</div>,
          grandson: <div className={classes.grandson}>favorite grandson</div>,
        }}
      />
      <ContactCard1
        className={classes.contactCard3}
        swap={{
          ellipse1: <Ellipse1Icon3 className={classes.icon5} />,
        }}
        text={{
          benS: <div className={classes.benS2}>Baylee D.</div>,
          grandson: <div className={classes.grandson2}>daughter</div>,
        }}
      />
    </div>
  );
});
