import GA4React from 'ga-4-react';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import './config/i18n';
import {
  DYNAMIC_LOCAL_ROUTE,
  SIMPLE_LOCAL_ROUTE,
  WORD_CLOUD_LOCAL_ROUTE,
} from './config/routes';
import DynamicLocalPage from './pages/DynamicLocalPage';
import MainPage from './pages/MainPage';
import SimpleLocalPage from './pages/SimpleLocalPage';
import WordCloudLocalPage from './pages/WordCloudLocalPage';
import theme from './theme';

const { REACT_APP_GA = '' } = process.env;

const ga4react = new GA4React(
  REACT_APP_GA,
  {
    /* ga custom config, optional */
  },
  [
    /* additional code, optional */
  ],
  5000 /* timeout, optional, defaults is 5000 */,
);

ga4react.initialize().then(
  (ga4) => {
    ga4.pageview('path');
    ga4.gtag('event', 'pageview', 'path'); // or your custom gtag event
  },
  (err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  },
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path={SIMPLE_LOCAL_ROUTE} element={<SimpleLocalPage />} />
          <Route path={DYNAMIC_LOCAL_ROUTE} element={<DynamicLocalPage />} />
          <Route
            path={WORD_CLOUD_LOCAL_ROUTE}
            element={<WordCloudLocalPage />}
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
