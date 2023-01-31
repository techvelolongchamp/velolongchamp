import React from 'react'
import { useIntl } from 'react-intl'

import { SubTitle, FrameContainer, Message } from './Bidon.styled'

const Bidon = () => {
  const { formatMessage } = useIntl()
  return (
    <>
      <SubTitle>{formatMessage({ id: 'bidon.subtitle' })}</SubTitle>
      <FrameContainer>
        <iframe
          title={formatMessage({ id: 'bidon.title' })}
          id="haWidget"
          data-hj-allow-iframe=""
          scrolling="auto"
          src="https://www.helloasso.com/associations/velo-longchamp/paiements/bidons-velo-longchamp/widget"
          style={{ width: '100%', height: '750px', border: 'none' }}
        ></iframe>
      </FrameContainer>
      <Message>
        {formatMessage(
          { id: 'join.problem' },
          {
            a: (chunk: React.ReactNode) => (
              <a
                href="https://www.helloasso.com/associations/velo-longchamp/paiements/bidons-velo-longchamp"
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

export default Bidon
