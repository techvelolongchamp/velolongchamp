import React from 'react'
import styled from 'styled-components'

const PresentationContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    font-size: ${({ theme }) => theme.fonts.large};
    margin: ${({ theme }) => theme.spacing.l} 0;
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-weight: 600;
  }

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
    width: 50%;
    h4 {
      color: ${({ theme }) => theme.colors.brandSecondary};
      font-size: ${({ theme }) => theme.fonts.large};
      font-weight: 500;
      padding-right: ${({ theme }) => theme.spacing.s};
    }
    @media (max-width: 640px) {
      width: 100%;
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
    margin-right: ${({ theme }) => theme.spacing.xs};
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }

  ul li {
    counter-increment: styled-counter;
    display: flex;
    margin: ${({ theme }) => theme.spacing.s} 0;
    width: 50%;
    h4 {
      color: ${({ theme }) => theme.colors.brandSecondary};
      font-size: ${({ theme }) => theme.fonts.large};
      font-weight: 500;
      padding-right: ${({ theme }) => theme.spacing.s};
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
`

const VideoWrapper = styled.div`
  text-align: center;

  iframe {
    width: 560px;
    height: 315px;

    @media (max-width: 640px) {
      width: 100%;
      max-width: 560px;
      max-height: 315px;
      height: 100%;
      height: -moz-available;
      height: -webkit-fill-available;
      height: fill-available;
    }
  }
`

const Presentation = () => (
  <PresentationContainer>
    <h3>Qui sommes-nous ?</h3>
    <p>VELO LONGCHAMP est une association de cyclistes pour les cyclistes.</p>
    <p>
      A l’origine, nous avons porté un projet de rénovation de l’anneau de
      Longchamp dans le cadre du budget participatif Paris 2020. Grand succès
      puisque notre projet a été retenu et des fonds alloués (500 K€
      provisionnés) ! Notre mission première est de suivre ce projet pour que la
      rénovation de l’anneau soit rapide et réponde aux besoins des cyclistes.
    </p>
    <p>
      Mais notre vision est plus large et pourrait se résumer ainsi : 
      <strong>
        défendre et promouvoir l’anneau de Longchamp pour que toutes et tous,
        nous puissions faire du vélo dans les meilleures conditions.
      </strong>
    </p>
    <p>
      Ainsi, nous nous impliquons activement dans différents projets comme le
      développement de la pratique du vélo par les jeunes et le soutien de la
      pratique handisport. Rappelons qu’en étant protégé de la circulation des
      voitures, l’anneau de Lonchamp est particulièrement adapté à
      l’entrainement des sportifs handisports.
    </p>
    <p>
      Fort de l’adhésion de plusieurs centaines de membres, et de l’affiliation
      de nombreux clubs sportifs parisiens et franciliens, nous sommes fiers de
      compter dans nos rangs tous les profils et toutes les pratiques cyclistes,
      sans distinction d’âge, de genre, de niveau, ou même de type de vélo !
      Nous avons par exemple des pratiquants de tandem (certains malvoyants ou
      aveugles) et de vélo couché.
    </p>
    <h3>Pourquoi une association Vélo Longchamp ?</h3>
    <p>
      L’anneau cyclable de Lonchamp est l’un des rares et précieux endroits où
      l’on peut rouler à son rythme, en sécurité, protégé des voitures.
      D’ailleurs, c’est le segment le plus roulé de France, de très loin,
      d’après l’application Strava. C’est donc un site sportif incontournable !
    </p>
    <p>
      Comme l’anneau similaire de Vincennes (Polygone), l'anneau cyclable de
      Longchamp est devenu une véritable institution pour les cyclistes sportifs
      de Paris et de sa proche banlieue. Des centaines de cyclistes sportifs
      amateurs (et professionnels) s'y entrainent tous les jours ainsi que de
      nombreux marcheurs et coureurs à pied qui tournent en sens inverse sur son
      trottoir intérieur.
    </p>
    <p>
      Pourtant, les années passent et les conditions se dégradent : revêtement
      abimé, marquage au sol effacé, signalisation défaillante ou absente,
      conflits d'usage fréquents avec les véhicules stationnant ou entrant et
      sortant de l'hippodrome, manque de concertation avec les autres usagers.
      Il est temps de réaménager l’anneau pour que nous, et les générations
      suivantes, puissions rouler dans des conditions parfaitement sûres et
      confortables.
    </p>
    <h3>Nos engagements :</h3>
    <ol>
      <li>
        <h4>
          <strong>Sécuriser</strong> l’anneau
        </h4>
      </li>
      <li>
        <h4>
          Améliorer le <strong>confort</strong> de l’anneau
        </h4>
      </li>
      <li>
        <h4>
          <b>Représenter</b> toutes les pratiques sportives autour de l’anneau
        </h4>
      </li>
      <li>
        <h4>
          <span>Se concerter</span> avec les autres usagers
        </h4>
      </li>
      <li>
        <h4>
          Définir et rappeler les <strong>bonnes pratiques</strong> de sécurité
          pour les cyclistes
        </h4>
      </li>
      <li>
        <h4>
          <strong>Faire venir le plus grand nombre</strong> sur l’anneau
        </h4>
      </li>
      <li>
        <h4>
          <strong>Pérenniser</strong> l'anneau
        </h4>
      </li>
    </ol>
    <h3>Nos missions :</h3>
    <ul>
      <li>
        <h4>
          Suivre activement <b>le projet de rénovation de l’anneau</b>
           initié par le budget participatif 2020 de la mairie de Paris pour le
          prioritiser et s’assurer que les demandes des cyclistes sont prises en
          compte
        </h4>
      </li>
      <li>
        <h4>
          <b>Recueillir les demandes et priorités</b> des différentes pratiques
          sportives autour de l’anneau (débutants, handisport, clubs, peloton,
          triathlètes, coureurs, autre, etc.)
        </h4>
      </li>
      <li>
        <h4>
          <b>Représenter les cyclistes</b> de Longchamp auprès des autorités
          publiques et des opérateurs privés qui gèrent et exploitent le site
          (mairie Paris et ses services DVD, DEVE, mairie XVIe, Préfecture de
          Paris, France Galop, Golf ParisLongchamp, festival Solidays, festival
          Lollapalooza, Cirque de Paname, etc.)
        </h4>
      </li>
      <li>
        <h4>
          Définir des <b>règles de bonnes conduites</b> pour tous les usagers du
          site (cyclistes, conducteurs, piétons, coureurs, salariés, aire
          d’accueil, etc.)
        </h4>
      </li>
      <li>
        <h4>
          Créer des évènements pour <b>promouvoir l’anneau</b> de Longchamp
          (entraînements, initiation, courses, etc.)
        </h4>
      </li>
      <li>
        <h4>
          <b>Initier</b> à la pratique du cyclisme en accompagnant les débutants
          (enfants et adultes) et en pensant une zone dédiée à l’initiation.
          Soutenir les écoles de vélos des clubs pour les jeunes de 5-18 ans
        </h4>
      </li>
      <li>
        <h4>
          <b>Veiller à la pérennité du site</b> en suivant les opérations qui
          pourraient impacter son devenir (renégociation des conventions des
          occupants de l’hippodrome, etc.)
        </h4>
      </li>
    </ul>

    <h3>
      Decouvrez l'anneau de Longchamp avec la vidéo de Jeune Cycliste Dynamique
      :
    </h3>
    <VideoWrapper>
      <iframe
        src="https://www.youtube.com/embed/a6AOYfE7AeM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </VideoWrapper>
  </PresentationContainer>
)

export default Presentation
