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
  Date,
  Content,
} from './Modal.styled'

const Modal = ({ onClose, description, title, start, end }: any) => {
  const { formatMessage } = useIntl()
  const { locale } = useRouter()
  useLockBodyScroll()
  const { wrapperRef } = useClickOutside(() => {
    console.log('hello')
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
          <Content>{description}</Content>
        </ModalContainer>
      </Overlay>
    </Portal>
  )
}

export default Modal
