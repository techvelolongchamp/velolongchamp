import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { PresentationContainer, VideoWrapper } from './Presentation.styled'

const Presentation = () => {
  const { formatMessage } = useIntl()
  return (
    <PresentationContainer>
      <h3>{formatMessage({ id: 'presentation.whoAreWe.title' })}</h3>

      {formatMessage(
        { id: 'presentation.whoAreWe.message' },
        {
          strong: (chunk: React.ReactNode) => <strong>{chunk}</strong>,
          p: (chunk) => <p>{chunk}</p>,
        }
      )}

      <p id="statuts-links">
        <Link href="/statuts">
          {formatMessage({ id: 'presentation.whoAreWe.link' })}
        </Link>
      </p>
      <h3>{formatMessage({ id: 'presentation.why.title' })}</h3>

      {formatMessage(
        { id: 'presentation.why.message' },
        {
          p: (chunk: React.ReactNode) => <p>{chunk}</p>,
        }
      )}

      {/* <h3>{formatMessage({ id: 'presentation.commitments.title' })}</h3>
      <ol>
        {formatMessage(
          { id: 'presentation.commitments.list' },
          {
            li: (chunk) => (
              <li>
                <h4>{chunk}</h4>
              </li>
            ),
            strong: (chunk) => <strong>{chunk}</strong>,
          }
        )}
      </ol> */}
      {/* <h3>{formatMessage({ id: 'presentation.missions.title' })}</h3>
      <ul>
        {formatMessage(
          { id: 'presentation.missions.list' },
          {
            li: (chunk) => (
              <li>
                <h4>{chunk}</h4>
              </li>
            ),
            strong: (chunk) => <strong>{chunk}</strong>,
          }
        )}
        </ul> */}

      <h3>{formatMessage({ id: 'presentation.video.title' })}</h3>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/ZTRj9R6s-JI"
          frameBorder="0"
          title={formatMessage({ id: 'presentation.video.iframeTitle' })}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </PresentationContainer>
  )
}

export default Presentation
