import { IcCheck } from '@shared/assets/icons';

import * as styles from './checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
}

const Checkbox = ({ checked, onChange, ariaLabel }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-label={ariaLabel}
      />
      <span className={styles.box}>
        <IcCheck width={16} height={16} />
      </span>
    </label>
  );
};

export default Checkbox;
