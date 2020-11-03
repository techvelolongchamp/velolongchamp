import React from 'react'
import { Link } from 'gatsby'

import { PresentationContainer, VideoWrapper } from './Presentation.styled'

const Presentation = ({ trad }) => {
  return (
    <PresentationContainer>
      <h3>{trad.presentation.whoAreWe.title}</h3>
      <p>{trad.presentation.whoAreWe.part1}</p>
      <p>{trad.presentation.whoAreWe.part2}</p>
      <p>{trad.presentation.whoAreWe.part3}</p>
      <p>{trad.presentation.whoAreWe.part4}</p>
      <p>{trad.presentation.whoAreWe.part5}</p>
      <p>
        <Link to="/statuts">{trad.presentation.whoAreWe.link}</Link>
      </p>
      <h3>{trad.presentation.why.title}</h3>
      <p>{trad.presentation.why.part1}</p>
      <p>{trad.presentation.why.part2}</p>
      <p>{trad.presentation.why.part3}</p>
      <h3>{trad.presentation.commitments.title}</h3>
      <ol>
        <li>
          <h4>{trad.presentation.commitments.first}</h4>
        </li>
        <li>
          <h4>{trad.presentation.commitments.second}</h4>
        </li>
        <li>
          <h4>{trad.presentation.commitments.third}</h4>
        </li>
        <li>
          <h4>{trad.presentation.commitments.fourth}</h4>
        </li>
        <li>
          <h4>{trad.presentation.commitments.fifth}</h4>
        </li>
        <li>
          <h4>{trad.presentation.commitments.sixth}</h4>
        </li>
        <li>
          <h4>{trad.presentation.commitments.seventh}</h4>
        </li>
      </ol>
      <h3>{trad.presentation.missions.title}</h3>
      <ul>
        <li>
          <h4>{trad.presentation.missions.first}</h4>
        </li>
        <li>
          <h4>{trad.presentation.missions.second}</h4>
        </li>
        <li>
          <h4>{trad.presentation.missions.third}</h4>
        </li>
        <li>
          <h4>{trad.presentation.missions.fourth}</h4>
        </li>
        <li>
          <h4>{trad.presentation.missions.fifth}</h4>
        </li>
        <li>
          <h4>{trad.presentation.missions.sixth}</h4>
        </li>
        <li>
          <h4>{trad.presentation.missions.seventh}</h4>
        </li>
      </ul>

      <h3>{trad.presentation.video.title}</h3>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/a6AOYfE7AeM"
          frameBorder="0"
          title={trad.presentation.video.iframeTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </PresentationContainer>
  )
}

export default Presentation
