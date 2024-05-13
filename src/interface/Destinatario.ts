export interface Destinatario {
  Bairro: string;
  CEP: string;
  Cidade: string;
  Complemento: string;
  'Nome completo': string;
  'Número': string;
  Rua: string;
  Estado: string; //UF
  Print?: 'Não' | ''; //Permite remover da lista de impressão
  Obs?: string;
  'Nome Vizinho'?: string; //Permite entregar ao vizinho;
  CPF: string;
}