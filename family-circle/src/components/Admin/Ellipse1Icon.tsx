import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 124 123' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M119.791 82.5342C115.462 94.4285 107.568 104.697 97.187 111.939C86.8058 119.181 74.4429 123.044 61.7853 123C49.1278 122.955 36.7921 119.007 26.4618 111.692C16.1314 104.378 8.30949 94.0545 4.06347 82.1303'
      stroke='#838383'
    />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
