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
import theme from './theme';

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
          <Route path={WORD_CLOUD_LOCAL_ROUTE} element={<DynamicLocalPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
