import classNames from 'classnames';

import Loader from '../Loader';
import Text from '../Text';

import styles from './Button.module.scss';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

export default function Button({
  children,
  className,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.base, disabled && styles.disabled, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader size="s" className={styles.loader} />}
      <Text view="button" maxLines={1}>
        {children}
      </Text>
    </button>
  );
}
