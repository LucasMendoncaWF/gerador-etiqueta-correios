export interface Destinatario {
  Bairro: string;
  CEP: string;
  Cidade: string;
  Complemento: string;
  'Nome Completo': string;
  'Número': string;
  Rua: string;
  Estado: string; //UF
  Print: 'Não' | ''; //Permite remover da lista de impressão
}