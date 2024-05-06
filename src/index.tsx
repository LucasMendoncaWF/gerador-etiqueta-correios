import React from 'react';
import { createRoot } from 'react-dom/client';

import GeradorDeEtiqueta from './Generator/TabelaDeEtiquetas';

import './index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <div>
    <GeradorDeEtiqueta />
  </div>
);
