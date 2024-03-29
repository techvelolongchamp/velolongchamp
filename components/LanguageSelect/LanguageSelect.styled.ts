import styled from 'styled-components'
import Link from 'next/link'

export const LngContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  font-size: ${({ theme }) => theme.fonts.small};
  margin: 0 ${({ theme }) => theme.spacing.xs};
`

export const SelectLng = styled(Link)`
  background: none;
  border: none;
  outline: none;
  color: black;
  padding: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
