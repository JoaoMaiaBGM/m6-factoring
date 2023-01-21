import { ListContainer } from "./style";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const ValuesList = () => {
  const { values, loading, makeList } = useContext(Context);

  return Object.keys(values).length <= 0 ? (
    <ListContainer>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ul>
          {makeList({
            1: 0,
            15: 0,
            30: 0,
            90: 0,
          })}
        </ul>
      </div>
    </ListContainer>
  ) : loading ? (
    <span> Carregando...</span>
  ) : (
    <ListContainer>
      <div>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ul>{makeList(values)}</ul>
      </div>
    </ListContainer>
  );
};

export default ValuesList;
