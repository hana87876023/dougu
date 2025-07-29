import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'font-nunito font-semibold transition-all duration-300 ease-in-out';
  
  const variants = {
    primary: 'bg-gradient-to-r from-forest-green to-warm-orange text-white hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm rounded-xl',
    medium: 'px-6 py-3 text-base rounded-2xl',
    large: 'px-8 py-4 text-lg rounded-3xl',
  };
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;