import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Content from '../ui/Content'

import { SectionContainer, Title } from './SecondarySection.styled'

const SecondarySection = forwardRef(({ id, title, children, height }, ref) => (
  <SectionContainer name={id} height={height} ref={ref}>
    <Content>
      <Title>{title}</Title>
      {children}
    </Content>
  </SectionContainer>
))

SecondarySection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  height: PropTypes.string,
}

export default SecondarySection
