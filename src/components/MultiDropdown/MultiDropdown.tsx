import classNames from 'classnames';
import * as React from 'react';

import { useClickOutside } from 'utils/useClickOutside';

import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon';

import styles from './MultiDropdown.module.scss';

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown = ({
  className,
  options,
  value,
  onChange,
  disabled,
  getTitle,
}: MultiDropdownProps) => {
  const $dropdown = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Option[]>(value);
  const [query, setQuery] = React.useState('');

  const title = selected?.length ? getTitle(selected) : '';
  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(query.toLowerCase())
  );

  useClickOutside($dropdown, () => {
    setIsOpen(false);
    setQuery('');
  });

  const handleOptionSelect = (option: Option, isSelected: boolean) => {
    if (!isSelected) {
      setSelected([...selected, option]);
      onChange([...selected, option]);
    } else {
      const newSelected = selected.filter(({ key }) => key !== option.key);
      setSelected(newSelected);
      onChange(newSelected);
    }
  };

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
    setQuery('');
  };

  return (
    <div className={classNames(styles.root, className)} ref={$dropdown}>
      <Input
        placeholder={getTitle(selected)}
        value={isOpen ? query : title}
        onChange={setQuery}
        afterSlot={
          <button
            className={styles.trigger}
            onClick={handleTriggerClick}
            disabled={disabled}
          >
            <ArrowDownIcon color="secondary" />
          </button>
        }
        onClick={() => setIsOpen(true)}
        disabled={disabled}
      />

      {isOpen && !disabled && (
        <div className={styles.options}>
          {filteredOptions.map((option) => {
            const isSelected = !!selected.find(({ key }) => key === option.key);
            return (
              <div
                className={classNames(styles.option, isSelected && styles.selected)}
                key={option.key}
                onClick={() => handleOptionSelect(option, isSelected)}
              >
                {option.value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
