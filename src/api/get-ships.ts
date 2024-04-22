import {
  collection,
  getDocs,
  limit,
  query,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { Ship } from 'types/ship';
import { db } from './firebase';

type GetShipsParams = {
  limitSize: number;
  search?: string;
  activeOnly?: string | null;
  shipTypes?: string[];
};

export async function getShips({
  limitSize,
  search,
  activeOnly,
  shipTypes,
}: GetShipsParams) {
  const shipsRef = collection(db, 'ships');
  const constraints = [];

  if (activeOnly === 'true') {
    constraints.push(where('active', '==', activeOnly === 'true'));
  }

  if (shipTypes && shipTypes.length > 0 && shipTypes.every(Boolean)) {
    constraints.push(where('type', 'in', shipTypes));
  }

  if (search) {
    constraints.push(where('name', '==', search));
  }

  if (limitSize) {
    constraints.push(limit(limitSize));
  }

  const q = query(shipsRef, ...constraints);
  const ships = await getDocs(q);

  return ships.docs.map((doc) => doc.data()) as Ship[];
}

export async function getShip(id: string) {
  const shipDocRef = doc(db, 'ships', id);

  return (await getDoc(shipDocRef)).data() as Ship | undefined;
}
