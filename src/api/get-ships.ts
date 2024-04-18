import {
  type DocumentData,
  type Query,
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

export async function getShips(limitSize: number, search?: string) {
  const shipsRef = collection(db, 'ships');
  let q: Query<DocumentData, DocumentData>;

  if (search) {
    q = query(shipsRef, where('name', '==', search), limit(limitSize));
  } else {
    q = query(shipsRef, limit(limitSize));
  }

  const ships = await getDocs(q);

  return ships.docs.map((doc) => doc.data()) as Ship[];
}

export async function getShip(id: string) {
  const shipDocRef = doc(db, 'ships', id);

  return (await getDoc(shipDocRef)).data() as Ship;
}
