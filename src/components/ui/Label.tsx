import * as React from 'react';
import { cn } from '@/lib/utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label className={cn('block text-sm font-medium text-gray-700 px-2', className)} {...props}>
      {children}
    </label>
  );
};

export default Label;