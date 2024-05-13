import React from 'react';
import { createRoot } from 'react-dom/client';


import './index.scss';
import TabelaDeEtiquetas from './Generator/Etiquetas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TabelaDeDeclaracoes from './Generator/Declaracoes';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <BrowserRouter>
  <div className='nav hide-print'>
    <a href="/">Etiquetador</a>
    <a href="/conteudo">Declaração de conteúdo</a>
  </div>
  <Routes>
    <Route path="/" element={<TabelaDeEtiquetas />}/>
    <Route path="/conteudo" element={<TabelaDeDeclaracoes />} />
  </Routes>
</BrowserRouter>
);
