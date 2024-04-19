import { Link, useLoaderData } from 'react-router-dom';

import Card from 'components/Card';
import { createShipDescription } from 'utils/createShipDescription';

import type { ShipsLoaderData } from '../../shipsLoader';
import LoadMore from '../LoadMore';
import styles from './ShipList.module.scss';

export default function ShipList() {
  const { ships } = useLoaderData() as ShipsLoaderData;

  return (
    <div className={styles.ships}>
      {ships.length === 0 && <p className={styles.noShips}>No ships found</p>}
      {ships.map((ship) => (
        <Link to={`/ships/${ship.id}`} key={ship.id}>
          <Card
            alt={ship.name}
            image={ship.image || ''}
            title={ship.name}
            subtitle={createShipDescription(ship)}
            captionSlot={ship.roles.join(', ')}
            contentSlot={ship.active ? 'Active' : 'Inactive'}
          />
        </Link>
      ))}

      <LoadMore />
    </div>
  );
}
