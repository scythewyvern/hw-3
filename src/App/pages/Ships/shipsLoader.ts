import { LoaderFunctionArgs } from 'react-router-dom';

import { getShips } from 'api/get-ships';

const LIMIT = 9;

export async function shipsLoader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';

  const shipsWithExtra = await getShips(parseInt(page) * LIMIT + 1, search);
  const hasNextPage = shipsWithExtra.length > LIMIT * parseInt(page);
  const ships = shipsWithExtra.slice(0, LIMIT * parseInt(page));

  // Artificial delay
  // await new Promise((resolve) => setTimeout(resolve, 500));

  return { ships, search, page, hasNextPage };
}
