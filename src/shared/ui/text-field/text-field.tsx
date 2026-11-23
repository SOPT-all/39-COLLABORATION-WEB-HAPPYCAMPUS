import { type ComponentProps, useId } from 'react';

import * as styles from './text-field.css';

interface TextFieldProps extends Omit<ComponentProps<'input'>, 'className'> {
  helperText?: string;
  error?: boolean;
}

const TextField = ({ helperText, error = false, ...props }: TextFieldProps) => {
  const helperTextId = useId();

  return (
    <div className={styles.textFieldContainer}>
      <input
        type="text"
        {...props}
        className={styles.textInput({ error })}
        aria-invalid={error}
        aria-describedby={helperText ? helperTextId : undefined}
      />
      {helperText && (
        <p id={helperTextId} className={styles.helperText({ error })}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextField;
