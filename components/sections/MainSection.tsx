import React from 'react'
import Image from 'next/image'

import Background from '../../public/media/Banniere.JPG'

import { SectionContainer } from './MainSection.styled'

const MainSection: React.FC<{ id?: string }> = ({ id }) => {
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

export default MainSection
