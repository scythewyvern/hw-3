import classNames from 'classnames';

import { forwardRef } from 'react';

import styles from './Input.module.scss';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, type = 'text', ...props }, ref) => {
    return (
      <div className={classNames(styles.root, props.className)}>
        <input
          className={props.className}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          ref={ref}
          {...props}
        />
        {afterSlot && afterSlot}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
