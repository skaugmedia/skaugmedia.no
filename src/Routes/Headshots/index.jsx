import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import HeadshotsImg2 from "../../Images/Portrait/port_IM_02.jpg";
import HeadshotsImg1 from "../../Images/Portrait/port_SV_02.jpg";
import HeadshotsImg from "../../Images/Portrait/port_T_01.jpg";
import "./Headshots.css";
import pageName from "./PageName";
import Gallery from "/src/Data/Photography/Portrait";
import ContactRoute from "/src/Routes/Contact/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

export function Headshots() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester relatert til portrettfotografi, profilbilder, CV-foto og headshots"
        canonical={location.pathname}
      />
      <div className="Headshots">
        <PageSection>
          <DesignHeading h1>
            Portretter / Headshots / CV-foto / Profilbilde
          </DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            Proffesjonelle portretter
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            gjør CVen din mer attraktiv og gir deg større sannsynlighet for å få
            jobben!
          </div>

          <p className="PhotoPrice__TopContentText">
            Å søke etter jobber og karriereveier er en viktig reise, og hvert
            øyeblikk på vei til din profesjonelle suksess har sin egen unike
            betydning. CV-fotografering gir deg muligheten til å fange bildet
            som representerer deg på din aller beste måte. Min CV-fotografering
            inkluderer en 30-minutters økt, hvor vi tar oss tid til å fange det
            beste av deg. Du vil motta et digitalt bilde i både farger og
            sorthvitt, slik at du kan velge det som passer best til din CV og
            profesjonelle nettverk.
          </p>

          <img
            className="PhotoPrice__Img"
            src={HeadshotsImg}
            alt="Vakker kvinne ved vannet"
          ></img>
        </PageSection>
        <PageSection>
          <div>
            <div className="PhotoPrice__GalleryText">Gå til galleriet her:</div>
            <NavLink
              to={`/${PhotographyRoute}/${Gallery.id}`}
              className="PhotoPrice__BookingButton"
            >
              Galleri
            </NavLink>
          </div>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__Choice">
            Du kan velge mellom å booke en av disse fotograferingene
          </div>
          <div className="PhotoPrice__PackageBoxRowShoot">
            <div className="PhotoPrice__PackageBoxShoot">
              <div className="PhotoPrice__PackageBoxHeading">
                HEADSHOTS / CV-FOTO / PROFILBILDE
              </div>
              <div className="PhotoPrice__PackageBoxSubHeading">
                Proffesjonelle bilder til CV eller profilbilder til dine sosiale
                profiler
              </div>
              <div className="PhotoPrice__PackageBoxText">
                Opptil 30 minutter fotografering på valgfri lokasjon
              </div>

              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Visningtime 1-3 uker etter fotografering, om du ønsker dette
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>

              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                1 digital bildefil levert i både farger og sorthvitt
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Mulighet for å booke time hos makeup-artist LashBrowser før
                fotograferingen
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 1300,-</div>
            </div>
            <div className="PhotoPrice__ShootDivider"></div>
          </div>
          <div className="PhotoPrice__PackageBoxShoot">
            <div className="PhotoPrice__PackageBoxHeading">
              PORTRETTFOTOGRAFERING
            </div>
            <div className="PhotoPrice__PackageBoxSubHeading">
              opptil 1 time fotografering, inkludert en visningstime 1-3 uker
              etter fotograferingen
            </div>
            <div className="PhotoPrice__PackageBoxDivider"></div>
            <div className="PhotoPrice__PackageBoxPrice">Kr. 1499,-</div>
          </div>

          <div className="PhotoPrice__Choice">
            eller jeg kan skreddersy en pakkepris for deg
          </div>
        </PageSection>

        <PageSection>
          <div className="Prices__BottomSection">
            <div className="Prices__TextInfoHeader">Ønsker du delbetaling?</div>
            <div className="Prices__TextInfo">
              Du kan nå velge å delbetale om du ønsker dette, men ingen
              bildeprodukter vil bli utlevert før siste faktura er betalt. Si
              ifra når du legger inn booking, hvis du ønsker dette.
            </div>

            <div className="Prices__TextInfoHeader">
              Ønsker du fotografering etter kl. 16.00 på en hverdag?
            </div>
            <div className="Prices__TextInfo">
              Etter kl. 16.00 på en hverdag vil det alltid tilkomme et tillegg
              på kr. 400,- for alle fotograferinger.
            </div>

            <div className="Prices__TextInfoHeader">
              Ønsker du fotografering i en helg eller på en helligdag?
            </div>
            <div className="Prices__TextInfo">
              Alle helger og helligdager vil det tilkomme et helgetillegg på kr.
              700,- (unntak ved bryllupsfotografering og ved fastsatte
              minifotograferinger med dato i helg)
            </div>
            <div className="Prices__TextInfoHeader">
              Ønsker du at jeg skal komme til deg?
            </div>
            <div className="Prices__TextInfo">
              Jeg kommer gjerne til deg, men all kjøring utover 30km fra
              Jessheim, vil faktureres med kr. 10,- per km. I tillegg vil betalt
              parkering under fotograferingen faktureres i sin helhet.
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
          <div className="PhotoPrice__BookingText">
            Ønsker du å booke fotografering av headshots?
          </div>
          <NavLink
            to={`/${ContactRoute}`}
            className="PhotoPrice__BookingButton"
          >
            Trykk her for å booke
          </NavLink>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__GalleryImageBox">
            <img
              className="PhotoPrice__GalleryImage"
              src={HeadshotsImg1}
              alt="En liten gutt som studerer epler utendørs."
            ></img>
            <img
              className="PhotoPrice__GalleryImage"
              src={HeadshotsImg2}
              alt="En herlig jente som er veldig blid og fornøyd."
            ></img>
          </div>
        </PageSection>
      </div>
    </>
  );
}
