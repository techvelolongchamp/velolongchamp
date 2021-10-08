import React from 'react'

import { Wrapper } from './Content.styled'

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)

export default Content
