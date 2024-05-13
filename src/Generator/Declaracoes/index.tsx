import { useState } from 'react';

import { Destinatario } from '../../interface/Destinatario';

import Declaracao from './Declaracao';
import XlsParaJsonConversor from '../XlsParaJsonConversor';
import { Conteudo } from '@app/interface/Conteudo';
import { Data } from '@app/interface/Data';

export default function TabelaDeDeclaracoes () {

  const [list, setList] = useState<Destinatario[]>([]);
  const [content, setContent] = useState<Conteudo[]>([{nome: '', quantidade: '0', valor: ''}]);
  const [data, setData] = useState<Data>({dia: '', mes: '', ano: ''});

  const onAdd = () => {
    if(content.length === 6) return;
    const newContent = [...content];
    newContent.push({nome: '', quantidade: '0', valor: ''});
    setContent(newContent);
  }

  const onRemove = () => {
    if(content.length === 1) return;
    const newContent = [...content];
    newContent.pop();
    setContent(newContent);
  }
  

  const updateConteudo = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = [...content];
    const index = parseInt(e.target.id.split('-')[1]);
    newContent[index][key] = e.target.value;
    setContent(newContent);
  }

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <div>
      <XlsParaJsonConversor updateList={setList} />
      <div className='hide-print'>
        
        <div className='content-criacao'>
            <div className='conteudo-inputs d-flex'>
              <div>
                <div><label>dia</label></div>
                <input type='text' onChange={changeData} placeholder='dia' id="dia"/>
              </div>
              <div>
                <div><label>Mês</label></div>
                <input type='text' onChange={changeData} placeholder='mes' id="mes"/>
              </div>
              <div>
                <div><label>Ano</label></div>
                <input type='text' onChange={changeData} placeholder='ano' id="ano"/>
              </div>
          </div>
        </div>
        <div className='content-criacao'>
          {content?.map((item, index) =>
            <div className='conteudo-inputs d-flex' key={index}>
              <div>
                <div><label>Nome</label></div>
                <input type='text' onChange={(e) => updateConteudo('nome', e)} value={item.nome} placeholder='nome' id={`nome-${index}`} />
              </div>
              <div>
                <div><label>Quantidade</label></div>
                <input type='number'  onChange={(e) => updateConteudo('quantidade', e)}   value={item.quantidade} placeholder='quantidade' id={`quantidade-${index}`}  />
              </div>
              <div>
                <div><label>Valor</label></div>
                <input type='text'  onChange={(e) => updateConteudo('valor', e)}   value={item.valor} placeholder='valor' id={`valor-${index}`} />
              </div>
            </div>
          )}
          <div className='d-flex content-botoes'>
            <button className='adicionar' onClick={onAdd}>+ Adicionar</button>
            <button className='remover' onClick={onRemove}>- Remover</button>
          </div>
      </div>
      </div>
      <table>
        <tbody>
          {list.map((item, index) => 
            <tr key={index + '-' + 'tr'}>
              <td>
                <Declaracao data={data} conteudo={content} item={item} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}