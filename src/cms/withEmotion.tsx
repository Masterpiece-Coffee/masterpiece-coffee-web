import React from 'react';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import weakMemoize from '@emotion/weak-memoize';
import { PageContainer } from '../components/Layout';

const memoizedCreateCacheWithContainer = weakMemoize(container => {
  let newCache = createCache({ container });
  return newCache;
});

export default Component => props => {
  const iframe = document.querySelector('#nc-root iframe');
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
      <PageContainer>
        <Component {...props} />
      </PageContainer>
    </CacheProvider>
  );
};
