import { FooterContainer, FooterMain } from "./style";

function Footer() {
  return (
    <FooterContainer>
      <FooterMain>
        <div className='footerNav'>
          <a href='https://www.hash.com.br/' target='_blank' rel='noreferrer'>
            Hash
          </a>
          <a
            href='https://frontend-challenge-7bu3nxh76a-uc.a.run.app'
            target='_blank'
            rel='noreferrer'
          >
            API
          </a>
          <a
            href='https://www.figma.com/file/ipV80xJ29T7rdz0Aoo7xWv/Antecipation?node-id=0%3A1'
            target='_blank'
            rel='noreferrer'
          >
            Figma
          </a>
          <a
            href='https://github.com/JoaoMaiaBGM/m6-factoring'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>

        <span>©2023, All right reserved.</span>
      </FooterMain>
    </FooterContainer>
  );
}

export default Footer;
