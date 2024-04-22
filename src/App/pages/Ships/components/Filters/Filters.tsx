import { useLoaderData, useSubmit } from 'react-router-dom';

import CheckBox from 'components/CheckBox';
import MultiDropdown from 'components/MultiDropdown';
import { useExistingSearchParams } from 'utils/useExistingSearchParams';

import { ShipsLoaderData } from '../../shipsLoader';

import styles from './Filters.module.scss';

export default function Filters() {
  const { shipTypes, activeOnly } = useLoaderData() as ShipsLoaderData;
  const submit = useSubmit();
  const existingSearchParams = useExistingSearchParams();

  const shipSelectOptions = shipTypes?.map((type) => ({
    key: type,
    value: type,
  }));

  return (
    <div className={styles.root}>
      <MultiDropdown
        value={shipSelectOptions || []}
        onChange={(options) => {
          submit(
            {
              ...existingSearchParams(['type']),
              type: options.map(({ key }) => key),
            },
            { replace: true }
          );
        }}
        options={[
          { key: 'Tug', value: 'Tug' },
          { key: 'Cargo', value: 'Cargo' },
          { key: 'Barge', value: 'Barge' },
          { key: 'High Speed Craft', value: 'High Speed Craft' },
        ]}
        getTitle={(options) =>
          options.length > 0 ? options.map(({ value }) => value).join(', ') : 'All types'
        }
      />

      <div className={styles.activeOnly}>
        <label htmlFor="active-only">Show only active ships</label>
        <CheckBox
          id="active-only"
          onChange={(checked) => {
            submit(
              {
                ...existingSearchParams(['active']),
                activeOnly: checked ? 'true' : '',
              },
              { replace: true }
            );
          }}
          checked={activeOnly === 'true'}
        />
      </div>
    </div>
  );
}
