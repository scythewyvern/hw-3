import classNames from 'classnames';

import Text from '../Text';

import styles from './Card.module.scss';

export type CardProps = {
  /** Дополнительный classname */
  className?: string;
  /** URL изображения */
  image: string;
  /** Альтернативное изображение */
  alt: string;
  /** Слот над заголовком */
  captionSlot?: React.ReactNode;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Описание карточки */
  subtitle: React.ReactNode;
  /** Содержимое карточки (футер/боковая часть), может быть пустым */
  contentSlot?: React.ReactNode;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
  /** Слот для действия */
  actionSlot?: React.ReactNode;
};

export default function Card({
  alt,
  image,
  title,
  subtitle,
  className,
  onClick,
  actionSlot,
  captionSlot,
  contentSlot,
}: CardProps) {
  return (
    <article onClick={onClick} className={classNames(styles.base, className)}>
      <img className={styles.picture} src={image} alt={alt} />

      <div className={styles.content}>
        <div className={styles.body}>
          {captionSlot && (
            <Text view="p-14" color="secondary">
              {captionSlot}
            </Text>
          )}
          <Text view="p-20" weight="medium" maxLines={1}>
            {title}
          </Text>
          <Text view="p-16" color="secondary" maxLines={3}>
            {subtitle}
          </Text>
        </div>

        <div className={styles.footer}>
          {contentSlot && (
            <Text view="p-18" weight="bold">
              {contentSlot}
            </Text>
          )}
          {actionSlot && actionSlot}
        </div>
      </div>
    </article>
  );
}
