import { memo, SVGProps } from 'react';

const VideoCallBoxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 719 593' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={719} height={593} fill='#D9D9D9' stroke='black' />
    <path
      d='M326.516 221.44C320.734 218.294 313.469 218.19 307.57 221.129C301.672 224.068 298 229.599 298 235.615V357.313C298 363.329 301.672 368.86 307.57 371.799C313.469 374.738 320.734 374.599 326.516 371.488L439.016 310.639C444.602 307.631 448 302.272 448 296.464C448 290.656 444.602 285.331 439.016 282.289L326.516 221.44Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(VideoCallBoxIcon);
export { Memo as VideoCallBoxIcon };
