import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  img {
    width: 200px;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
  a {
    color: inherit;
  }
`

export const AgendaContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  p {
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    color: ${({ theme }) => theme.colors.defaultColor};
    padding: ${({ theme }) => theme.spacing.s} 0;
    text-align: justify;
  }
  a {
    margin-left: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.brandPrimary};
  }
  ul {
    list-style: none;
    margin: 0 ${({ theme }) => theme.spacing.l};
  }
  ul li {
    color: ${({ theme }) => theme.colors.brandSecondary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 500;
    padding: ${({ theme }) => theme.spacing.s} 0;
  }
`

export const SocialWrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }

  .facebook {
    color: #3b5998;
  }

  .twitter {
    color: #00acee;
  }
`
