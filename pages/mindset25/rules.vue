<template lang="">
    <Header />
    <main class='rulesPage'>
      <section>
        <h1 class='text-center'>{{ t("rulesTitle") }}</h1>

        <h2 id="definitions">Définitions</h2>
        <p>Best-of-X - signifie qu'un set comporte un nombre X de match et que le joueur qui remporte la majorité des matchs est déclaré vainqueur.</p>
        <p>Set : on appellera ici « set » la rencontre entre les deux adversaires se disputant un nombre X de match.</p>
        <p>Match : On appellera ici « match », la rencontre entre les deux adversaires se disputant un nombre X de round.</p>
        <p>Phase Finale - désigne un tournoi fermé mettant fin à la durée du championnat et mettant en vedette les 7 joueurs les mieux classés aux points et le huitième joueur qualifié lors du last chance qualifier.</p>
        <p>Round Robin - désigne une phase du tournoi où chaque joueur joue contre tous les autres joueurs du groupe.</p>
        <p>Tournoi - un événement individuel du championnat, comprenant des événements en ligne et hors ligne.</p>
        <p>Organisateurs de tournois - l'organisateur respectif de chaque tournoi, toute entité impliquée dans la fourniture ou la remise des prix, et toute autre entité impliquée dans la mise en œuvre, la production ou la gestion d'un tournoi, en tout ou en partie.
        </p>
        <p>Gagnant - tout joueur officiellement déclaré gagnant</p>

        <h2 class="anchor" id="formatDuChampionnat">Format du championnat</h2>
        <p>Les tournois sont ouverts aux personnes âgées de dix-huit (18) ans révolus ou plus à la date de leur inscription à un tournoi. Les tournois en ligne et hors ligne sont réservés exclusivement aux résidents français.
        </p>

        <img :src="ArcWorldTour" alt="Logo Mortal Kombat 1" />
        <h3 id="format-format">Guilty Gear Strive 8</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis dolor at faucibus rutrum. Nullam blandit turpis erat, vel accumsan leo sagittis tincidunt. 
        Sed sagittis, dui sed porttitor porttitor, enim mauris porttitor massa, at sollicitudin urna augue sit amet justo. Nam a aliquam dolor. Nunc sit amet ipsum molestie, 
        pulvinar sem at, porta tortor. Phasellus maximus nibh id libero tincidunt sodales vel ut augue. Suspendisse potenti. Aenean luctus commodo tincidunt.</p>

        <p>Pellentesque vel vestibulum ligula. Suspendisse id fermentum quam, vitae feugiat dui. Pellentesque vestibulum id mi ac pulvinar. Quisque euismod tincidunt diam, 
          a mollis quam. Pellentesque nec tortor sit amet diam facilisis pellentesque eget vitae lectus. Curabitur facilisis ut ex non ultrices. Proin vitae accumsan justo. 
          Pellentesque pretium tincidunt efficitur. Sed maximus massa felis, lacinia semper massa auctor eget.</p>

        <p>Vestibulum tempor porta magna laoreet congue. Nunc bibendum fermentum orci, ut tincidunt augue tristique eu. Curabitur quis convallis quam. Quisque sagittis lorem 
          ut mauris ultrices, a pulvinar ipsum egestas. Maecenas id felis aliquet, pulvinar lectus at, viverra felis. In aliquam dictum sagittis. Praesent finibus diam eu 
          efficitur feugiat. Curabitur sodales a orci vitae porta. Nullam ut ipsum vitae libero blandit cursus. Maecenas lorem ante, dapibus ut libero porta, interdum viverra magna. 
          Phasellus at felis purus. Integer nec nulla vel mauris consequat lacinia. Aenean blandit commodo nulla sed viverra.</p>

        <h3 id="format-points">Points</h3>
        <p>Les tournois recevront des points qui seront utilisés pour classer les joueurs dans un classement de points conformément au tableau ci-dessous :</p>
        
        <h4 id="format-points-enLigne">En ligne :</h4>
        <div class="responsive-table-line mb-5">
          <table :border="1" cellPadding="1" cellSpacing="1" class="table table-body-center table-bordered table-condensed">
              <thead>
                  <tr>
                      <th><span>Placement</span></th>
                      <th><span>Online +32</span></th>
                      <th><span>Online +16</span></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><span>1er</span></td>
                      <td><span>70</span></td>
                      <td><span>45</span></td>
                  </tr>
                  <tr>
                      <td><span>2e</span></td>
                      <td><span>45</span></td>
                      <td><span>35</span></td>
                  </tr>
                  <tr>
                      <td><span>3e</span></td>
                      <td><span>35</span></td>
                      <td><span>25</span></td>
                  </tr>
                  <tr>
                      <td><span>4e</span></td>
                      <td><span>25</span></td>
                      <td><span>15</span></td>
                  </tr>
                  <tr>
                      <td><span>5e</span></td>
                      <td><span>15</span></td>
                      <td><span>5</span></td>
                  </tr>
                  <tr>
                      <td><span>7e</span></td>
                      <td><span>5</span></td>
                      <td><span></span></td>
                  </tr>
              </tbody>
          </table>
        </div>

        <h4 id="format-points-horsLigneChallenge">Hors ligne : Challenger Event</h4>
        <div class="responsive-table-line mb-5">
          <table :border="1" cellPadding="1" cellSpacing="1" class="table table-body-center table-bordered table-condensed">
              <thead>
                  <tr>
                      <th><span>Placement</span></th>
                      <th><span>Challenger +64</span></th>
                      <th><span>Challenger +32</span></th>
                      <th><span>Challenger +16</span></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><span>1er</span></td>
                      <td><span>140</span></td>
                      <td><span>110</span></td>
                      <td><span>80</span></td>
                  </tr>
                  <tr>
                      <td><span>2e</span></td>
                      <td><span>110</span></td>
                      <td><span>80</span></td>
                      <td><span>60</span></td>
                  </tr>
                  <tr>
                      <td><span>3e</span></td>
                      <td><span>80</span></td>
                      <td><span>60</span></td>
                      <td><span>40</span></td>
                  </tr>
                  <tr>
                      <td><span>4e</span></td>
                      <td><span>60</span></td>
                      <td><span>40</span></td>
                      <td><span>20</span></td>
                  </tr>
                  <tr>
                      <td><span>5e</span></td>
                      <td><span>40</span></td>
                      <td><span>20</span></td>
                      <td><span>10</span></td>
                  </tr>
                  <tr>
                      <td><span>7e</span></td>
                      <td><span>20</span></td>
                      <td><span>10</span></td>
                      <td><span>5</span></td>
                  </tr>
                  <tr>
                      <td><span>9e</span></td>
                      <td><span>10</span></td>
                      <td><span>5</span></td>
                      <td><span></span></td>
                  </tr>
              </tbody>
          </table>
        </div>

        <p>Si deux joueurs ou plus ont le même nombre de points, l'égalité de classement sera résolue en appliquant les mécanismes de départage suivants, répertoriés par ordre d'application :</p>

        <ol>
          <li>Historique des matchs saisonniers entre les joueurs</li>
          <li>Match décisif entre les deux joueurs concernés</li>
        </ol>

        <h3 id="format-finales">Phases Finales</h3>
        <p>A l'issue du classement final, les sept joueurs les mieux placés, seront qualifiés pour les phases finales. Un huitième joueur obtiendra le dernier slot après victoire lors du tournoi Last Chance Qualifier. Le positionnement au classement déterminera le seeding des phases finales :</p>

        <ul>
          <li>1er contre 8e</li>
          <li>2e contre 7e</li>
          <li>3e contre 6e</li>
          <li>4e contre 5e</li>
        </ul>

        <h3 id="format-codeDeConduite">Code de conduite</h3>
        <p>
        Tous les joueurs doivent faire preuve d'un bon esprit sportif et respecter les uns les autres ainsi que tout le personnel et 
        les spectateurs du championnat ou du tournoi. Les joueurs doivent suivre toutes les instructions de Joker Paris ou des 
        organisateurs du tournoi. Les joueurs ne peuvent pas envoyer de SMS/e-mails ou utiliser les réseaux sociaux pendant un jeu ou 
        un match. Les joueurs doivent jouer à leur meilleur niveau à tout moment au cours du Tournoi et éviter tout comportement 
        incompatible avec les principes d'esprit sportif, d'honnêteté ou de fair-play. Tout Joueur se comportant de manière inappropriée, 
        ou ne concourant pas conformément au présent règlement officiel (y compris les règles du jeu), tel que déterminé par Joker 
        Paris ou les organisateurs du tournoi à leur seule discrétion, peut être immédiatement disqualifié du championnat ou du tournoi 
        et perdre tous les prix potentiels. De plus, Joker Paris et les organisateurs du tournoi se réservent le droit, à leur seule 
        discrétion, d'interdire aux joueurs disqualifiés de tout futur tournoi ou événement organisé par Joker Paris ou les organisateurs 
        du tournoi. Les comportements considérés comme inappropriés et en violation du code de conduite comprennent : 
        </p>

        <ul>
          <li>Interférer avec le fonctionnement du Tournoi, du championnat, du Site Internet du championnat</li>
          <li>Agir de manière antisportive ou perturbatrice, ou avec l'intention de perturber ou de porter 
            atteinte au déroulement légitime du tournoi ou du championnat, ou d'ennuyer, d'abuser, de menacer 
            ou de harceler toute autre personne
          </li>
          <li>S'engager dans une collusion (par exemple, tout accord entre deux [2] joueurs ou plus ou pour prédéterminer l'issue d'un jeu ou d'un match)</li>
          <li>Tricherie de toute sorte par quelque moyen que ce soit</li>
          <li>Retarder ou ralentir intentionnellement le jeu ou altérer 
            le jeu de toute autre manière connue ou inconnue</li>
          <li>Noms d'utilisateur, avatars, logos, branding ou gamertags 
            offensants, vulgaires ou obscènes</li>
          <li>Le sexisme, l'âgisme, le racisme ou toute autre forme de 
            préjugé ou d'intolérance</li>
          <li>Les organisateurs de tournois ne doivent agir de manière immorale, contraire à l'éthique, honteuse ou contraire aux normes communes de décence</li>
          <li>S'engager dans toute activité illégale dans la juridiction où se trouve le joueur concerné</li>
          <li>Offrir tout cadeau ou récompense à un joueur, au Joker Paris ou à un organisateur de tournoi pour obtenir un avantage concurrentiel</li>
          <li>Parier ou jouer sur votre propre performance ou sur les 
            résultats du Tournoi ou de toute phase du championnat</li>
          <li>Utiliser un langage ou des vêtements obscènes, 
            grossiers, vulgaires, insultants, menaçants, abusifs, calomnieux, 
            calomnieux, diffamatoires ou autrement offensants ou répréhensibles, ou 
            qui promeuvent ou incitent à la haine ou à une conduite discriminatoire</li>
          <li>Utiliser les installations, services ou équipements du Tournoi fournis ou mis à disposition par Joker Paris 
            ou les Organisateurs du Tournoi pour publier, transmettre, diffuser ou rendre disponible de toute autre manière 
            toute communication interdite par le présent Code de conduite </li>
          <li>Entreprendre toute action ou accomplir tout geste à l'encontre 
            d'un Joueur adverse, d'un officiel ou d'un spectateur, ou inciter 
            toute autre personne à faire de même, qui serait insultant, moqueur, 
            perturbateur ou antisportif</li>
          <li>Toucher ou interférer de toute autre manière avec les lumières, 
            les caméras ou tout autre équipement de studio</li>
          <li>Se livrer à tout autre type de comportement ou de conduite jugé inapproprié par Joker Paris ou les organisateurs du tournoi, à leur seule discrétion</li>
          <li>Enfreindre autrement le présent règlement officiel.</li>
        </ul>

          <p>Tout joueur qui enfreint le code de conduite peut être disqualifié et Joker Paris se réserve le droit de demander 
            des dommages et intérêts à ce joueur dans toute la mesure permise par la loi.</p>

          <p>ATTENTION : TOUTE TENTATIVE DÉLIBÉRÉE D'ENDOMMAGER UN SITE WEB OU UN ÉQUIPEMENT UTILISÉ EN RELATION AVEC LE TOURNOI 
            OU LE CHAMPIONNAT, d'altérer le jeu du titre ou le format du tournoi, ou de porter atteinte au fonctionnement légitime 
            du CHAMPIONNAT ou d'un tournoi peut constituer une violation des lois pénales et civiles.</p>

        <h2 id="regles">RÈGLES DU JEU</h2>
        <p>Il s'agit des « Règles de jeu » régissant la manière dont le jeu pour le titre se joue pendant le tournoi.</p>

        <h3 id="regles-jouer">Jouer au jeu</h3>
        <h4 id="regles-jouer-parametres">Paramètres de jeu</h4>

        <p>Version du jeu : PlayStation 5</p>
        <p>Paramètres du jeu : Options par défaut du mode Tournoi</p>
        <p>Round: 2</p>
        <p>Match: Best of 3</p>
        <p>Minuterie : Par défaut</p>
        <p>Sélection d'arène : Désactivé</p>
        <p>Sélection d'étape - Aléatoire</p>
        <p>Wi-Fi : interdit</p>

        <h4 id="regles-jouer-procedure">Procédure de correspondance</h4>
        <p>Les étapes suivantes décrivent le processus de réalisation d'un match.</p>
        <ol>
          <li>Le joueur classé le plus haut invitera le joueur classé le plus bas.</li>
          <li>Les joueurs sélectionnent leurs personnages.</li>
          <li>Les joueurs jouent la première partie du match.</li>
          <li>Le joueur perdant du match précédent peut choisir de changer de personnage.</li>
          <li>Le jeu suivant est joué.</li>
          <li>Répétez les étapes 4 et 5 pour tous les jeux suivants jusqu'à ce que le match soit terminé.</li>
        </ol>

        <h4 id="regles-jouer-personnages">Personnages</h4>
        <p>Tous les personnages déjà rendus publics peuvent être sélectionnés pour les matchs. Toutes les versions 
          ultérieures de personnages seront considérées comme jouables dès la sortie publique des personnages.</p>

        <h4 id="regles-jouer-selectionJoueur">Sélection joueur J1/J2</h4>
        <p>Les joueurs peuvent convenir mutuellement qui joue sur le côté gauche et droit, correspondant respectivement au joueur 1 
          et au joueur 2. Si les joueurs ne parviennent pas à se mettre d'accord, le joueur le mieux classé choisit son camp.</p>

        <h3 id="regles-obligationsDeMatch">Obligations de match</h3>
        <h4 id="regles-obligationsDeMatch-ponctualiteOffline">Ponctualité Offline</h4>
        <p>Tous les joueurs doivent être physiquement présents à l'heure du début du match. Les joueurs qui ne sont pas prêts à jouer 
          dans les dix (10) minutes suivant l'heure du début du match s'exposent à des pénalités, y compris un éventuel forfait.</p>

        <h4 id="regles-obligationsDeMatch-forfaits">Forfaits</h4>
        <p>Les joueurs ne peuvent pas volontairement déclarer forfait pour un match sans autorisation préalable des organisateurs du tournoi 
          et, même avec autorisation, ils sont soumis à des sanctions supplémentaires en cas de forfait.</p>

        <h2 id="prix">Prix</h2>

        <h3 id="prix-remise">REMISE DES PRIX</h3>
        <p>Si un participant est désigné gagnant du Championnat ou d’un tournoi, il sera prévenu par e-mail, dans les dix (10) jours ouvrés suivant l’événement.</p>
        <p>Les prix seront versés conformément aux coordonnées bancaires fournies par chacun des gagnants. De ce fait les participants désignés gagnants, 
          devront communiquer leurs coordonnées complètes (nom, prénom, adresse postale, adresse e-mail valide et numéro de téléphone, IBAN, RICE) 
          par mail à hello@joker-paris.com, et ce dans un délai de dix (10) jours à seize (16) jours après réception de l’e-mail et les désignant comme gagnants.</p>

        <p>Les gagnants pourront se voir verser leur prix sous une période maximale de 30 (trente) jours ouvrés après réception de leurs coordonnées complètes.</p>

        <p>Si les coordonnées communiquées ne sont pas complètes, si elles ne sont pas communiquées à l’Organisateur ou en cas de renonciation expresse d’un gagnant 
          à son prix dans ledit délai, le prix sera perdu pour ce gagnant et demeurera acquis à l’Organisateur.</p>
        <p>Tout prix non versé et/ou retourné en cas d’information inexacte telle que renseignée par un gagnant sera perdu pour celui-ci et demeurera acquis à 
          l’Organisateur, sans que la responsabilité de celui-ci ne puisse être recherchée à cet égard.</p>

        <p>Par ailleurs, l’Organisateur décline toute responsabilité en cas d'incident ou d'accident qui 
          pourrait survenir à l'occasion de l'utilisation ou de la jouissance du prix versé.</p>

        <h3 id="prix-championnat">Prix du championnat</h3>
        <p>Joker Paris attribuera un total de dix mille euros (10 000 €) pour l'intégralité du championnat, selon le tableau suivant :</p>

        <div class="responsive-table-line mb-5">
          <table :border="1" cellPadding="1" cellSpacing="1" class="table table-body-center table-bordered table-condensed">
              <thead>
                  <tr>
                      <th colSpan="2"><span :style="{color: '#ecf0f1'}">Prix en argent permanent (EUR)</span></th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><span>Finales</span></td>
                      <td><span>5 000 € répartis sur le TOP 8 du tournoi</span></td>
                  </tr>
                  <tr>
                      <td><span>Master Event +</span></td>
                      <td><span>1500 € répartis sur le TOP 3 du tournoi</span></td>
                  </tr>
                  <tr>
                      <td><span>Master Event</span></td>
                      <td><span>1000 € (TOTAL : 2000 €) répartis sur le TOP 3 du tournoi</span></td>
                  </tr>
                  <tr>
                      <td><span>Challenger Event</span></td>
                      <td><span>500€ (TOTAL : 1500 €) répartis sur le TOP 3 du tournoi</span></td>
                  </tr>
              </tbody>
          </table>
        </div>

      </section>

      <aside class="sommaire">
        <div class='sticky mb-5'>
          <div>
            <p class='text-center text-uppercase title'>Sommaire</p>
            <ul>
              <li><a href="#definitions">Définitions</a></li>
              <li><a href="#formatDuChampionnat">Format du championnat</a>
                <ul>
                  <li><a href="#format-tournois">Tournois</a></li>
                  <li><a href="#format-format">Format</a></li>
                  <li><a href="#format-points">Points</a></li>
                  <li><a href="#format-finales">Phases Finales</a></li>
                  <li><a href="#format-codeDeConduite">Code de conduite</a></li>
                </ul>
              </li>
              <li><a href="#regles">Règles du jeu</a>
                <ul>
                  <li><a href="#regles-jouer">Jouer au jeu</a></li>
                  <li><a href="#regles-obligationsDeMatch">Obligations de match</a></li>
                  <li><a href="#regles-interruptionsDeMatch">Interruptions de match</a></li>
                  <li><a href="#regles-tricherie">Tricherie</a></li>
                  <li><a href="#regles-nomsLogosRestrictions">Noms, logos et restrictions de marque</a></li>
                  <li><a href="#regles-parrainages">Parrainages; autre contenu</a></li>
                  <li><a href="#regles-penalites">Pénalités</a></li>
                </ul>
              </li>
              <li><a href="#donnees-personelles">Modification du règlement</a></li>
              <li><a href="#cession-de-droits">Cession de droits</a></li>
              <li><a href="#prix">Prix</a>
                <ul>
                  <li><a href="#prix-remise">Remise de prix</a></li>
                  <li><a href="#prix-championnat">Prix du championnat</a></li>
                </ul>
              </li>
              <li><a href="#modification-du-reglement">Modification du règlement</a></li>
            </ul>
          </div>
        </div>
      </aside>
    </main>
  <Footer @toggle-contact="toggleContact(true)" @toggle-classement="toggleClassement(true)" />

