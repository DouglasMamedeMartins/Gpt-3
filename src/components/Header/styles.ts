import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  margin-top: 2rem;
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 1rem;
  }
`

export const UlContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 3.375rem;

  li {
    font-size: 1rem;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 1rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.white};
    border-radius: 3px;
    width: 9.5rem;
    cursor: pointer;
  }

  button:last-child {
    background-color: ${(props) => props.theme['orange-800']};
  }
`
