import { useState } from 'react';
import * as XLSX from 'xlsx';

import { Destinatario } from '../interface/Destinatario';

interface Props {
  updateList: (list: Destinatario[]) => void;
}

export default function XlsParaJsonConversor({
  updateList
}: Props ){
  const [file, setFile] = useState<File | null>(null);

  const handleConvert = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if(!e.target) return;
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet) as Destinatario[];
        updateList(json);
      };
      reader.readAsBinaryString(file);
    }
  };
  
  return (
    <div className='d-flex justify-center convert-area'>
      <div className='convert-buttons d-flex justify-center'>
        <input type="file" accept=".xls,.xlsx" onChange={e => setFile(e.target.files ? e.target.files[0] : null)} />
        <button onClick={handleConvert}>Converter</button>
        <button onClick={() => window.print()}>Imprimir</button>
      </div>
    </div>
  );
}