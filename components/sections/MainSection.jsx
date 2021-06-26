import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Background from '../../public/media/Banniere.JPG'

import { SectionContainer } from './MainSection.styled'

const MainSection = ({ id }) => {
  return (
    <SectionContainer id={id}>
      <Image
        src={Background}
        alt="Picture of the author"
        placeholder="blur"
        blurDataURL="LIE{hDW;9FMvcut7RPMxx^%MkBRP"
        layout="fill"
        objectFit="cover"
      />
    </SectionContainer>
  )
}

MainSection.propTypes = {
  id: PropTypes.string,
}

export default MainSection
