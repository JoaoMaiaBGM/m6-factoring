import { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  IFactoringData,
  IFactoringProps,
  IFactoringProviderData,
} from "../Providers/Types";
import Api from "../Services/api";

const Context = createContext<IFactoringProviderData>(
  {} as IFactoringProviderData
);

function Provider({ children }: IFactoringProps) {
  const [values, setValues] = useState(Object);
  const [loading, setLoading] = useState(false);

  async function handleFactoring(factoringData: IFactoringData) {
    setLoading(true);

    const removingEmptyDaysList = Object.values(factoringData);

    factoringData.days = String(factoringData.days)
      .split(",")
      .map((day) => {
        return Number(day.trim());
      });

    if (
      factoringData.days.length === 1 ||
      removingEmptyDaysList[3] === "" ||
      factoringData.days === null
    ) {
      delete factoringData.days;
    }
    await Api.post("", factoringData)
      .then((res) => {
        setValues(res.data);
        if (res.status === 200) {
          setLoading(false);
          toast.success("Cálculo feito com sucesso!");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Dados inválidos!");
      });
  }

  function makeList(values: any) {
    const valuesKeys = Object.keys(values);

    if (!valuesKeys.includes("0")) {
      return valuesKeys.map((valueKey, index) => {
        const days = valueKey === "1" ? "Amanhã" : `Em ${valueKey} dias`;
        const amount = Number(values[valueKey]).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        return (
          <div key={index} className='list-item'>
            <h3>{days}</h3>
            <p>{amount}</p>
          </div>
        );
      });
    }
  }

  return (
    <Context.Provider value={{ handleFactoring, values, loading, makeList }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
