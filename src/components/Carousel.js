import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Swiper from 'react-id-swiper'

const Picture = styled.p`
  background-image: url(${({ background }) => background});
  background-size: cover;
  height: 100%;
`

const Carousel = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "pictures" } }) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `)

  const imagesGql = allFile.edges
    .map(e => {
      return `/media/carousel/${e.node.relativePath}`
    })
    .sort((a, b) => (a > b ? 1 : -1))

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
      {imagesGql.map(i => (
        <Picture background={i} key={i} />
      ))}
    </Swiper>
  )
}
export default Carousel
