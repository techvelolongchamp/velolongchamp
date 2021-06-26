import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Content from '../ui/Content'

import { SectionContainer, H1Title, H2Title } from './ThirdarySection.styled'

const ThirdarySection = forwardRef(
  ({ id, title, children, height, useH1, hideH1 }, ref) => (
    <SectionContainer name={id} id={id} height={height} ref={ref}>
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
)

ThirdarySection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  height: PropTypes.string,
  useH1: PropTypes.bool,
  hideH1: PropTypes.bool,
}

ThirdarySection.defaultProps = {
  useH1: false,
  hideH1: false,
}

export default ThirdarySection
