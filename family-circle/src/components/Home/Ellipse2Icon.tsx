import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 190 190' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M188.697 110.68C185.006 132.736 173.652 152.783 156.635 167.292C139.617 181.801 118.026 189.842 95.6632 189.998C73.3005 190.154 51.5996 182.416 34.3809 168.146C17.1621 153.876 5.52952 133.989 1.53092 111.986'
      stroke='#C6C6C6'
      strokeWidth={1.5}
    />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
