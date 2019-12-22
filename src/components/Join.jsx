import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import {
  ButtonContainer,
  ButtonLink,
  JoinContainer,
  Faq,
  Question,
  Answer,
} from './Join.styled'

const Join = () => {
  const { t } = useTranslation()
  return (
    <>
      <JoinContainer>
        <p>{t('index:joinUs.joinMessage')}</p>
        <ButtonContainer>
          <ButtonLink
            href="https://www.helloasso.com/associations/velo-longchamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common:header.clickJoin')}
          </ButtonLink>
        </ButtonContainer>

        <p>{t('index:joinUs.reasonToJoin.title')}</p>
        <ol>
          <li>
            <h4>
              <Trans i18nKey="index:joinUs.reasonToJoin.first">
                text<b>text</b>text
              </Trans>
            </h4>
          </li>
          <li>
            <h4>
              <Trans i18nKey="index:joinUs.reasonToJoin.second">
                text<b>text</b>text
              </Trans>
            </h4>
          </li>
          <li>
            <h4>
              <Trans i18nKey="index:joinUs.reasonToJoin.third">
                text<b>text</b>text
              </Trans>
            </h4>
          </li>
          <li>
            <h4>
              <Trans i18nKey="index:joinUs.reasonToJoin.fourth">
                text<b>text</b>text
              </Trans>
            </h4>
          </li>
          <li>
            <h4>
              <Trans i18nKey="index:joinUs.reasonToJoin.fifth">
                text<b>text</b>text
              </Trans>
            </h4>
          </li>
        </ol>
      </JoinContainer>
      <Faq>
        <h3>{t('index:joinUs.faq.title')}</h3>
        <Question>{t('index:joinUs.faq.firstQuestion')}</Question>
        <Answer>{t('index:joinUs.faq.firstAnswer')}</Answer>
        <Question>{t('index:joinUs.faq.secondQuestion')}</Question>
        <Answer>{t('index:joinUs.faq.secondAnswer')}</Answer>
        <Question>{t('index:joinUs.faq.thirdQuestion')}</Question>
        <Answer>{t('index:joinUs.faq.thirdAnswer')}</Answer>
        <Question>{t('index:joinUs.faq.fourthQuestion')}</Question>
        <Answer>{t('index:joinUs.faq.fourthAnswer')}</Answer>
        <Question>{t('index:joinUs.faq.fifthQuestion')}</Question>
        <Answer>{t('index:joinUs.faq.fifthAnswer')}</Answer>
        <Question>{t('index:joinUs.faq.sixthQuestion')}</Question>
        <Answer>{t('index:joinUs.faq.sixthAnswer')}</Answer>
      </Faq>
    </>
  )
}

export default Join
