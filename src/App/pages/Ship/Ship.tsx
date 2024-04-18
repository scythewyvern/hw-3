import { Fragment } from 'react/jsx-runtime';
import { useLoaderData, useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Text from 'components/Text';

import { createShipDescription } from 'utils/createShipDescription';
import { omit } from 'utils/omit';

import { shipLoader } from './shipLoader';
import styles from './Ship.module.scss';

type LoaderData = Awaited<ReturnType<typeof shipLoader>>;

export default function ShipPage() {
  const { ship } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Button
          className={styles.back}
          onClick={() => (history.length > 2 ? navigate(-1) : navigate('/'))}
        >
          Back to list
        </Button>

        <img className={styles.image} src={ship.image} alt={ship.name} />

        <Text view="title" tag="h1">
          {ship.name}
        </Text>

        <Text className={styles.description} color="secondary" view="p-18" tag="p">
          {createShipDescription(ship)}
        </Text>
      </div>

      <div className={styles.right}>
        <Text view="p-20" weight="bold" tag="h2">
          Ship Info
        </Text>

        <dl className={styles.info}>
          {Object.entries(
            omit(ship, ['id', 'link', 'image', 'active', 'launches', 'name'])
          ).map(([key, value]) => (
            <Fragment key={key}>
              <dt>{key}</dt>
              <dd>{value ?? '---'}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}
