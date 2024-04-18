import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { getShip } from 'api/get-ships';

export async function shipLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) throw redirect('/');
  const ship = await getShip(params.id);

  // Note: consider throw 404 response if ship doesn't exist
  // then it should be handled in error boundary
  if (!ship) throw redirect('/');

  return { ship };
}
