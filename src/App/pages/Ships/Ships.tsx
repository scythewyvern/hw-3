import { useEffect, useRef, useState } from 'react';
import { Form, Link, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import Card from 'components/Card';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Text from 'components/Text';

import { createShipDescription } from 'utils/createShipDescription';
import { useDebounce } from 'utils/useDebounce';

import { shipsLoader } from './shipsLoader';
import styles from './Ships.module.scss';

type LoaderData = Awaited<ReturnType<typeof shipsLoader>>;

export default function ShipsPage() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Text view="title" weight="bold">
          SpaceX Ships
        </Text>
        <Search />
      </div>

      <ShipList />
    </div>
  );
}

function Search() {
  const { search, page } = useLoaderData() as LoaderData;
  const [shipSearch, setShipSearch] = useState(search);
  const submit = useSubmit();
  const debouncedShipSearch = useDebounce(shipSearch);

  useEffect(() => {
    if (debouncedShipSearch === search) return;

    const isFirstSearch = search === null;
    submit({ search: debouncedShipSearch, page }, { replace: !isFirstSearch });
  }, [debouncedShipSearch, page, search, submit]);

  return (
    <Form role="search" autoComplete="off">
      <Input
        onChange={setShipSearch}
        value={shipSearch}
        id="search"
        type="search"
        name="search"
        placeholder="Search by ship name..."
      />
    </Form>
  );
}

function ShipList() {
  const { ships } = useLoaderData() as LoaderData;

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

function LoadMore() {
  const { hasNextPage, page } = useLoaderData() as LoaderData;
  const submit = useSubmit();
  const navigation = useNavigation();
  const observer = useRef<IntersectionObserver | null>(null);

  const isLoading = navigation.state === 'loading';

  const loaderRef = (el: HTMLDivElement) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        submit({ page: +page + 1 }, { replace: true });
      }
    });

    if (el) observer.current.observe(el);
  };

  return (
    <div className={styles.loader} ref={loaderRef}>
      {isLoading && <Loader />}
    </div>
  );
}
