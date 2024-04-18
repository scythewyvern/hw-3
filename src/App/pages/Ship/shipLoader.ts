import { LoaderFunctionArgs } from 'react-router-dom';
import { getShip } from 'api/get-ships';

export async function shipLoader({ params }: LoaderFunctionArgs) {
  if (!params.id) throw new Response('Not found', { status: 404 });

  return { ship: await getShip(params.id) };
}
