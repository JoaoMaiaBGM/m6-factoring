import { createContext } from "react";
import { toast } from "react-toastify";
import Api from "../Services/api";

const Context = createContext();

function Provider({ children }) {
  async function handleFactoring(factoringData) {
    const data = await Api.post(
      "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
      factoringData
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    toast.success("Cálculo feito com sucesso!");
  }

  return (
    <Context.Provider value={{ handleFactoring }}> {children}</Context.Provider>
  );
}

export { Context, Provider };
