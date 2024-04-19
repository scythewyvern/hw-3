import Text from 'components/Text';

import Filters from './components/Filters';
import Search from './components/Search';
import ShipList from './components/ShipList';
import styles from './Ships.module.scss';

export default function ShipsPage() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text className={styles.title} view="title" weight="bold" tag="h1">
          SpaceX Ships
        </Text>
        <Search />
        <Filters />
      </div>

      <ShipList />
    </div>
  );
}
