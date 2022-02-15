import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { useIntl } from 'react-intl'
import { useRouter } from 'next/router'

import Portal from './Portal'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import useClickOutside from '../../hooks/useClickOutside'
import { formatDate } from '../../utils/date'

import {
  Overlay,
  ModalContainer,
  Header,
  Title,
  Organizer,
  Date,
  Content,
  More,
} from './Modal.styled'

type ModalProps = {
  onClose: () => void
  title?: string
  description?: string
  organizer?: string
  start?: Date
  end?: Date
  url?: string
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  description,
  title,
  organizer,
  start,
  end,
  url,
}) => {
  const { formatMessage } = useIntl()
  const { locale } = useRouter()
  useLockBodyScroll()

  const { wrapperRef } = useClickOutside(() => {
    onClose()
  })

  const handleCloseClick = (e: React.SyntheticEvent<SVGElement>) => {
    e.preventDefault()
    onClose()
  }

  return (
    <Portal>
      <Overlay>
        <ModalContainer ref={wrapperRef}>
          <Header>
            <Title>{title}</Title>
            <IoCloseOutline onClick={handleCloseClick} />
          </Header>
          {organizer && (
            <Organizer organizer={organizer}>{organizer}</Organizer>
          )}
          {start && (
            <Date>{`${formatMessage({
              id: 'calendar.event.start',
            })} ${formatDate(start, locale, 'short')}`}</Date>
          )}
          {end && (
            <Date>{`${formatMessage({
              id: 'calendar.event.end',
            })} ${formatDate(end, locale, 'short')}`}</Date>
          )}
          {description && (
            <Content
              dangerouslySetInnerHTML={{
                __html: description.replace(/\n/g, '</br>'),
              }}
            />
          )}
          {url && (
            <More>
              <a href={url} target="_blank" rel="noreferrer">
                {formatMessage({
                  id: 'calendar.event.more',
                })}
              </a>
            </More>
          )}
        </ModalContainer>
      </Overlay>
    </Portal>
  )
}

export default Modal
