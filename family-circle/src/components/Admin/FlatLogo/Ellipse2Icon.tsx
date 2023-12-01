import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 246 246' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.41781 80.9315C16.0761 57.1429 31.8637 36.6053 52.6261 22.1213C73.3884 7.63729 98.1142 -0.087617 123.429 0.00074935C148.744 0.0891157 173.416 7.98645 194.076 22.6151C214.737 37.2437 230.381 57.891 238.873 81.7395'
      stroke='#838383'
      strokeWidth={2}
    />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
