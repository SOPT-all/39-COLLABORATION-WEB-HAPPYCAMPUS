import type { ReactNode } from 'react';

import { IcCheck } from '@shared/assets/icons';

import * as styles from './checkbox.css';

interface BaseCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
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
