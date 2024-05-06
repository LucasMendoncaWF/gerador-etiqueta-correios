import { useState } from 'react';

import { Destinatario } from '../interface/Destinatario';

import Etiqueta from './Etiqueta';
import XlsParaJsonConversor from './XlsParaJsonConversor';

export default function TabelaDeEtiquetas () {

  const [list, setList] = useState<Destinatario[]>([]);

  const getListRows = () => {
    const rows = [];
    const filteredList = list.filter(item => item.Print !== 'Não');
    for(let i = 0; i < filteredList.length; i+=2){
      if(!filteredList[i+1]) {
        rows.push([filteredList[i]]);
      } else {
        rows.push([filteredList[i], filteredList[i+1]]);
      }
    }
    return rows;
  };

  const rows = getListRows();
  
  return (
    <div>
      <XlsParaJsonConversor updateList={setList} />
      <table>
        <tbody>
          {rows.map((row, index) => 
            <tr key={index + '-' + 'tr'}>
              {row.map((item, index) => 
                <td key={index + '-' + 'td'}>
                  <Etiqueta item={item} />
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}