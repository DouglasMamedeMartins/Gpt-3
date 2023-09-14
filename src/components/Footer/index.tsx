import {
  Autorais,
  ButtonRequest,
  Container,
  ContainerGpt,
  ContainerLinks,
  ContainerLinksRight,
} from './styles'

import LogoGpt from '../../assets/LogoGpt.svg'

export const Footer = () => {
  return (
    <Container>
      <h2>Do you want to step in to the future before others</h2>
      <ButtonRequest>Request Early Access</ButtonRequest>
      <ContainerLinks>
        <ContainerGpt>
          <img src={LogoGpt} alt="" />
          <span>Crechterwoord K12 br 182 DK Alknjkcb, All Rights Reserved</span>
        </ContainerGpt>
        <ContainerLinksRight>
          <h5>Links</h5>
          <a href="#">Overons</a>
          <a href="#">Social Media</a>
          <a href="#">Counters</a>
          <a href="#">Contact</a>
        </ContainerLinksRight>
        <ContainerLinksRight>
          <h5>Company</h5>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </ContainerLinksRight>
        <ContainerLinksRight>
          <h5>Get in touch</h5>
          <a href="#">
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </a>
          <a href="#">085-132567</a>
          <a href="#">info@payme.net</a>
        </ContainerLinksRight>
      </ContainerLinks>

      <Autorais>© 2021 GPT-3. All rights reserved.</Autorais>
    </Container>
  )
}