</template>

<script setup lang="ts">
import Header from '~/components/mindset25/header/Header.vue'
import Footer from '~/components/mindset25/footer/Footer.vue'

import ArcWorldTour from '~/public/img/arcworldtour2025-2026.webp'

const { t } = useI18n()

useSeoMeta({
  title: 'Règlement du MINDSET 25',
  ogTitle: 'Règlement du MINDSET 25',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
<style lang="scss">
@use "~/assets/mindset25/css/variables";
@use '~/assets/mindset25/css/section';
@import url("~/assets/mindset25/css/index.css");

.rulesPage {
    color: white;
    background-color: rgb(36, 36, 36);
    display: flex;

    section {
        padding: 50px 50px 0;
        order: 2;
        width: fit-content;
    }

    h1 {
        margin-top: 0.83em;
    }

    h2 {
        margin-top: 0.83em;
        margin-bottom: 20px;
    }

    h3 {
        margin-top: 1em;
    }

    ul li::before {
        content: "▪";
        color: variables.$main-color;
        padding-right: 10px;
    }

    table {
        color: white;

        th {
            background-color: variables.$main-color;
        }
    }

    .sommaire {
        display: none;

        @media screen and (min-width: variables.$media-queries-desktop) {
            display: block;
            background-color: rgba(0, 0, 0, 0.7);
            position: relative;
            order: 1;

            .title {
                font-size: 35px;
                font-weight: 700;
            }

            p {
                margin-bottom: 10px;
            }


            ul li {
                font-size: 14px;

                @media screen and (min-width: variables.$media-queries-desktop-xl) {
                    font-size: 16px;
                }

                @media screen and (min-height: 540px) {
                    font-size: 14px;
                }

                @media screen and (min-height: variables.$media-queries-tablet) {
                    font-size: 16px;
                }

                ul li {
                    padding-left: 13px;
                }
            }
        }
    }

    .sticky {
        position: sticky;
        padding: 0 15px;
        top: 70px;
    }

    [id]::before {
        content: '';
        display: block;
        height: 75px;
        margin-top: -75px;
        visibility: hidden;
    }

    img {
      width: 300px;
      float: right;
    }
}
</style>

