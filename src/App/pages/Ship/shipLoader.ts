import { LoaderFunctionArgs, redirect } from 'react-router-dom';

import { getShip } from 'api/get-ships';

export async function shipLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) throw redirect('/');
  const ship = await getShip(params.id);

  // Рассмотреть возможность ответа 404, если корабль не существует.
  // тогда это должно быть обработано в ErrorBoundary
  if (!ship) throw redirect('/');

  return { ship };
}
