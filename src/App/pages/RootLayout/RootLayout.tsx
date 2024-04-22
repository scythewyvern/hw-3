import { Outlet, ScrollRestoration } from 'react-router-dom';
import styles from './Root.module.scss';

export default function RootLayout() {
  return (
    <div className={styles.root}>
      <Outlet />
      <ScrollRestoration getKey={({ pathname }) => pathname} />
    </div>
  );
}
