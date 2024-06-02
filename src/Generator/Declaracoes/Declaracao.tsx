import { Destinatario } from '@app/interface/Destinatario';

import conteudoImg from '../../assets/conteudo.png';
import { remetente } from '../Remetente';

import './Declaracao.scss';
import { Conteudo } from '@app/interface/Conteudo';
import { Data } from '@app/interface/Data';


export default function Declaracao({
  item,
  conteudo,
  data,
}: {item: Destinatario, conteudo: Conteudo[], data: Data}) {

  return (
    <div className='declaracao'>
      <div className='destinatario'>
        <div className='nome'>{item['Nome completo']}</div>
        <div className='endereco'>{item.Rua} {item['Número']} {item.Complemento}</div>
        <div className='d-flex cidade-linha'>
          <div className='cidade'>{item.Cidade}</div>
          <div className='UF'>{item.Estado}</div>
        </div>
        <div className='d-flex'>
          <div className='cep'>{item.CEP}</div>
          <div className='cpf'>{item.CPF}</div>
        </div>
      </div>

      <div className='remetente'>
      <div className='nome'>{remetente.nome}</div>
        <div className='endereco'>{remetente.rua} {remetente.numero} {remetente.complemento}</div>
        <div className='d-flex cidade-linha'>
          <div className='cidade'>{remetente.cidade}</div>
          <div className='UF'>{remetente.uf}</div>
        </div>
        <div className='d-flex'>
          <div className='cep'>{remetente.cep}</div>
          <div className='cpf'>{remetente.cpfcnpj}</div>
        </div>
      </div>

      <div className='conteudo-area'>
        {conteudo.map(conteudoItem =>
          <div className='conteudo d-flex'>
            <div className='item'>{conteudoItem.nome}</div>
            <div className='quantidade'>{conteudoItem.quantidade}</div>
            <div className='valor'>R${conteudoItem.valor}</div>
          </div>
        )}
        <div className='total'>
          <div className='quantidade'>{conteudo.reduce((conteudoItem, a) => conteudoItem + parseInt(a.quantidade || '0'), 0)}</div>
          <div className='valor'>R${conteudo.reduce((conteudoItem, a) => conteudoItem + parseFloat(a.valor || '0'), 0)}</div>
        </div>
      </div>

      
      <div className='data d-flex'>
        <div className='dia'>{data.dia}</div>
        <div className='mes'>{data.mes}</div>
        <div className='ano'>{data.ano}</div>
      </div>

      <img src={conteudoImg} />
    </div>
  );
}