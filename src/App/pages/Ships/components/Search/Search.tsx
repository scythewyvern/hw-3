import { useState, useEffect } from 'react';
import { useLoaderData, useSubmit, Form } from 'react-router-dom';

import Input from 'components/Input';
import { useDebounce } from 'utils/useDebounce';
import { useExistingSearchParams } from 'utils/useExistingSearchParams';

import type { ShipsLoaderData } from '../../shipsLoader';

export default function Search() {
  const { search } = useLoaderData() as ShipsLoaderData;
  const [shipSearch, setShipSearch] = useState(search);
  const submit = useSubmit();
  const debouncedShipSearch = useDebounce(shipSearch);
  const existingSearchParams = useExistingSearchParams();

  useEffect(() => {
    if (debouncedShipSearch === search) return;

    const isFirstSearch = search === null;

    submit(
      { ...existingSearchParams(['search']), search: debouncedShipSearch },
      { replace: !isFirstSearch }
    );
  }, [debouncedShipSearch, existingSearchParams, search, submit]);

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
