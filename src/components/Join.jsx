import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const ButtonContainer = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.l};
`

const ButtonLink = styled(OutboundLink)`
  margin: ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-radius: 5px;
`

const JoinContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.l};

  p {
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    color: ${({ theme }) => theme.colors.defaultColor};
    padding: ${({ theme }) => theme.spacing.s} 0;
    text-align: justify;
  }

  ol {
    list-style: none;
    counter-reset: styled-counter;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  ol li {
    counter-increment: styled-counter;
    display: flex;
    align-items: center;
    margin: ${({ theme }) => theme.spacing.s} 0;
    width: 100%;
    h4 {
      line-height: 20px;
      color: ${({ theme }) => theme.colors.brandSecondary};
      font-size: ${({ theme }) => theme.fonts.large};
      font-weight: 500;
      padding-right: ${({ theme }) => theme.spacing.s};
    }
  }

  ol li::before {
    align-items: center;
    color: ${({ theme }) => theme.colors.brandSecondary};
    content: '0' counter(styled-counter);
    display: flex;
    font-family: 'Abril Fatface', serif;
    font-size: ${({ theme }) => theme.fonts.xlarge};
    font-weight: bold;
    line-height: 1;
    margin-right: ${({ theme }) => theme.spacing.s};
  }
`

const Faq = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};
  h3 {
    font-size: ${({ theme }) => theme.fonts.large};
    margin: ${({ theme }) => theme.spacing.l} 0;
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-weight: 600;
  }
`

const Question = styled.p`
  color: ${({ theme }) => theme.colors.defaultColor};
  font-size: ${({ theme }) => theme.fonts.medium};
  font-style: italic;
  font-weight: 500;
  line-height: ${({ theme }) => theme.spacing.l};
  margin-top: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s} 0;
`

const Answer = styled.p`
  font-size: ${({ theme }) => theme.fonts.medium};
  line-height: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.defaultColor};
  padding: ${({ theme }) => theme.spacing.s} 0;
  font-weight: 200;
`

const Join = () => (
  <>
    <JoinContainer>
      <p>
        Devenir membre de VELO LONGCHAMP est gratuit et ne prend que quelques
        instants:
      </p>
      <ButtonContainer>
        <ButtonLink
          href="https://www.helloasso.com/associations/velo-longchamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rejoindre l'association
        </ButtonLink>
      </ButtonContainer>

      <p>Voici 5 arguments imparables pour vous convaincre d’adhérer :</p>
      <ol>
        <li>
          <h4>
            Vous roulerez plus tôt sur un <b>anneau sécurisé et confortable</b>
             ! Car plus on est nombreux, plus on a de poids et plus vite seront
            faits les travaux d’aménagement nécessaires
          </h4>
        </li>
        <li>
          <h4>
            Votre <b>avis n’est pas moins important</b> que celui d’un autre !
            En devenant membre, vous pouvez exprimer directement vos besoins et
            vos priorités ; vous pouvez lancer une initiative qui vous tient à
            cœur ; vous pouvez voter en Assemblée Générale ; vous êtes tenu au
            courant des avancées du projet
          </h4>
        </li>
        <li>
          <h4>
            Vous pouvez <b>cumuler avec d’autres clubs</b> ! On n’est pas
            exclusif ! Vous pouvez rester membre de votre club de vélo, de
            triathlon ou autre.
          </h4>
        </li>
        <li>
          <h4>
            Vous ne roulerez <b>plus jamais seul</b> !  En nous rejoignant, vous
            allez rencontrer d’autres cyclistes qui pourront, si vous le voulez,
            vous accompagner à Longchamp. Nous allons créer des ateliers
            (initiation tandem, "premiers secours" ou "comment bichonner son
            vélo"). Nous voulons aussi mettre en place une "stammtisch"
            (rencontre informelle) tous les mois à l’anneau
          </h4>
        </li>
        <li>
          <h4>
            Vous savez que sans Longchamp, la vie serait moins belle ! On a
            tendance à l’oublier car on l’a toujours connu mais avoir Longchamp
            est une chance extraordinaire. Il faut pouvoir 
            <b>protéger et pérenniser l’anneau</b>
          </h4>
        </li>
      </ol>
    </JoinContainer>
    <Faq>
      <h3>FAQ :</h3>
      <Question>
        Qui êtes-vous et pourquoi avoir créer une association ?
      </Question>
      <Answer>
        Nous sommes des cyclistes qui roulons régulièrement sur l’anneau de
        Longchamp. Nous avons voulu créer une association pour améliorer les
        conditions de sécurité et de confort de l’anneau
      </Answer>
      <Question>
        Je n’ai pas le temps de m’engager dans l’association mais je veux la
        soutenir, dois-je adhérer ?
      </Question>
      <Answer>
        Oui ! Une fois adhérent, chacun décide du temps qu’il peut et veut
        consacrer à l’association
      </Answer>
      <Question>
        Est-ce qu’il y a des conditions pour devenir adhérent ?
      </Question>
      <Answer>
        La seule condition est de partager notre vision qu’il faut défendre et
        promouvoir l’anneau de Longchamp pour que les cyclistes puissent
        pratiquer le sport qu’ils aiment dans les meilleures conditions
      </Answer>
      <Question>
        Je fais du vélotaf par l’anneau de Longchamp, puis-je adhérer ?
      </Question>
      <Answer>
        Bien sûr ! Nous sommes davantage orientés cyclisme sportif mais nous
        avons besoin que nos membres représentent toutes les formes de cyclisme,
        y compris les vélotafeurs qui sont une part non négligeable des usagers
        de l’anneau
      </Answer>
      <Question>Je viens très rarement à Longchamp, dois-je adhérer ?</Question>
      <Answer>
        Oui ! Votre adhésion aidera à améliorer les conditions de l’anneau pour
        les cyclistes réguliers ou plus occasionnels. Un occasionnel a souvent
        de meilleures idées qu’un cycliste qui connait chaque piège de Longchamp
        (revêtement abimé, journées plus compliquées)
      </Answer>
      <Question>
        Je suis déjà membre d’un autre club, puis-je adhérer ?
      </Question>
      <Answer>
        Oui et surtout pensez à faire adhérer votre Club (pour que nous
        puissions représenter encore plus de pratiquants)Oui et surtout pensez à
        faire adhérer votre Club (pour que nous puissions représenter encore
        plus de pratiquants)
      </Answer>
    </Faq>
  </>
)

export default Join
