import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.4062 17.1875C21.1523 17.1875 25 13.3398 25 8.59375C25 3.84766 21.1523 0 16.4062 0C11.6602 0 7.8125 3.84766 7.8125 8.59375C7.8125 9.50684 7.9541 10.3906 8.21777 11.2158L0.341797 19.0918C0.12207 19.3115 0 19.6094 0 19.9219V23.8281C0 24.4775 0.522461 25 1.17188 25H5.07812C5.72754 25 6.25 24.4775 6.25 23.8281V21.875H8.20312C8.85254 21.875 9.375 21.3525 9.375 20.7031V18.75H11.3281C11.6406 18.75 11.9385 18.6279 12.1582 18.4082L13.7842 16.7822C14.6094 17.0459 15.4932 17.1875 16.4062 17.1875ZM18.3594 4.6875C18.8774 4.6875 19.3742 4.89328 19.7404 5.25956C20.1067 5.62584 20.3125 6.12262 20.3125 6.64062C20.3125 7.15863 20.1067 7.65541 19.7404 8.02169C19.3742 8.38797 18.8774 8.59375 18.3594 8.59375C17.8414 8.59375 17.3446 8.38797 16.9783 8.02169C16.612 7.65541 16.4062 7.15863 16.4062 6.64062C16.4062 6.12262 16.612 5.62584 16.9783 5.25956C17.3446 4.89328 17.8414 4.6875 18.3594 4.6875Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };