import { FormContainer } from "./style";

const FactoringForm = () => {
  return (
    <FormContainer>
      <h2>Simule sua Antecipação</h2>

      <label htmlFor=''>Informe o valor da sua venda*</label>
      <input type='number' placeholder='R$1.000,00' />

      <label htmlFor=''>Em quantas parcelas*</label>
      <input type='number' placeholder='1 parcela' />

      <label htmlFor=''>Informe o percentual de MDR*</label>
      <input type='number' />
    </FormContainer>
  );
};

export default FactoringForm;
