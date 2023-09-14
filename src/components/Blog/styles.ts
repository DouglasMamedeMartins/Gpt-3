import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 7.2rem;
  margin-bottom: 9.625rem;

  h2 {
    font-size: 3.875rem;
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 27rem);
  grid-row-gap: 3rem;

  :first-child {
    grid-row: 1 / 3;
    img {
      max-width: 100%;
      max-height: 40rem;
      width: auto;
      height: auto;
      object-fit: cover;
    }

    h3 {
      margin-bottom: 100%;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['blue-700']};
  width: 20rem;
  div {
    padding: 1.5rem 1rem;
  }
  img {
    max-width: 100%;
    max-height: 8.1rem;
    width: auto;
    height: auto;
    object-fit: cover;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
    margin: 1rem 0;
  }

  h3 {
    font-size: 1.25rem;
    margin: 1rem 0;
    line-height: 1.4;
    font-weight: 400;
    width: 17rem;
    color: ${(props) => props.theme.white};
    margin-bottom: 1.5rem;
  }

  a {
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }
`
