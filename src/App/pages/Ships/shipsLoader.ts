import { LoaderFunctionArgs } from 'react-router-dom';

import { getShips } from 'api/get-ships';

const LIMIT = 9;

export type ShipsLoaderData = Awaited<ReturnType<typeof shipsLoader>>;

export async function shipsLoader({ request }: LoaderFunctionArgs) {
  const { searchParams } = new URL(request.url);

  const search = searchParams.get('search') || '';
  const page = searchParams.get('page') || '1';
  const activeOnly = searchParams.get('activeOnly');
  const shipTypes = searchParams.get('type')?.split(',').filter(Boolean);

  const shipsWithExtra = await getShips({
    limitSize: parseInt(page) * LIMIT + 1,
    search,
    activeOnly,
    shipTypes,
  });

  const hasNextPage = shipsWithExtra.length > LIMIT * parseInt(page);
  const ships = shipsWithExtra.slice(0, LIMIT * parseInt(page));

  return { ships, search, page, hasNextPage, shipTypes, activeOnly };
}
