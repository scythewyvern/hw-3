import classNames from 'classnames';

import styles from './Loader.module.scss';

export type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
};

export default function Loader({ size = 'l', className }: LoaderProps) {
  return (
    <span className={classNames(styles.base, styles[size], className)}>
      <svg viewBox="0 0 16 16" fill="none">
        <path
          d="M9.34967 13.8462C6.12089 14.5916 2.89917 12.5785 2.15374 9.3497C1.40832 6.12092 3.42148 2.89919 6.65026 2.15377C9.87904 1.40835 13.1008 3.42151 13.8462 6.65028L15.7949 6.20038C14.801 1.89534 10.5054 -0.788866 6.20036 0.20503C1.89532 1.19893 -0.788892 5.49456 0.205004 9.7996C1.1989 14.1046 5.49454 16.7888 9.79957 15.795L9.34967 13.8462Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}
