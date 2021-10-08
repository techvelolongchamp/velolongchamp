import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
  a {
    color: inherit;
  }
`

export const SocialWrapper = styled.div`
  padding-top: 10px;
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
