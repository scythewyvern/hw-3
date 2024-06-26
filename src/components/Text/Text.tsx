import classNames from 'classnames';
import * as React from 'react';

import styles from './Text.module.scss';

export type TextProps = {
  /** Дополнительный класс */
  className?: string;
  /** Стиль отображения */
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  /** Html-тег */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  /** Начертание шрифта */
  weight?: 'normal' | 'medium' | 'bold';
  /** Контент */
  children: React.ReactNode;
  /** Цвет */
  color?: 'primary' | 'secondary' | 'accent';
  /** Максимальное кол-во строк */
  maxLines?: number;
};

export default function Text({
  children,
  className,
  tag: Tag = 'p',
  view = 'p-16',
  weight = 'normal',
  color,
  maxLines,
}: TextProps) {
  return (
    <Tag
      className={classNames(
        styles.base,
        styles[view],
        styles[weight],
        color && styles[color],
        maxLines && styles.maxLines,
        className
      )}
      style={{ '--max-lines': maxLines } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
