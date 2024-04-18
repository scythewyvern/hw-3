import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// NOTE:
const firebaseConfig = {
  apiKey: 'AIzaSyAjVVgkj2n1VLUIlZAzuteiLS5lAfIdoAk',
  authDomain: 'kts-hm-3.firebaseapp.com',
  projectId: 'kts-hm-3',
  storageBucket: 'kts-hm-3.appspot.com',
  messagingSenderId: '723468195408',
  appId: '1:723468195408:web:f858647c44c5b4a7316355',
};

export const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp);
