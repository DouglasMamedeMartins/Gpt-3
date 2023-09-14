import SignGroup from '../../assets/SignGroup.png'
import Illustration from '../../assets/Illustration.png'
import Google from '../../assets/google.png'
import Slack from '../../assets/slack.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'
import {
  ButtonStarted,
  ContainerCompanies,
  ContainerSignGroup,
  ContentLeft,
  ContentRight,
  HeaderMainContent,
  InputStarted,
} from './styles'

export const HeaderMain = () => {
  return (
    <>
      <HeaderMainContent>
        <ContentLeft>
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>

          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>

          <form>
            <InputStarted type="text" placeholder="Your Email Address" />
            <ButtonStarted>Get Started</ButtonStarted>
          </form>

          <ContainerSignGroup>
            <img src={SignGroup} alt="" />
            <span>1,600 people requested access a visit in last 24 hours</span>
          </ContainerSignGroup>
        </ContentLeft>

        <ContentRight>
          <img src={Illustration} alt="" />
        </ContentRight>
      </HeaderMainContent>
      <ContainerCompanies>
        <img src={Google} alt="" />
        <img src={Slack} alt="" />
        <img src={Atlassian} alt="" />
        <img src={Dropbox} alt="" />
        <img src={Shopify} alt="" />
      </ContainerCompanies>
    </>
  )
}
