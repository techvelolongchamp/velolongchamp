import styled from 'styled-components'

export const PresentationContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    font-size: ${({ theme }) => theme.fonts.large};
    margin: ${({ theme }) => theme.spacing.l} 0;
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-weight: 600;
  }

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
    width: 50%;
    h4 {
      color: ${({ theme }) => theme.colors.brandSecondary};
      font-size: ${({ theme }) => theme.fonts.large};
      font-weight: 500;
      padding-right: ${({ theme }) => theme.spacing.s};
    }
    @media (max-width: 640px) {
      width: 100%;
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
    margin-right: ${({ theme }) => theme.spacing.xs};
  }

  a  {
    color: ${({ theme }) => theme.colors.brandSecondary};
    font-weight: 800;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  ul li {
    counter-increment: styled-counter;
    display: flex;
    margin: ${({ theme }) => theme.spacing.s} 0;
    width: 50%;
    h4 {
      color: ${({ theme }) => theme.colors.brandSecondary};
      font-size: ${({ theme }) => theme.fonts.large};
      font-weight: 500;
      padding-right: ${({ theme }) => theme.spacing.s};
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`

export const VideoWrapper = styled.div`
  text-align: center;

  iframe {
    width: 560px;
    height: 315px;

    @media (max-width: 640px) {
      width: 100%;
      max-width: 560px;
      max-height: 315px;
      height: 100%;
      height: -moz-available;
      height: -webkit-fill-available;
      height: fill-available;
    }
  }
`
