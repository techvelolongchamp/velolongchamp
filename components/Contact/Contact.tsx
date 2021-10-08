import React from 'react'
import Image from 'next/image'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io'

import { ContactWrapper, SocialWrapper } from './Contact.styled'

const Contact = () => {
  return (
    <ContactWrapper>
      <Image src="/logo.png" alt="logo" width={200} height={150} />
      <SocialWrapper>
        <a
          href="https://www.facebook.com/AssoVeloLongchamp"
          title="Facebook"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <IoLogoFacebook />
        </a>
        <a
          href="https://twitter.com/velolongchamp"
          title="Twitter"
          target="_blank"
          rel="noreferrer"
          className="twitter"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://www.instagram.com/velolongchamp/"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <IoLogoInstagram />
        </a>
      </SocialWrapper>
      <p>
        <a
          href="mailto:contact@velo-longchamp.fr?subject=Contact"
          title="Contact"
        >
          contact@velo-longchamp.fr
        </a>
      </p>
    </ContactWrapper>
  )
}

export default Contact
