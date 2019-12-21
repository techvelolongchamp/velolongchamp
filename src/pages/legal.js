import React from 'react'
import styled from 'styled-components'

import ThirdarySection from '../components/sections/ThirdarySection'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from '../components/Head'

const LegalContainer = styled.article`
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
`

const LegalPage = () => {
  return (
    <Layout>
      <Header noScroll />
      <Head title="Mentions légales" />
      <ThirdarySection title="Mentions légales">
        <LegalContainer>
          <h3>Editeur</h3>
          <p>
            Vélo Longchamp est une association de loi 1901 dont le siège social
            est situé au <br /> 21 rue Jasmin, 75016 Paris
            <br /> Président de l'association : Stéphane Jander
          </p>
          <h3>Hébergeur</h3>
          <p>
            Les sites www.velo-longchamp.fr et www.velo-longchamp.com sont
            hébergés par la société ZEIT, Inc, située au 1046 Kearny Street, San
            Francisco, CA 94133
          </p>
          <h3>Cookies</h3>
          <p>
            Ce site utilise Google Analytics, un service d’analyse de site
            internet fourni par Google Inc. (« Google »). Google Analytics
            utilise des cookies, qui sont des fichiers texte placés sur votre
            ordinateur, pour aider le site internet à analyser l’utilisation du
            site par ses utilisateurs. Les données générées par les cookies
            concernant votre utilisation du site (y compris votre adresse IP)
            seront transmises et stockées par Google sur des serveurs situés aux
            Etats-Unis. Google utilisera cette information dans le but d’évaluer
            votre utilisation du site, de compiler des rapports sur l’activité
            du site à destination de son éditeur et de fournir d’autres services
            relatifs à l’activité du site et à l’utilisation d’Internet. Google
            est susceptible de communiquer ces données à des tiers en cas
            d’obligation légale ou lorsque ces tiers traitent ces données pour
            le compte de Google, y compris notamment l’éditeur de ce site.
            Google ne recoupera pas votre adresse IP avec toute autre donnée
            détenue par Google. Vous pouvez désactiver l’utilisation de cookies
            en sélectionnant les paramètres appropriés de votre navigateur.
            Cependant, une telle désactivation pourrait empêcher l’utilisation
            de certaines fonctionnalités de ce site. En utilisant ce site
            internet, vous consentez expressément au traitement de vos données
            nominatives par Google dans les conditions et pour les finalités
            décrites ci-dessus.
          </p>
          <h3>Propriété intellectuelle</h3>
          <p>
            Tous les éléments du site www.velo-longchamp.com et
            www.velo-longchamp.fr, y compris les documents téléchargeables, sont
            protégés par le droit d’auteur, des marques ou des brevets. Ils sont
            la propriété exclusive de l'association Vélo Longchamp. En
            conséquence, vous ne pouvez en aucun cas et d’aucune manière,
            reproduire, représenter, diffuser, modifier, concéder tout ou partie
            de l’un quelconque des éléments reproduits sur le site et tout ou
            partie du site sans l’accord préalable et express de l'association
            Vélo Longchamp.
          </p>
          <h3>Durée</h3>
          <p>
            Les présentes conditions s’appliquent pendant toute la durée de mise
            en ligne des services offerts par Vélo Longchamp sur le site
            www.velo-longchamp.com et www.velo-longchamp.fr.
          </p>
          <h3>Loi applicable et compétence</h3>
          <p>
            Les présentes conditions sont soumises à la loi française.
            L’attribution de compétence en cas de litige, et à défaut d’accord
            amiable entre les parties, est donnée aux tribunaux français
            compétents.
          </p>
        </LegalContainer>
      </ThirdarySection>
    </Layout>
  )
}

export default LegalPage
