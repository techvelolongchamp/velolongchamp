import React from 'react'

import {
  ButtonContainer,
  ButtonLink,
  JoinContainer,
  Faq,
  Question,
  Answer,
} from './Join.styled'

const Join = ({ trad }) => {
  return (
    <>
      <JoinContainer>
        <p>{trad.joinUs.joinMessage}</p>
        <ButtonContainer>
          <ButtonLink
            href="https://www.helloasso.com/associations/velo-longchamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {trad.joinUs.clickJoin}
          </ButtonLink>
        </ButtonContainer>

        <p>{trad.joinUs.reasonToJoin.title}</p>
        <ol>
          <li>
            <h4>{trad.joinUs.reasonToJoin.first}</h4>
          </li>
          <li>
            <h4>{trad.joinUs.reasonToJoin.second}</h4>
          </li>
          <li>
            <h4>{trad.joinUs.reasonToJoin.third}</h4>
          </li>
          <li>
            <h4>{trad.joinUs.reasonToJoin.fourth}</h4>
          </li>
          <li>
            <h4>{trad.joinUs.reasonToJoin.fifth}</h4>
          </li>
        </ol>
      </JoinContainer>
      <Faq>
        <h3>{trad.joinUs.faq.title}</h3>
        <Question>{trad.joinUs.faq.firstQuestion}</Question>
        <Answer>{trad.joinUs.faq.firstAnswer}</Answer>
        <Question>{trad.joinUs.faq.secondQuestion}</Question>
        <Answer>{trad.joinUs.faq.secondAnswer}</Answer>
        <Question>{trad.joinUs.faq.thirdQuestion}</Question>
        <Answer>{trad.joinUs.faq.thirdAnswer}</Answer>
        <Question>{trad.joinUs.faq.fourthQuestion}</Question>
        <Answer>{trad.joinUs.faq.fourthAnswer}</Answer>
        <Question>{trad.joinUs.faq.fifthQuestion}</Question>
        <Answer>{trad.joinUs.faq.fifthAnswer}</Answer>
        <Question>{trad.joinUs.faq.sixthQuestion}</Question>
        <Answer>{trad.joinUs.faq.sixthAnswer}</Answer>
      </Faq>
    </>
  )
}

export default Join
