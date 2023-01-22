import { FormContainer } from "./style";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "../../Validators/SchemaForm";

const FactoringForm = () => {
  const { handleFactoring } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <FormContainer onSubmit={handleSubmit(handleFactoring)}>
      <h2>Simule sua Antecipação</h2>
      <div>
        <label htmlFor='amount'>Informe o valor da sua venda*</label>
        <input
          type='number'
          id='amount'
          min={1000}
          placeholder='R$1.000,00'
          {...register("amount")}
        />
        <p>{errors.amount?.message}</p>
      </div>
      <div>
        <label htmlFor='installments'>Em quantas parcelas*</label>
        <input
          type='number'
          placeholder='1'
          id='installments'
          min={1}
          max={12}
          {...register("installments")}
        />
        <span>Máximo de 12 parcelas</span>
        <p>{errors.installments?.message}</p>
      </div>
      <div>
        <label htmlFor='mdr'>Informe o percentual de MDR*</label>
        <input type='number' id='mdr' {...register("mdr")} />
        <p>{errors.mdr?.message}</p>

        <label htmlFor='days'>Se preferir, informe outro período</label>
        <input type='text' id='days' {...register("days")} />
        <span>Exemplo: 30,60,90</span>
      </div>
      <button type='submit'>Calcular</button>
    </FormContainer>
  );
};

export default FactoringForm;
