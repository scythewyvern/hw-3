import classNames from 'classnames';

import CheckIcon from '../icons/CheckIcon';

import styles from './CheckBox.module.scss';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
};

export default function CheckBox({
  onChange,
  className,
  disabled = false,
  checked = false,
  ...props
}: CheckBoxProps) {
  return (
    <label className={classNames(styles.base, className)}>
      <CheckIcon className={styles.icon} width={40} height={40} />
      <input
        className={styles.input}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        checked={checked}
        disabled={disabled}
        {...props}
      />
    </label>
  );
}
