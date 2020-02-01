import React from 'react'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'

const Picture = styled.p`
  background-image: url(${({ background }) => background});
  background-size: cover;
  height: 100%;
`

const images = [
  '/pictures/Photo1.webp',
  '/pictures/Photo2.webp',
  '/pictures/Photo3.webp',
]

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
