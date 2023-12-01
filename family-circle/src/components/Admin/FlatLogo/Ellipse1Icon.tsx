import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 246 246' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M238.582 165.068C229.924 188.857 214.136 209.395 193.374 223.879C172.612 238.363 147.886 246.088 122.571 245.999C97.2555 245.911 72.5843 238.014 51.9235 223.385C31.2628 208.756 15.619 188.109 7.12693 164.261'
      stroke='#838383'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
