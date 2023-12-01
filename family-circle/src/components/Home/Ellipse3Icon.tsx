import { memo, SVGProps } from 'react';

const Ellipse3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.610674 84.2457C3.14226 62.0262 13.4313 41.4121 29.6665 26.0324C45.9016 10.6527 67.042 1.4935 89.3659 0.167216C111.69 -1.15907 133.766 5.43261 151.708 18.7818C169.65 32.131 182.307 51.3818 187.452 73.1453'
      stroke='#C6C6C6'
      strokeWidth={1.5}
    />
  </svg>
);

const Memo = memo(Ellipse3Icon);
export { Memo as Ellipse3Icon };
