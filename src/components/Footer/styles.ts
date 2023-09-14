import styled from 'styled-components'

export const Container = styled.footer`
  height: 60rem;
  background-color: ${(props) => props.theme['blue-800']};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};
  padding: 1rem;

  h2 {
    font-size: 3.5rem;
    width: 51.25rem;
    text-align: center;
    margin-top: 11rem;
    margin-bottom: 4rem;
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

export const ButtonRequest = styled.button`
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.white};
  background-color: transparent;
  color: ${(props) => props.theme.white};
  margin-bottom: 11.25rem;
`

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10.5rem;
`

export const ContainerGpt = styled.div`
  width: 10.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-right: 8rem;

  img {
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 100;
    line-height: 1.4;
  }
`

export const ContainerLinksRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.625rem;
  line-height: 1.6;

  h5 {
    font-size: 0.875rem;
    margin-bottom: 2.25rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 100;
  }
`

export const Autorais = styled.span`
  font-size: 0.75rem;
  font-weight: 100;
  margin-top: auto;
`
