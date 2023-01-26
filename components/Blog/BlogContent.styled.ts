import styled from 'styled-components'

export const PublishDate = styled.p`
  margin: ${({ theme }) => theme.spacing.xs} 0;
`

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.defaultColor};

  h2 {
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-size: ${({ theme }) => theme.fonts.xlarge};
    margin: ${({ theme }) => theme.spacing.l} 0;
  }
  p {
    font-size: ${({ theme }) => theme.fonts.large};
    line-height: 26px;
    font-weight: 300;
    margin-bottom: ${({ theme }) => theme.spacing.m};
  }
  hr {
    margin: ${({ theme }) => theme.spacing.m} 0;
    text-shadow: none;
    font-weight: 400;
    border: 0.5px solid;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  h3 {
    font-size: 18px;
    margin: ${({ theme }) => theme.spacing.l} 0;
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-weight: 600;
  }
  h4 {
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 500;
    margin: ${({ theme }) => theme.spacing.m} 0;
    padding-right: ${({ theme }) => theme.spacing.s};
  }
  h5 {
    font-size: 18px;
    margin: ${({ theme }) => theme.spacing.m} 0;
  }

  h6 {
    font-size: 16px;
    margin: ${({ theme }) => theme.spacing.m} 0;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.brandPrimary};
  }

  a {
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-weight: 300;
    &:hover {
      font-weight: 400;
      text-decoration: underline;
    }

    &.form {
      font-size: 20px;
      font-weight: 400;
      text-decoration: underline;
    }
  }

  img {
    text-align: center;
    max-width: 100%;
  }

  ul,
  ol {
    margin-left: ${({ theme }) => theme.spacing.l};
  }

  ul,
  ol li {
    align-items: center;
    color: ${({ theme }) => theme.colors.brandSecondary};
    font-size: ${({ theme }) => theme.fonts.medium};
    font-weight: 200;
    margin: ${({ theme }) => theme.spacing.s} 0;
    padding-left: ${({ theme }) => theme.spacing.l};
  }

  .downloadButton {
    background: ${({ theme }) => theme.colors.brandSecondary};
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fonts.large};
    outline: none;
    padding: ${({ theme }) => theme.spacing.s};
    margin: ${({ theme }) => theme.spacing.s} 0;
    text-decoration: none;

    @media screen and (max-width: 640px) {
      font-size: ${({ theme }) => theme.fonts.medium};
    }
  }
`

export const ImgContainer = styled.div`
  text-align: center;
`
