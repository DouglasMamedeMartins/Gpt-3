import styled from 'styled-components'

export const HeaderMainContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6.25rem;

  h1 {
    font-weight: 800;
    font-size: 3.5rem;
    width: 38.375rem;
    line-height: 1.2;
    background-image: linear-gradient(
      90deg,
      rgba(174, 103, 250, 1) 5%,
      rgba(244, 152, 103, 1) 95%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    width: 34.625rem;
    line-height: 1.5;
  }

  form {
    width: 40rem;
  }
`

export const ContentRight = styled.div``

export const InputStarted = styled.input`
  width: 100%;
  max-width: 28.5rem;
  height: 4.375rem;
  padding: 2rem 1.5rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme['blue-400']};

  &::placeholder {
    color: ${(props) => props.theme['blue-400']};
  }

  &:focus {
    outline: none;
  }
`

export const ButtonStarted = styled.button`
  width: 100%;
  max-width: 10.875rem;
  height: 4.375rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: none;
  background-color: ${(props) => props.theme['orange-800']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
`

export const ContainerSignGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: ${(props) => props.theme.white};

  img {
    width: 11.5rem;
  }
`

export const ContainerCompanies = styled.div`
  width: 100%;
  max-width: 41.875rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    height: 1.5rem;
  }
`
