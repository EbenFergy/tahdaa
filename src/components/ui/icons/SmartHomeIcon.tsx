import React from 'react';

const SmartHomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="52"
      height="50"
      viewBox="0 0 52 50"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      className="hover:stroke-[#005ED3] stroke-[#111827]"
    >
      <path
        d="M4.45312 29.3867C14.6251 29.5387 23.0131 37.928 23.7998 48.7387M4.45312 36.052C10.8971 36.2027 16.2491 41.624 16.9798 48.7387M4.45312 42.7467C7.22379 42.9 9.56379 45.36 10.1545 48.7387M46.6131 21.9493V44.896C46.6144 45.3434 46.5272 45.7867 46.3565 46.2003C46.1859 46.6139 45.9353 46.9898 45.6189 47.3062C45.3026 47.6227 44.9269 47.8735 44.5133 48.0442C44.0998 48.215 43.6566 48.3024 43.2091 48.3013H28.4705"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 25.6693L25.6667 1L35.5813 10.9173V3.50667H42.508V17.8413L50.3333 25.6693"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SmartHomeIcon;
