import type { ComponentProps } from 'react';

import { button, type ButtonVariants } from './button.css';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'className'>, ButtonVariants {}

const Button = ({ variant, type = 'button', ...props }: ButtonProps) => {
  return <button type={type} className={button({ variant })} {...props} />;
};

export default Button;
