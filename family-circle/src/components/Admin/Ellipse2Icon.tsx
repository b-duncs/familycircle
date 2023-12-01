import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 124 123' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.2089 40.4658C8.53807 28.5715 16.4318 18.3027 26.813 11.0607C37.1942 3.81865 49.5571 -0.0438085 62.2147 0.000374675C74.8722 0.0445578 87.2079 3.99323 97.5382 11.3075C107.869 18.6218 115.691 28.9455 119.937 40.8697'
      stroke='#838383'
    />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
