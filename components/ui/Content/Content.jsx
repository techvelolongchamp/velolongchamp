import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './Content.styled'

const Content = ({ children }) => <Wrapper>{children}</Wrapper>

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Content
