import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../Services/api";

const Context = createContext();

function Provider({ children }) {
  const [values, setValues] = useState(Object);
  const [loading, setLoading] = useState(false);

  async function handleFactoring(factoringData) {
    setLoading(true);

    factoringData.days = String(factoringData.days)
      .split(",")
      .map((day) => {
        return Number(day.trim());
      });

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

  function makeList(values) {
    const valuesKeys = Object.keys(values);

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

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  return (
    <Context.Provider
      value={{ handleFactoring, values, handleReset, loading, makeList }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
