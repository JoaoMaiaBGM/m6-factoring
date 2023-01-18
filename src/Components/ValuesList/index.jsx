import { ListContainer } from "./style";

const ValuesList = () => {
  return (
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
  );
};

export default ValuesList;
