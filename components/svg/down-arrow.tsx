import React from 'react';

type Props = {
  color: string;
};

const DownArrow = ({ color }: Props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.23529 2C8.23529 2.94118 8.23529 13.2941 8.23529 13.2941M8.23529 13.2941L12.4706 9.05882M8.23529 13.2941L4 9.05882"
        stroke={color}
        strokeWidth="1.88235"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default DownArrow;
