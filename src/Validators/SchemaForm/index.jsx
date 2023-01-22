import * as yup from "yup";

const formSchema = yup.object().shape({
  amount: yup.string().required("Valor é obrigatório"),
  installments: yup.string().required("Número de parcelas é obrigatório"),
  mdr: yup.string().required("O percentual é obrigatório"),
});

export default formSchema;
