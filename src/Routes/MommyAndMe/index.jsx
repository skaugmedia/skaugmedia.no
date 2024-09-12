import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PackagePriceOld } from "../../Components/PackagePriceOld";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import MommyandmeImg3 from "../../Images/Mommy&me/dad_VL_5.jpg";
import MommyandmeImg1 from "../../Images/Mommy&me/mom_IL_4.jpg";
import MommyandmeImg2 from "../../Images/Mommy&me/mom_RL_1.jpg";
import "./MommyAndMe.css";
import pageName from "./PageName";
import Gallery from "/src/Data/Photography/Mommyandme";
import ContactRoute from "/src/Routes/Contact/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

export function MommyAndMe() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester relatert til fotografering av foreldre og barna deres."
        canonical={location.pathname}
      />
      <div className="Mommyandme">
        <PageSection>
          <DesignHeading h1>Mommy/daddy & me fotografering</DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            Barnet ditt vokser så fort,
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            så bilder med bare deg og barnet er så koselig å ha!
          </div>

          <p className="PhotoPrice__TopContentText">
            Det er noe helt spesielt med bilder som kun viser deg og barna dine
            – øyeblikk som fanger den unike kjærligheten og båndet dere deler.
            Disse bildene blir et vakkert minne om små stunder fylt med nærhet,
            latter og glede. Det er en påminnelse om tiden dere har sammen, og
            hvor verdifulle disse øyeblikkene er. Å ha bilder med bare deg og
            barna dine gir deg en mulighet til å bevare disse minnene for alltid
            – og skape noe som kan verdsettes gjennom hele livet.
          </p>

          <img
            className="PhotoPrice__Img"
            src={MommyandmeImg1}
            alt="En herlig mor med hennes sønn i solsikkeåker."
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
                Mommy & Me fotografering
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
                Mommy & Me fotografering - til markedsføring
              </div>
              <div className="PhotoPrice__PackageBoxSubHeading">
                opptil 1 time fotografering, inkludert en visningstime 1-3 uker
                etter fotograferingen, krever at bildene kan brukes til
                markedsføring
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <PackagePriceOld>Kr. 1499,-</PackagePriceOld>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 1049,-</div>
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
              <div className="PhotoPrice__PackageBoxPrice">Kr. 4999,-</div>
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

              <div className="PhotoPrice__PackageBoxText">
                Touch Art Nature 30x30cm
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Laminert bilde i ramme 40x50cm
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 6499,-</div>
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
                5 digitale bildefiler
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Bildeboks 15x20cm med 10 bilder
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Touch Art Nature sirkel 20x20cm
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 12.199,-</div>
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
              src={MommyandmeImg2}
              alt="Far og sønn som har det gøy i skogen"
            ></img>
            <img
              className="PhotoPrice__GalleryImage"
              src={MommyandmeImg3}
              alt="Mor, far og datter som går vekk fra kameraet i skogen."
            ></img>
          </div>
        </PageSection>
      </div>
    </>
  );
}
