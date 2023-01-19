import { FormContainer } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/AuthContext";

const FactoringForm = () => {
  const { handleFactoring } = useContext(Context);

  const { register, handleSubmit } = useForm();

  return (
    <FormContainer onSubmit={handleSubmit(handleFactoring)}>
      <h2>Simule sua Antecipação</h2>

      <label htmlFor=''>Informe o valor da sua venda*</label>
      <input
        type='number'
        id='amount'
        placeholder='R$1.000,00'
        {...register("amount")}
      />
      <label htmlFor=''>Em quantas parcelas*</label>
      <input
        type='number'
        placeholder='1'
        id='installments'
        min={1}
        max={12}
        {...register("installments")}
      />
      <label htmlFor=''>Informe o percentual de MDR*</label>
      <input type='number' id='mdr' {...register("mdr")} />

      <button type='submit'>Calcular</button>
    </FormContainer>
  );
};

export default FactoringForm;
