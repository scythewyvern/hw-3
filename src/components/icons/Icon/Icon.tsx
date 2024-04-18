import classNames from 'classnames';

import styles from './Icon.module.scss';

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
};

export default function Icon({
  children,
  color,
  className,
  width = 24,
  height = 24,
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={classNames(styles.base, className, color && styles[color])}
    >
      {children}
    </svg>
  );
}
