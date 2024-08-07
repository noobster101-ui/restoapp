import * as React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

const Input: React.FC<InputProps> = ({ icon: Icon, className, ...props }) => {
  return (
    <div className="relative px-2">
      {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
      <input
        className={cn(
          'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500',
          Icon ? 'pl-10' : '',
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;