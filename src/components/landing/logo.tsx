import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>MindFlow Psychology Logo</title>
      <path d="M12 2a10 10 0 0 0-3.91 19.4" />
      <path d="M12 22a10 10 0 0 0 3.91-19.4" />
      <path d="M7 12a5 5 0 0 1 5-5" />
      <path d="M12 17a5 5 0 0 1 5-5" />
    </svg>
  );
}
