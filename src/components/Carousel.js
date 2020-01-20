import React from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'

const Picture = styled.p`
  background-image: url(${({ background }) => background});
  background-size: cover;
  height: 100%;
`

const images = ['/Photo1.webp', '/Photo2.webp', '/Photo3.webp']

const Carousel = () => {
  const params = {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    lazy: true,
  }
  return (
    <Swiper {...params}>
      {images.map(i => (
        <Picture background={i} key={i} />
      ))}
    </Swiper>
  )
}
export default Carousel
