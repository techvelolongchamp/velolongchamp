import styled from 'styled-components'
import { Link } from 'gatsby'

export const ButtonContainer = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.l};
`

export const ButtonLink = styled(Link)`
  margin: ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-radius: 5px;
`

export const JoinContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.l};

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    color: ${({ theme }) => theme.colors.defaultColor};
    padding: ${({ theme }) => theme.spacing.s} 0;
    text-align: justify;
  }

  ol {
    list-style: none;
    counter-reset: styled-counter;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  ol li {
    counter-increment: styled-counter;
    display: flex;
    align-items: center;
    margin: ${({ theme }) => theme.spacing.s} 0;
    width: 100%;
    p {
      line-height: 20px;
      color: ${({ theme }) => theme.colors.brandSecondary};
      font-size: ${({ theme }) => theme.fonts.large};
      font-weight: 500;
      padding-right: ${({ theme }) => theme.spacing.s};
    }
  }

  ol li::before {
    align-items: center;
    color: ${({ theme }) => theme.colors.brandSecondary};
    content: '0' counter(styled-counter);
    display: flex;
    font-family: 'Abril Fatface', serif;
    font-size: ${({ theme }) => theme.fonts.xlarge};
    font-weight: bold;
    line-height: 1;
    margin-right: ${({ theme }) => theme.spacing.s};
  }
`

export const Faq = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  h3 {
    font-size: ${({ theme }) => theme.fonts.large};
    margin: ${({ theme }) => theme.spacing.l} 0;
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-weight: 600;
  }
`

export const Question = styled.p`
  color: ${({ theme }) => theme.colors.defaultColor};
  font-size: ${({ theme }) => theme.fonts.medium};
  font-style: italic;
  font-weight: 500;
  line-height: ${({ theme }) => theme.spacing.l};
  margin-top: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s} 0;
`

export const Answer = styled.p`
  font-size: ${({ theme }) => theme.fonts.medium};
  line-height: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.defaultColor};
  padding: ${({ theme }) => theme.spacing.s} 0;
  font-weight: 200;
`
