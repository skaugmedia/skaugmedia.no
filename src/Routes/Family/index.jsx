import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import FamilyImg1 from "../../Images/Family/fam_e_3.jpg";
import FamilyImg from "../../Images/Family/fam_h_3.jpg";
import FamilyImg2 from "../../Images/Family/fam_h_6.jpg";
import "./Family.css";
import pageName from "./PageName";
import Gallery from "/src/Data/Photography/Family";
import ContactRoute from "/src/Routes/Contact/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

export function Family() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester relatert til fotografi av familier."
        canonical={location.pathname}
      />
      <div className="Family">
        <PageSection>
          <DesignHeading h1>Familiefotografering</DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            Familie er det kjæreste vi har,
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            bilder av de du er glade i er så utrolig viktig!
          </div>

          <p className="PhotoPrice__TopContentText">
            Familien er hjertet av livet ditt, og hvert øyeblikk sammen utgjør
            en unik del av din reise. Familiefotografering gir deg muligheten
            til å fange disse øyeblikkene som definerer din families historie.
            Det handler om å formidle kjærlighet, samhørighet og øyeblikk som
            skaper de mest dyrebare minnene. Familiefotografering handler om å
            fange øyeblikkene som definerer din families historie, uansett om
            det er en spontan lek i parken, en hengivenhetserklæring eller en
            enkel sammenkomst.
          </p>
          <p className="PhotoPrice__TopContentText">
            Søskenfotografering, parfotografering, mommy & me og daddy & me går
            alle inn under denne fotograferingen. Under en familiefotografering
            fanger jeg så mange øyeblikk jeg kan, hele familien samlet, mor og
            far, søsken sammen, far og barn sammen og mor og barn sammen.
          </p>

          <img
            className="PhotoPrice__Img"
            src={FamilyImg}
            alt="En herlig liten familie ute i skogen"
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
            Du kan velge mellom å booke kun fotografering
          </div>
          <div className="PhotoPrice__PackageBoxRowShoot">
            <div className="PhotoPrice__PackageBoxShoot">
              <div className="PhotoPrice__PackageBoxHeading">
                FAMILIEFOTOGRAFERING
              </div>
              <div className="PhotoPrice__PackageBoxSubHeading">
                opptil 1 time fotografering, inkludert en visningstime 1-3 uker
                etter fotograferingen
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 1499,-</div>
            </div>

            <div className="PhotoPrice__ShootDivider"></div>
            <div className="PhotoPrice__PackageBoxShoot">
              <div className="PhotoPrice__PackageBoxHeading">
                MINIFOTOGRAFERING
              </div>
              <div className="PhotoPrice__PackageBoxSubHeading">
                20 minutter utendørs fotografering på Jessheim, med 3 digitale
                bildefiler inkludert
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 1400,-</div>
            </div>
          </div>
          <div className="PhotoPrice__Choice">
            eller du kan booke en av disse pakkene:
          </div>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__PackageBoxRow">
            <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package1">
              <div className="PhotoPrice__PackageBoxHeader">
                <div className="PhotoPrice__PackageBoxHeading">Pakke 1</div>
                <div className="PhotoPrice__PackageBoxSubHeading">
                  den digitale pakken
                </div>
              </div>
              <div className="PhotoPrice__PackageBoxText">
                1 time fotografering på valgfri lokasjon
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Visningstime 1-3 uker etter fotograferingen
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                10 høyoppløselige bildefiler
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 4299,-</div>
            </div>
            <div className="PhotoPrice__ResponsiveDivider"></div>
            <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package2">
              <div className="PhotoPrice__PackageBoxHeader">
                <div className="PhotoPrice__PackageBoxHeading">Pakke 2</div>
                <div className="PhotoPrice__PackageBoxSubHeading">
                  den vegghengte pakken
                </div>
              </div>
              <div className="PhotoPrice__PackageBoxText">
                1 time fotografering på valgfri lokasjon
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Visningstime 1-3 uker etter fotograferingen
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>

              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">Lerret 20x30 cm</div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">Lerret 40x50 cm</div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 5899,-</div>
            </div>
            <div className="PhotoPrice__ResponsiveDivider"></div>
            <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package3">
              <div className="PhotoPrice__PackageBoxHeader">
                <div className="PhotoPrice__PackageBoxHeading">Pakke 3</div>
                <div className="PhotoPrice__PackageBoxSubHeading">
                  den minnefylte pakken
                </div>
              </div>
              <div className="PhotoPrice__PackageBoxText">
                1 time fotografering på valgfri lokasjon
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Visningstime 1-3 uker etter fotograferingen
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                10 digitale bildefiler
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Album 20x20 cm med 10 stk. bilder
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">Lerret 20x30 cm</div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 7099,-</div>
            </div>
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
            Ønsker du å booke familiefotografering?
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
              src={FamilyImg1}
              alt="Far og sønn som har det gøy i skogen"
            ></img>
            <img
              className="PhotoPrice__GalleryImage"
              src={FamilyImg2}
              alt="Mor, far og datter som går vekk fra kameraet i skogen."
            ></img>
          </div>
        </PageSection>
      </div>
    </>
  );
}
