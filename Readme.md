## Como usar o gerador

Comece instalando as dependencias:
``` npm i ```

Após acabar:
``` npm start ```

Voce deve remover o 
``` "-model" ```

do nome do arquivo
```Remetente-model.tsx```

e preencher esse arquivo de acordo com seus dados


### Após isso é preparar o arquivo .xls para a conversão

Deve possuir essas colunas:

```
  interface Destinatario {
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
```

### Agora é só selecionar seu arquivo, converter e imprimir!