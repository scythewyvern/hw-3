import { useRef } from 'react';
import { Form, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import Loader from 'components/Loader';
import { useExistingSearchParams } from 'utils/useExistingSearchParams';

import type { ShipsLoaderData } from '../../shipsLoader';
import styles from './LoadMore.module.scss';

export default function LoadMore() {
  const { hasNextPage, page } = useLoaderData() as ShipsLoaderData;
  const submit = useSubmit();
  const navigation = useNavigation();
  const observer = useRef<IntersectionObserver | null>(null);
  const existingSearchParams = useExistingSearchParams();

  const isLoading = navigation.state === 'loading';

  const loaderRef = (formEl: HTMLFormElement) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        submit(
          {
            ...existingSearchParams(['page']),
            page: (parseInt(page) + 1).toString(),
          },
          { replace: true }
        );
      }
    });

    if (formEl) observer.current.observe(formEl);
  };

  return (
    <Form className={styles.loader} ref={loaderRef}>
      {isLoading && <Loader />}
      <input type="hidden" name="page" value={parseInt(page) + 1} />
    </Form>
  );
}
