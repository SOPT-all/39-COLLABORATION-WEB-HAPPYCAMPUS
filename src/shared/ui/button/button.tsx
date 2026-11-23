import type { ComponentProps, ReactNode } from 'react';

import { button, type ButtonVariants } from './button.css';

type ButtonContentProps =
  | { icon?: never; count?: never }
  | { icon: ReactNode; count?: never }
  | { icon?: never; count: number };

export type ButtonProps = Omit<ComponentProps<'button'>, 'className'> &
  Omit<ButtonVariants, 'hasCount'> &
  ButtonContentProps;

const Button = ({
  variant,
  icon,
  count,
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  const hasCount = count !== undefined;

  return (
    <button type={type} className={button({ variant, hasCount })} {...props}>
      {icon}
      {children}
      {hasCount && <span>{count}</span>}
    </button>
  );
};

export default Button;
