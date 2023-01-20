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

    await Api.post("", factoringData)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

    if (values) {
      setLoading(false);
      toast.success("Cálculo feito com sucesso!");
    }
  }

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  return (
    <Context.Provider value={{ handleFactoring, values, handleReset, loading }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
