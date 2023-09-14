import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.875rem 2.375rem 1.75rem 2.875rem;
  background: linear-gradient(
    90deg,
    rgba(174, 103, 250, 1) 35%,
    rgba(244, 152, 103, 1) 100%
  );

  border-radius: 8px;
  margin-bottom: 10rem;
  height: 10.75rem;
`

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['black-900']};
  }

  h3 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.black};
  }
`

export const ContentButton = styled.div`
  padding: 1rem 2.8rem;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
`
