import styled from 'styled-components'

export const LngContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.small};
  margin-left: ${({ theme }) => theme.spacing.xs};
`

export const SelectLng = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.spacing.xs};
  width: 24px;

  &:hover {
    text-decoration: underline;
  }
`
