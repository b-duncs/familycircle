import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 380 380' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M377.394 221.359C370.012 265.472 347.305 305.567 313.269 334.585C279.233 363.603 236.052 379.683 191.326 379.995C146.601 380.308 103.199 364.832 68.7617 336.292C34.3243 307.752 11.059 267.978 3.06184 223.972'
      stroke='#838383'
      strokeWidth={3}
    />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
