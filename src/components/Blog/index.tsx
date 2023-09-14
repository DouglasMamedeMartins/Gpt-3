import Img1 from '../../assets/Image1.png'
import Img2 from '../../assets/Image2.png'
import Img3 from '../../assets/Image3.png'
import Img4 from '../../assets/Image4.png'
import Img5 from '../../assets/Image5.png'
import { Card, Container, ContainerCard } from './styles'

export const Blog = () => {
  return (
    <Container>
      <h2>
        A lot is happening, <br /> We are blogging about <br /> it.
      </h2>

      <ContainerCard>
        <Card>
          <img src={Img1} alt="" />
          <div>
            <span>Sep 26, 2021</span>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <a href="#">Read Full Article</a>
          </div>
        </Card>
        <Card>
          <img src={Img2} alt="" />
          <div>
            <span>Sep 26, 2021</span>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <a href="#">Read Full Article</a>
          </div>
        </Card>
        <Card>
          <img src={Img3} alt="" />
          <div>
            <span>Sep 26, 2021</span>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <a href="#">Read Full Article</a>
          </div>
        </Card>
        <Card>
          <img src={Img4} alt="" />
          <div>
            <span>Sep 26, 2021</span>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <a href="#">Read Full Article</a>
          </div>
        </Card>
        <Card>
          <img src={Img5} alt="" />
          <div>
            <span>Sep 26, 2021</span>
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <a href="#">Read Full Article</a>
          </div>
        </Card>
      </ContainerCard>
    </Container>
  )
}
