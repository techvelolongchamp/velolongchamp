import styled from 'styled-components'

export const Post = styled.li`
  background: ${({ theme }) => theme.colors.offWhite};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.defaultColor};
  cursor: pointer;
  display: block;
  margin: 20px 0;
  padding: 20px;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.darkerOffWhite};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.large};
  }
`

export const PublishDate = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0;
`

export const Extract = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fonts.medium};
  font-style: italic;
`
