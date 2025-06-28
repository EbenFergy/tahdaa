/* eslint-disable @next/next/no-img-element */
// components/Icon.tsx
import React from 'react';

type IconProps = {
  src: string;
  alt: string;
  className?: string;
};

const Icon = ({ src, alt, className = '' }: IconProps) => {
  return <img src={src} alt={alt} className={`object-contain ${className}`} />;
};

export default Icon;
