/* eslint-disable @next/next/no-img-element */
// components/Icon.tsx
import React from 'react';

type IconProps = {
  path: string;
  alt: string;
  className?: string;
};

const Icon = ({ path, alt, className = '' }: IconProps) => {
  return <img src={path} alt={alt} className={`object-contain ${className}`} />;
};

export default Icon;
