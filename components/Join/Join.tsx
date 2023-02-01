import React from 'react'
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
          <ButtonLink href="/join">
            {formatMessage({ id: 'joinUs.clickJoin' })}
          </ButtonLink>
        </ButtonContainer>

        <p>{formatMessage({ id: 'joinUs.reasonToJoin.title' })}</p>
        <ol>
          {formatMessage(
            { id: 'joinUs.reasonToJoin.list' },
            {
              li: (chunk: React.ReactNode) => (
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
            q: (chunk: React.ReactNode) => <Question>{chunk}</Question>,
            a: (chunk: React.ReactNode) => <Answer>{chunk}</Answer>,
          }
        )}
      </Faq>
    </>
  )
}

export default Join
