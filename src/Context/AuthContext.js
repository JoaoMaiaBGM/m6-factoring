import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Api from "../Services/api";

const Context = createContext();

function Provider({ children }) {
  const [values, setValues] = useState(Object);

  async function handleFactoring(factoringData) {
    const data = await Api.post(
      "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
      factoringData
    )
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (data) {
      toast.success("Cálculo feito com sucesso!");
    }
  }

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  return (
    <Context.Provider value={{ handleFactoring, values, handleReset }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
