import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ThirdarySection from '../sections/ThirdarySection'
import Layout from '../Layout'
import Header from '../Header'
import Head from '../Head'

const RulesContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 600;
    margin: ${({ theme }) => theme.spacing.l} 0;
  }

  ul {
    color: ${({ theme }) => theme.colors.defaultColor};
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    list-style-position: inside;
  }

  p {
    color: ${({ theme }) => theme.colors.defaultColor};
    font-size: ${({ theme }) => theme.fonts.medium};
    line-height: ${({ theme }) => theme.spacing.l};
    padding: ${({ theme }) => theme.spacing.s} 0;
    text-align: justify;

    &.approve {
      display: flex;
      align-items: center;
      font-weight: bold;
      position: relative;
      margin-left: 20px;
      svg {
        position: absolute;
        left: -20px;
        width: 14px;
        height: 14px;
      }
    }
  }
`

const DownloadButton = styled.a`
  background: ${({ theme }) => theme.colors.brandSecondary};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.large};
  padding: ${({ theme }) => theme.spacing.s};

  @media screen and (max-width: 640px) {
    font-size: ${({ theme }) => theme.fonts.medium};
  }
`

const DownloadContainer = styled.div`
  margin: 10px 0;
  text-align: center;
`

const StatutsPage = ({ lng }) => {
  return (
    <Layout lng={lng}>
      <Header noScroll lng={lng} />
      <Head title="Statuts Association" url="/statuts" lng={lng} />
      <ThirdarySection title="Statuts de l'association Vélo Longchamp" useH1>
        <RulesContainer>
          <h3>Article 1er - Constitution</h3>
          <p>
            Il est fondé entre les adhérents aux présents statuts une
            association régie par la loi du 1er juillet 1901 et le décret du 16
            août 1901, ayant pour titre Vélo Longchamp.
          </p>
          <h3>Article 2 - Objet de l'Association</h3>
          <p>
            L'association Vélo Longchamp a pour objet la défense et la promotion
            du cyclisme sur l'anneau de Longchamp.
          </p>
          <p>Les missions de l'association sont, notamment, de :</p>

          <ul>
            <li>
              Porter les besoins des cyclistes auprès des autorités publiques et
              des organismes privés qui gèrent le site
            </li>
            <li>
              Contribuer à l'élaboration de règles de bonnes conduites pour les
              différents usagers de l'anneau, et de bonnes pratiques pour
              l'aménagement d'un anneau de vitesse
            </li>
            <li>
              Promouvoir l'initiation au cyclisme sur l'anneau, en particulier à
              destination des enfants, des adultes débutants, et des pratiquants
              handisports
            </li>
            <li>
              Organiser ou co-organiser des évènements sportifs ou récréatifs
              sur l'anneau de Longchamp
            </li>
            <li>
              Encourager l'usage du vélo et réduire celui de la voiture, en
              particulier dans le bois de Boulogne
            </li>
            <li>
              Pérenniser la vocation sportive du site, en particulier comme
              anneau de vitesse pour les cyclistes.
            </li>
          </ul>

          <h3>Article 3 : Siège Social</h3>
          <p>
            Le siège social est fixé chez Éric Dupond, FG/DFA, CO Orange S.A. 21
            rue jasmin, 75016 Paris
          </p>
          <p>
            Il pourra être transféré par simple décision du conseil
            d'administration.
          </p>
          <h3>Article 4 : Membres</h3>
          <p>L'association se compose de :</p>

          <ul>
            <li>
              Membres adhérents : personnes physiques à jour de leur cotisation
            </li>
            <li>
              Membres associés : personnes morales à jour de leur cotisation
            </li>
            <li>
              Membres honoraires : personnes physiques ayant oeuvré de manière
              fondamentale au succès de l'association. Désignées par l'assemblée
              générale, elles sont dispensées de cotisation
            </li>
          </ul>

          <h3>Article 5 : Radiation</h3>
          <p>La qualité de membre de l'association se perd par :</p>

          <ul>
            <li>La démission ou le décès</li>
            <li>
              La radiation prononcée par le conseil d'administration pour motif
              grave
            </li>
          </ul>

          <h3>Article 6 : Affiliation</h3>
          <p>
            L'association peut adhérer à d'autres associations par décision du
            conseil d'administration.{' '}
          </p>
          <h3>Article 7 : Ressources</h3>
          <p>Les ressources de l'association comprennent:</p>

          <ul>
            <li>
              Le montant des dons et des cotisations. Le barème des cotisations
              est fixé par l'assemblée générale
            </li>
            <li>Les subventions</li>
          </ul>

          <h3>Article 8 : Conseil d'Administration</h3>
          <p>
            L'association est dirigée par un Conseil d'Administration qui peut
            comprendre jusqu'à 9 membres. Ils sont élus pour 1 an par
            l'Assemblée Générale et sont rééligibles.
          </p>
          <p>
            Le conseil d'administration choisit parmi ses membres un Bureau
            comprenant a minima :
          </p>

          <ul>
            <li>Un Présiden</li>
            <li>Un Secrétaire général</li>
            <li>Un Trésorier</li>
          </ul>

          <p>
            En cas de vacance, le Conseil d'Administration peut pourvoir
            provisoirement au remplacement de ses membres. Les pouvoirs des
            membres ainsi élus prennent fin à la date à laquelle devait
            normalement expirer le mandat des membres remplacés.
          </p>
          <p>
            Toute décision d'ester en justice ou de se porter parte civile doit
            être approuvée par le Conseil d'Administration, qui mandate alors le
            Président pour représenter l'association.
          </p>
          <h3>Article 9 : Réunions du Conseil d'Administration</h3>
          <p>
            Le Conseil d'Administration se réunit au moins une fois par an, sur
            convocation du Président, ou sur demande d'au moins la moitié de ses
            membres.
          </p>
          <p>
            Les membres ne pouvant pas participer à la réunion peuvent se faire
            représenter par un autre membre. Un membre peut représenter au
            maximum trois membres en plus de lui-même.
          </p>
          <p>
            Les décisions sont prises à la majorité absolue des voix des membres
            présents et représentés. En cas d'égalité, la voix du Président est
            prépondérante. Pour les votes, chaque membre a une voix, plus une
            voix par membre représenté.
          </p>
          <p>
            Tout membre qui, sans excuse, n'aura pas assisté à trois réunions
            consécutives pourra être considéré comme démissionnaire
          </p>
          <h3>Article 10 : Assemblée Générale Ordinaire</h3>
          <p>
            L'Assemblée Générale ordinaire se réunit au moins une fois par an.
            Une convocation doit être envoyée au moins quinze jours avant la
            date de réunion par le Bureau.
          </p>
          <p>
            Un membre de l'Assemblée Générale ordinaire peut représenter au
            maximum trois membres en plus de lui-même.
          </p>
          <p>
            L'Assemblée Générale ordinaire comprend tous les membres de
            l'association. Les membres ne pouvant pas participer à l'assemblée
            peuvent se faire représenter par un autre membre. Un membre peut
            représenter au maximum trois membres en plus de lui-même.
          </p>
          <p>
            Les décisions sont prises à la majorité absolue des voix des membres
            présents et représentés. En cas d'égalité, la voix du Président est
            prépondérante. Pour les votes, chaque membre a une voix, plus une
            voix par membre représenté.
          </p>
          <p>
            Le Président, assisté des membres du Conseil d'Administration,
            dirige l'Assemblée Générale ordinaire. Le trésorier présente les
            comptes et soumet le bilan à l'approbation de l'assemblée. Après
            épuisement de l'ordre du jour, l'assemblée élit le nouveau Conseil
            d'Administration.
          </p>
          <p>
            Les minutes de l'Assemblée Générale ordinaires sont approuvées par
            le Président puis diffusées à l'ensemble des adhérents. Les
            décisions s'imposent à tous les membres y compris les membres
            absents ou représentés.
          </p>
          <h3>Article 11 : Assemblée Générale Extraordinaire</h3>
          <p>
            Si besoin est, ou sur demande d'au moins la moitié des adhérents de
            l'association, une Assemblée Générale extraordinaire peut être
            convoquée par le Bureau. Une telle assemblée doit suivre les
            formalités prévues par l'article 10.
          </p>
          <h3>Article 12 : Règlement Intérieur</h3>
          <p>
            Un règlement intérieur peut être établi par le Conseil
            d'Administration qui le fait alors approuver par l'Assemblée
            Générale. Ce règlement, le cas échéant, précise certains points des
            statuts.
          </p>
          <h3>Article 13 : Dissolution</h3>
          <p>
            En cas de dissolution prononcée par les deux tiers au moins des
            adhérents présents ou représentés à l'Assemblée Générale, un ou
            plusieurs liquidateurs sont nommés par celle-ci, et l'actif, s'il a
            lieu, est dévolu conformément à l'article 9 de la loi du 1er juillet
            1901 et au décret du 16 août 1901.
          </p>

          <DownloadContainer>
            <DownloadButton href="20191204_Statuts_vf_signes.pdf" download>
              Télécharger la version signée des statuts
            </DownloadButton>
          </DownloadContainer>
        </RulesContainer>
      </ThirdarySection>
    </Layout>
  )
}

StatutsPage.propTypes = {
  lng: PropTypes.string.isRequired,
}

export default StatutsPage
