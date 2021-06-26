import styled from 'styled-components'

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  img {
    width: 200px;
    padding: 10px 0;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
  a {
    color: inherit;
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
