import React from 'react'
import { useIntl } from 'react-intl'

import { SubTitle, FrameContainer, Message } from './Join.styled'

const Join = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <SubTitle>{formatMessage({ id: 'join.subtitle' })}</SubTitle>
      <FrameContainer>
        <iframe
          title={formatMessage({ id: 'join.title' })}
          id="haWidget"
          allowtransparency="true"
          data-hj-allow-iframe=""
          scrolling="auto"
          src="https://www.helloasso.com/associations/velo-longchamp/adhesions/adherer-gratuitement-a-velo-longchamp-pour-la-renovation-de-l-anneau-cycliste/widget"
          style={{ width: '100%', height: '750px', border: 'none' }}
        ></iframe>
      </FrameContainer>
      <Message>
        {formatMessage(
          { id: 'join.problem' },
          {
            a: (chunk) => (
              <a
                href="https://www.helloasso.com/associations/velo-longchamp/adhesions/adherer-gratuitement-a-velo-longchamp-pour-la-renovation-de-l-anneau-cycliste"
                target="_blank"
                rel="noopener noreferrer"
                title="HelloAsso"
              >
                {chunk}
              </a>
            ),
          }
        )}
      </Message>
    </>
  )
}

export default Join
