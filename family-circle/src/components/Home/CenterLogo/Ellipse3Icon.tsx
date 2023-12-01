import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 380 380' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.22135 168.491C6.28453 124.052 26.8626 82.8241 59.333 52.0648C91.8033 21.3054 134.084 2.987 178.732 0.334433C223.38 -2.31813 267.532 10.8652 303.416 37.5636C339.3 64.262 364.615 102.764 374.904 146.291'
      stroke='#838383'
      strokeWidth={3}
    />
  </svg>
);

const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
