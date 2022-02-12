import React from 'react'

import { Wrapper } from './Content.styled'

const Content: React.FC<{ maxWidth?: string; children: React.ReactNode }> = ({
  maxWidth,
  children,
}) => <Wrapper maxWidth={maxWidth}>{children}</Wrapper>

export default Content
