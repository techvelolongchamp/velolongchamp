import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import {
  ButtonContainer,
  ButtonLink,
  JoinContainer,
  Faq,
  Question,
  Answer,
} from './Join.styled'

const Join = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <JoinContainer>
        <p>{formatMessage({ id: 'joinUs.joinMessage' })}</p>
        <ButtonContainer>
          <Link href="/join" passHref>
            <ButtonLink>{formatMessage({ id: 'joinUs.clickJoin' })}</ButtonLink>
          </Link>
        </ButtonContainer>

        <p>{formatMessage({ id: 'joinUs.reasonToJoin.title' })}</p>
        <ol>
          {formatMessage(
            { id: 'joinUs.reasonToJoin.list' },
            {
              li: (chunk) => (
                <li>
                  <p>{chunk}</p>
                </li>
              ),
              strong: (chunk) => <strong>{chunk}</strong>,
            }
          )}
        </ol>
      </JoinContainer>
      <Faq>
        <h3>{formatMessage({ id: 'joinUs.faq.title' })}</h3>
        {formatMessage(
          { id: 'joinUs.faq.questions' },
          {
            q: (chunk) => <Question>{chunk}</Question>,
            a: (chunk) => <Answer>{chunk}</Answer>,
          }
        )}
      </Faq>
    </>
  )
}

export default Join
