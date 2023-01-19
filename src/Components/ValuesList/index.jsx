import { ListContainer } from "./style";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const ValuesList = () => {
  const { values } = useContext(Context);

  const value = Object.values(values);

  const days = Object.keys(values);
  if (days[0] === "1") {
    days[0] = "Amanhã";
  }

  return value.length <= 0 ? (
    <ListContainer>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ul>
          <div className='list-item'>
            <h3>Amanhã:</h3>
            <p>R$0,00</p>
          </div>
          <div className='list-item'>
            <h3>Em 15 dias:</h3>
            <p>R$0,00</p>
          </div>
          <div className='list-item'>
            <h3>Em 30 dias:</h3>
            <p>R$0,00</p>
          </div>
          <div className='list-item'>
            <h3>Em 90 dias:</h3>
            <p>R$0,00</p>
          </div>
        </ul>
      </div>
    </ListContainer>
  ) : (
    <ListContainer>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ul>
          <div className='list-item'>
            <h3>{days[0]}</h3>
            <p>
              {value[0].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className='list-item'>
            <h3>Em {days[1]} dias:</h3>
            <p>
              {value[1].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className='list-item'>
            <h3>Em {days[2]} dias:</h3>
            <p>
              {value[2].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <div className='list-item'>
            <h3>Em {days[3]} dias:</h3>
            <p>
              {value[3].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </ul>
      </div>
    </ListContainer>
  );
};

export default ValuesList;
