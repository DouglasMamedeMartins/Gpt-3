import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentInitial = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 27rem;
`

export const ContenInitialtLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.125rem;

  h3 {
    width: 26.625rem;
    font-size: 2.125rem;
    font-weight: 800;
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['orange-300']};
  }
`

export const ContentInitialRight = styled.div`
  display: grid;
  gap: 1.25rem;
`
export const ContentInitialRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4.625rem;

  h4::before {
    content: '';
    display: block;
    width: 2.375rem;
    height: 0.18rem;
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    margin-bottom: 4px;
  }

  h4 {
    width: 11.31rem;
    font-size: 1.125rem;
    font-weight: 400;
    color: ${(props) => props.theme.white};
  }

  p {
    width: 20.625rem;
    font-size: 0.825rem;
    line-height: 1.6;
  }
`

export const ContentFinal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2.81rem;
  margin-bottom: 9.68rem;
  img {
    width: 100%;
  }
`

export const ContentFinalRight = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.25rem;

  h4 {
    color: ${(props) => props.theme['blue-100']};
    font-weight: 100;
  }

  h2 {
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    width: 26.56rem;
  }

  p {
    color: ${(props) => props.theme['blue-300']};
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.6;
    width: 28rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['orange-300']};
  }
`
