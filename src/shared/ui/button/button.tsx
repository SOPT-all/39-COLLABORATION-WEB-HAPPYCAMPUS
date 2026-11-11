import type { ComponentProps } from 'react';

import { button, type ButtonVariants } from './button.css';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'className'>, ButtonVariants {}

const Button = ({ variant, size, type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} className={button({ variant, size })} {...props} />
  );
};

export default Button;
