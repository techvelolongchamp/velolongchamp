import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import { PresentationContainer, VideoWrapper } from './Presentation.styled'

const Presentation = () => {
  const { t } = useTranslation('index')
  return (
    <PresentationContainer>
      <h3>{t('index:presentation.whoAreWe.title')}</h3>
      <p>{t('index:presentation.whoAreWe.part1')}</p>
      <p>{t('index:presentation.whoAreWe.part2')}</p>
      <p>
        <Trans i18nKey="index:presentation.whoAreWe.part3">
          text<strong>text</strong>
        </Trans>
      </p>
      <p>{t('index:presentation.whoAreWe.part4')}</p>
      <p>{t('index:presentation.whoAreWe.part5')}</p>
      <h3>{t('index:presentation.why.title')}</h3>
      <p>{t('index:presentation.why.part1')}</p>
      <p>{t('index:presentation.why.part2')}</p>
      <p>{t('index:presentation.why.part3')}</p>
      <h3>{t('index:presentation.commitments.title')}</h3>
      <ol>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.first">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.second">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.third">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.fourth">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.fifth">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.sixth">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.commitments.seventh">
              text<strong>text</strong>text
            </Trans>
          </h4>
        </li>
      </ol>
      <h3>{t('index:presentation.missions.title')}</h3>
      <ul>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.first">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.second">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.third">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.fourth">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.fifth">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.sixth">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
        <li>
          <h4>
            <Trans i18nKey="index:presentation.missions.seventh">
              text<b>text</b>text
            </Trans>
          </h4>
        </li>
      </ul>

      <h3>{t('index:presentation.video.title')}</h3>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/a6AOYfE7AeM"
          frameBorder="0"
          title={t('index:presentation.video.iframeTitle')}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
    </PresentationContainer>
  )
}

export default Presentation
