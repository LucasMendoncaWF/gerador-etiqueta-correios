import { useEffect } from 'react';
import { Destinatario } from '@app/interface/Destinatario';

import EtiquetaImg from '../assets/etiqueta.png';
import { remetente } from './Remetente';

declare const JsBarcode: (id: string, text: string, info: {displayValue: boolean}) => void;

export default function Etiqueta({
  item
}: {item: Destinatario}) {

  const hash = item['Nome completo'] + item.CEP;

  const generateId= (str: string) => {
    return str.replace(/[^\w\s]/gi, '').replace(/ /g, '');
  };

  useEffect(() => {
    if(document.getElementById(generateId(hash))) {
      JsBarcode(`#${generateId(hash)}`, item.CEP.replace('-', ''), {displayValue : false, width: 3});
    }
  });

  return (
    <div className='tag'>
      <div className='dist'>
        <p>{item['Nome completo'].toLowerCase()}</p>
        <p className='street'>{item.Rua}, {item['Número']}, {item.Complemento}</p>
        <p>{item.Bairro}</p>
        <div className='d-flex'>
          <p className='cep'><strong>{item.CEP}</strong></p>
          <p>{item.Cidade}-{item.Estado}</p>
        </div>
      </div>

      <div className='obs'>
        <p>{item.Obs}</p>
      </div>

      {item['Nome Vizinho'] && <div className='vizinho'>
        <p>{item['Nome Vizinho']}</p>
      </div>}

      <div className='rem'>
        <p><strong>Remetente:</strong> {remetente.nome}</p>
        <p>{remetente.rua} {remetente.numero}</p>
        <p>{remetente.complemento}</p>
        <p>{remetente.bairro}</p>
        <div className='d-flex'>
          <p className='rem-cep'><strong>{remetente.cep}</strong></p>
          <p>{remetente.cidade}-{remetente.uf}</p>
        </div>
      </div>

      <div className='bar-code'>
        <svg  id={generateId(hash)}></svg>
      </div>
      <img src={EtiquetaImg} />
    </div>
  );
}