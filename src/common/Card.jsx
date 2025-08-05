import React from 'react';

export const Card = ({
  children,
  className = '',
  padding = 'md',
  shadow = 'md',
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div className={`bg-white rounded-xl ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`}>
      {children}
    </div>
  );
};