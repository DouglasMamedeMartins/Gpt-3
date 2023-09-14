import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 73.175rem;
  height: 100%;
  background-color: ${(props) => props.theme['blue-700']};
  padding: 3.75rem;
  margin-top: 8rem;
  margin-bottom: 12.5rem;
  position: relative;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.625rem;

  h3::before {
    content: '';
    display: block;
    width: 2.375rem;
    height: 0.18rem;
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.white};
    margin-top: -1rem;
  }

  p {
    max-width: 44rem;
    font-weight: 100;
    line-height: 1.6;
    font-size: 1rem;
  }
`

export const MiddleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5.75rem;

  h2 {
    width: 29.5rem;
    font-size: 2.175rem;
    line-height: 1.4;
    font-weight: 500;
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['orange-300']};
  }
`

export const FinalContent = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 1rem;
    width: 100%;

    h3::before {
      content: '';
      display: block;
      width: 2.375rem;
      height: 0.18rem;
      background-image: linear-gradient(
        90deg,
        rgba(174, 103, 250, 1) 5%,
        rgba(244, 152, 103, 1) 95%
      );
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${(props) => props.theme.white};
      margin-bottom: 1.625rem;
    }

    p {
      font-weight: 100;
      line-height: 1.6;
    }
  }
`
