import type { ReactNode } from 'react';

import { IcCheck } from '@shared/assets/icons';

import * as styles from './checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
  children?: ReactNode;
}

const Checkbox = ({
  checked,
  onChange,
  ariaLabel,
  children,
}: CheckboxProps) => {
  return (
    <label className={styles.label({ hasText: !!children })}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-label={ariaLabel}
      />
      <span className={styles.box}>
        <IcCheck width={16} height={18} />
      </span>
      {children && <span className={styles.text}>{children}</span>}
    </label>
  );
};

export default Checkbox;
