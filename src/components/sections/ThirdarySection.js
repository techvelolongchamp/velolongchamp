import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Content from '../Content'

const SectionContainer = styled.section`
  min-height: ${({ theme, height }) => (height ? height : theme.sectionHeight)};
`

const H1Title = styled.h1`
  ${({ hideH1 }) => hideH1 && 'display: none;'}
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const H2Title = styled.h2`
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: ${({ theme }) => theme.fonts.xlarge};
  margin: ${({ theme }) => theme.spacing.l} 0;
`

const ThirdarySection = ({ id, title, children, height, useH1, hideH1 }) => (
  <SectionContainer name={id} id={id} height={height}>
    <Content>
      {useH1 ? (
        <H1Title hideH1={hideH1}>{title}</H1Title>
      ) : (
        <H2Title>{title}</H2Title>
      )}
      {children}
    </Content>
  </SectionContainer>
)

ThirdarySection.propTypes = {
  useH1: PropTypes.bool,
  hideH1: PropTypes.bool,
}

ThirdarySection.defaultProps = {
  useH1: false,
  hideH1: false,
}

export default ThirdarySection
