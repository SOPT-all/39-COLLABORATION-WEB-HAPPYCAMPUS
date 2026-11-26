import type { ReactNode } from 'react';

import { IcCheck, IcNull } from '@shared/assets/icons';

import * as styles from './checkbox.css';

interface BaseCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

interface TextCheckboxProps extends BaseCheckboxProps {
  children: ReactNode;
  ariaLabel?: never;
}

interface IconCheckboxProps extends BaseCheckboxProps {
  children?: never;
  ariaLabel: string;
}

type CheckboxProps = TextCheckboxProps | IconCheckboxProps;

const Checkbox = ({
  checked,
  onChange,
  disabled = false,
  ariaLabel,
  children,
}: CheckboxProps) => {
  return (
    <label className={styles.label({ hasText: !!children, disabled })}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        aria-label={ariaLabel}
      />
      <span className={styles.box}>
        {disabled ? (
          <IcNull width={18} height={18} />
        ) : (
          <IcCheck width={16} height={18} />
        )}
      </span>
      {children && <span className={styles.text}>{children}</span>}
    </label>
  );
};

export default Checkbox;
