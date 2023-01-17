import { Container, FormContainer, ListContainer } from "./style";

const HomePage = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <h2>Simule sua Antecipação</h2>

          <label htmlFor=''>Informe o valor da sua venda*</label>
          <input type='number' placeholder='R$1.000,00' />

          <label htmlFor=''>Em quantas parcelas*</label>
          <input type='number' placeholder='1 parcela' />

          <label htmlFor=''>Informe o percentual de MDR*</label>
          <input type='number' />
        </FormContainer>
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
      </Container>
    </>
  );
};

export default HomePage;
