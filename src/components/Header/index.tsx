import logoGPT from '../../assets/GPT-3.png'
import { ButtonContainer, HeaderContainer, UlContainer } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoGPT} alt="" />
      <UlContainer>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">What is GPT?</a>
        </li>
        <li>
          <a href="">Open AI</a>
        </li>
        <li>
          <a href="">Case Studies</a>
        </li>
        <li>
          <a href="">Library</a>
        </li>
      </UlContainer>
      <ButtonContainer>
        <button>Sign in</button>
        <button>Sign iup</button>
      </ButtonContainer>
    </HeaderContainer>
  )
}
