import {
  Container,
  ContenInitialtLeft,
  ContentFinal,
  ContentFinalRight,
  ContentInitial,
  ContentInitialRight,
  ContentInitialRightBox,
} from './styles'

import featureImg from '../../assets/featureImage.png'

export const Feature = () => {
  return (
    <Container>
      <ContentInitial>
        <ContenInitialtLeft>
          <h3>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h3>
          <a href="#">Request Early Access to Get Started</a>
        </ContenInitialtLeft>

        <ContentInitialRight>
          <ContentInitialRightBox>
            <h4>Improving end distrusts instantly </h4>
            <p>
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </p>
          </ContentInitialRightBox>

          <ContentInitialRightBox>
            <h4>Become the tended active</h4>
            <p>
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of on become he tended active enable to.
            </p>
          </ContentInitialRightBox>

          <ContentInitialRightBox>
            <h4>Message or am nothing </h4>
            <p>
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </p>
          </ContentInitialRightBox>

          <ContentInitialRightBox>
            <h4>Really boy law county </h4>
            <p>
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </p>
          </ContentInitialRightBox>
        </ContentInitialRight>
      </ContentInitial>

      <ContentFinal>
        <img src={featureImg} alt="" />

        <ContentFinalRight>
          <h4>Request Early Access to Get Started</h4>
          <h2>The possibilities are beyond your imagination</h2>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <a href="#">Request Early Access to Get Started</a>
        </ContentFinalRight>
      </ContentFinal>
    </Container>
  )
}
