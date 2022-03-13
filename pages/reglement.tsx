import React from 'react'
import styled from 'styled-components'
import { FiCheckSquare } from 'react-icons/fi'

import Head from '../components/Head'
import Layout from '../components/ui/Layout'
import Header from '../components/ui/Header'

import ThirdarySection from '../components/sections/ThirdarySection'

const RulesContainer = styled.article`
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    color: ${({ theme }) => theme.colors.brandTertiary};
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: 600;
    margin: ${({ theme }) => theme.spacing.l} 0;
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

const RulePage = () => {
  return (
    <Layout>
      <Head title="Règlement de l'événement Vivre vélo au féminin" />
      <Header />
      <ThirdarySection
        title="Règlement de l'événement Vivre vélo au féminin organisé le 19 septembre 2020 sur l'anneau cyclable de Longchamp"
        useH1
      >
        <RulesContainer>
          <p>
            Suite à la parution du décret n° 2012-312 du 5 mars 2012, relatif
            aux manifestations sportives sur les voies publiques ou ouvertes à
            la circulation publique modifiant le Code du sport ; à l’arrêté
            d’application du 3 mai 2012 relatif aux manifestations sportives sur
            les voies publiques ou ouvertes à la circulation publique ; à la
            circulaire interministérielle du 2 août 2012 concernant
            l’application du décret n° 2012-312 du 5 mars 2012, cité ci-dessus.
            Règlement validé par le ministère des Sports, après avis du
            ministère de l’Intérieur.
          </p>
          <h3>1. PREAMBULE</h3>
          <p>
            “Vivre vélo au féminin” est organisé par la Fédération Française de
            Cyclisme (FFC) et l’association Vélo Longchamp (VL). “Vivre vélo au
            féminin” se conforme aux règles techniques et de sécurité édictée
            par la FFC.
          </p>
          <h3>2. DEFINITION</h3>
          <p>
            “Vivre vélo au féminin” est une randonnée de cyclotourisme sur voie
            cyclable (anneau cyclable de Longchamp). Dans le strict respect du
            Code de la route et des règlements pris par les autorités de police
            compétentes, sans priorité de passage ni mise en place de
            signaleurs, sans classement ni mesure de performance. Le respect de
            l’environnement s’impose à tous les pratiquants. Le parcours n’est
            ni imposé, ni fléché.
          </p>
          <h3>3. DESCRIPTION</h3>
          <p>
            “Vivre vélo au féminin” propose des parcours cyclistes et des
            ateliers d’apprentissage du vélo de route en peloton. L’objectif de
            “Vivre vélo au féminin” est la promotion du cyclisme féminin
            l’encouragement de la mixité.
          </p>
          <h3>4. REGIME ADMINISTRATIF</h3>
          <p>
            Les organisations de “Vivre vélo au féminin” sont soumis au régime
            de la déclaration préalable en préfecture(s) codifiée dans la partie
            réglementaire du Code du sport suivant les dispositions décrites
            ci-dessous.
          </p>
          <h3>5. TEXTES REGLEMENTAIRES</h3>
          <p>
            • Code du sport - Décret n° 2007-1133 du 24 juillet 2007- (titre III
            - Manifestations sportives - section 4 intitulée : épreuves et
            compétitions sportives sur la voie publique.
          </p>
          <p>
            • Décret n° 2012-312 du 5 mars 2012 relatif aux manifestations
            sportives sur les voies publiques ouvertes à la circulation publique
            modifiant le Code du sport.
          </p>
          <p>
            • Arrêté d’application du 3 mai 2012 relatif aux manifestations
            sportives sur les voies publiques ou ouvertes à la circulation
            publique - NOR : IOCA1222710A.
          </p>
          <p>
            • Circulaire interministérielle n° DS/2012/305 et n°
            DMAT/2012/000646 du 2 août 2012 concernant l’application du décret
            n° 2012 du 5 mars 2012 relatif aux manifestations sportives sur les
            voies publiques ou ouvertes à la circulation publique. Conformément
            au décret du 5 mars 2012 :
          </p>
          <p>
            - Art. R.331-6. − Les manifestations sportives qui se déroulent dans
            le respect du Code de la route et qui n’imposent à leurs
            participants qu’un ou plusieurs points de rassemblement ou de
            contrôle, à l’exclusion d’un horaire fixé à l’avance et de tout
            classement, en fonction notamment soit de la plus grande vitesse
            réalisée, soit d’une moyenne imposée, sur une partie quelconque du
            parcours, ne sont pas soumises à l’autorisation prévue à l’alinéa 1
            du présent article.
          </p>
          <p>
            - Art. R. 331-7. − Dans les disciplines pour lesquelles elles ont
            obtenu délégation, les fédérations délégataires édictent les règles
            techniques et de sécurité applicables aux manifestations mentionnées
            à l’article R.331-6
          </p>
          <h3>6. OBLIGATIONS DE L’ORGANISATEUR</h3>
          <p>
            6.1 - Démarches administratives : conformément à l’arrêté du 3 mai
            2012 relatif aux manifestations sportives sur les voies publiques ou
            ouvertes à la circulation publique, les organisateurs de “Vivre vélo
            au féminin” certifient avoir effectué une déclaration en préfecture
            à l’aide de l’imprimé Cerfa n° 13447*03 un mois avant la date prévue
            pour son organisation.
          </p>
          <p>
            6.2 - Assurance des organisateurs et des participants : <br />
            La FFC co organisateur de “Vivre vélo au féminin” est assuré par des
            garanties conformes aux dispositions des articles L.321-1 et L.331-9
            du Code du sport. Assurance souscrite auprès d’AXA France IARD par
            l’intermédiaire du courtier en assurance GRAS SAVOYE. Police
            d’assurance numéro 727546262604. Tous les participants à “Vivre vélo
            au féminin”, licenciés à une fédération sportive et non licenciés, y
            compris les étrangers, sont assurés par des garanties conformes aux
            dispositions des articles L.321- 1 et L.331-9 du Code du sport.
          </p>
          <h3>7. UTILISATION DE LA VOIE PUBLIQUE</h3>
          <p>
            7.1 - Choix des itinéraires : les parcours proposés par
            l’organisateur ne présentent aucun danger spécifique et n’empruntent
            que des voies cyclables. Les participants s’engagent à respecter les
            voies et emplacements réservés aux cyclistes, lorsqu’ils existent.
          </p>
          <p>
            7.2 - Flux des participants : un échelonnement des départs, facilite
            le flux des participants dans la circulation et évitent l’effet de
            peloton massif. Les groupes constitués ne pourront excéder 10
            cyclistes.
          </p>
          <p>
            7.3 - Marquage sur la voie publique : l’organisateur se conforme à
            la réglementation :
          </p>
          <p>
            • Aucun marquage à la peinture ne sera réalisé sur la chaussée.
            <br />
            • Aucun papillon, affiche ou marque ne sera apposé sur les panneaux
            réglementaires, leurs supports et tout autre équipement de
            signalisation routière ainsi que sur les ouvrages situés sur
            l’emprise du domaine routier ou surplombant celui-ci.
            <br />• Aucun panneau ou flèche ne sera cloué sur les arbres.
          </p>
          <p>
            7.4 - Routes interdites aux manifestations sportives :
            l’organisateur respecte l’arrêté interministériel publié
            annuellement et portant interdiction de certaines routes aux
            concentrations et manifestations sportives à certaines périodes de
            l’année. Les participants ne pourront ni emprunter les axes
            concernés, ni les traverser.
          </p>
          <h3>8. SÉCURITÉ ET PRÉVENTION</h3>
          <p>
            8.1 – Sécurité : sur la carte de route nominative remise à chaque
            participant, figurera :
          </p>
          <p>
            • Les règles de sécurité essentielles,
            <br />
            • Les consignes concernant les premiers soins,
            <br />• Les numéros de téléphone des secours (Pompiers, SMUR, SAMU).
          </p>
          <p>
            8.2 - Certificat médical : la présentation du certificat de non
            contre-indication n’est pas obligatoire pour participer. Toutefois,
            à titre préventif, il est recommandé aux pratiquants de passer un
            examen médical annuel préalable à toute activité sportive.
          </p>
          <p>
            8.3 - Port du casque : le port du casque à coque rigide est
            obligatoire pour tous les participants.
          </p>
          <p>
            8.4 - Circulation nocturne : les bicyclettes doivent être équipées
            conformément aux dispositions du Code de la route. Pour circuler
            hors agglomération, l’organisateur rappelle aux participants
            l’obligation du port du gilet de haute visibilité conforme à la
            réglementation en vigueur : article R 431-1-1 du Code de la route et
            articles 2 et 3 de l’arrêté du 29/9/2008.
          </p>
          <p>
            8.5 - Circulation diurne : hors agglomération et par visibilité
            insuffisante, le port du gilet de haute visibilité est obligatoire.
          </p>
          <h3>9. DEVOIRS DES PARTICIPANTS</h3>
          <p>
            9.1 – Comportement : les participants ne bénéficient en aucun cas
            d’une priorité de passage. Ils se doivent :
          </p>
          <p>
            • D’appliquer les dispositions du Code de la route et celles prises
            par les autorités locales compétentes,
            <br />• De respecter les consignes verbales et écrites de
            l’organisateur,
            <br />• D’exécuter les injonctions des services de police ou de
            gendarmerie données dans l’intérêt de la sécurité et de la
            circulation routières. La responsabilité personnelle du participant
            demeure pleine et entière au regard de ces dispositions,
            prescriptions, consignes et injonctions.
          </p>
          <p>
            9.2 - Equipement des cycles : les cycles utilisés par les
            participants sont mus exclusivement par la force musculaire, équipés
            conformément aux dispositions du Code de la route et en état de
            fonctionnement, notamment au niveau des organes de sécurité et de
            freinage.
          </p>
          <h3>10. SPÉCIFICITÉS DES PARTICIPANTS</h3>
          <p>
            10.1 - Identification des participants : une carte de route est
            remise par l’organisateur à chaque participant lors de son
            inscription.
          </p>
          <p>
            10.2 - Provenance des participants : Toute personne de nationalité
            française ou étrangère peut participer.
          </p>
          <p>
            10.3 – Âge des participants : La manifestation est réservée aux
            personnes âgées de 18 ans révolus.
          </p>
          <h3>{`En participant à l'événement :`}</h3>
          <p className="approve">
            <FiCheckSquare />
            J’ai lu et j’approuve le présent règlement.
          </p>
          <p className="approve">
            <FiCheckSquare />
            Je certifie avoir souscrit à une assurance responsabilité civile et
            maladie/accident, me garantissant de tous sinistres subis ou causés
            à des tiers de mon fait.
          </p>
          <p className="approve">
            <FiCheckSquare />
            Je certifie avoir pris connaissance du conseil délivré par
            l’organisateur concernant la vérification auprès de mon médecin
            traitant de mon aptitude actuelle à la pratique du cyclisme
            d’endurance.
          </p>
          <p className="approve">
            <FiCheckSquare />
            Je certifie avoir pris connaissance de mes obligations concernant le
            port d’un casque à coque dure.
          </p>
          <p className="approve">
            <FiCheckSquare />
            Je certifie avoir pris connaissance de mes obligations concernant le
            port du gilet de haute visibilité.
          </p>
          <p className="approve">
            <FiCheckSquare />
            Je certifie avoir pris connaissance de mes obligations concernant le
            fait de disposer d’un vélo équipé d’un phare blanc avant et d’un feu
            rouge arrière en cas de roulage de nuit.
          </p>
          <p className="approve">
            <FiCheckSquare />
            Je reconnais rester responsable de ma participation à Vivre vélo au
            féminin qu’aucune réclamation ou action de quelque nature que ce
            soit ne pourra être considérée comme recevable à l’encontre de
            l’organisateur et des partenaires.
          </p>
          <p className="approve">
            <FiCheckSquare />
            {`J'accepte que les organisateurs puissent prendre des photos de
            l'événement incluant des participantes a des fins de promotion du
            cyclisme féminin`}
          </p>
        </RulesContainer>
      </ThirdarySection>
    </Layout>
  )
}

export default RulePage
