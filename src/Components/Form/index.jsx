import { FormContainer } from "./style";
import { useState } from "react";

const FactoringForm = () => {
  const [value, setValue] = useState("");
  const [installments, setinstallments] = useState("");
  const [mdr, setMdr] = useState("");

  return (
    <FormContainer>
      <h2>Simule sua Antecipação</h2>

      <label htmlFor=''>Informe o valor da sua venda*</label>
      <input
        type='number'
        placeholder='R$1.000,00'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <label htmlFor=''>Em quantas parcelas*</label>
      <input
        type='number'
        placeholder='1'
        min={1}
        max={12}
        value={installments}
        onChange={(event) => setinstallments(event.target.value)}
      />

      <label htmlFor=''>Informe o percentual de MDR*</label>
      <input
        type='number'
        value={mdr}
        onChange={(event) => setMdr(event.target.value)}
      />
    </FormContainer>
  );
};

export default FactoringForm;
