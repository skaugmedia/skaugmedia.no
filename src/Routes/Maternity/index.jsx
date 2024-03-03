import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import MaternityImg from "../../Images/Pregnant/preg_p_5.jpg";
import "./Maternity.css";
import pageName from "./PageName";
import ContactRoute from "/src/Routes/Contact/Route";

export function Maternity() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester relatert til gravidfotografering"
        canonical={location.pathname}
      />
      <div className="Maternity">
        <PageSection>
          <DesignHeading h1>Gravidfotografering</DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            Ventetiden er spennende og forventningsfylt,
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            og utrolig koselig å se tilbake på i ettertid.
          </div>

          <p className="PhotoPrice__TopContentText">
            Graviditeten er en reise fylt med spennende forandringer og
            forventning, og fra uke 30 kommer den endelige etappen i denne
            bemerkelsesverdige reisen. Hvert stadium av graviditeten har sin
            egen spesielle sjarm og skjønnhet, og i denne fasen av graviditeten
            uttrykker du styrken og skjønnheten ved å bære ditt kommende barn.
          </p>
          <img
            className="PhotoPrice__Img"
            src={MaternityImg}
            alt="To forventningsfylte som snart blir foreldre"
          ></img>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__Choice">
            Du kan velge mellom å booke kun fotografering
          </div>
          <div className="PhotoPrice__PackageBoxRowShoot">
            <div className="PhotoPrice__PackageBoxShoot">
              <div className="PhotoPrice__PackageBoxHeading">
                GRAVIDFOTOGRAFERING
              </div>
              <div className="PhotoPrice__PackageBoxSubHeading">
                opptil 1 time fotografering, med 10% rabatt på alle
                bildeprodukter
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
                20 minutter fotografering, med 3 digitale bildefiler inkludert
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
                Fotografering sammen med partner og barn
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Lån av gravidkjoler er inkludert i prisen
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
                Fotografering sammen med partner og barn
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Lån av gravidkjoler er inkludert i prisen
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
                Laminert fotografi i ramme 30x40 cm
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 5699,-</div>
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
                Fotografering sammen med partner og barn
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Lån av gravidkjoler er inkludert i prisen
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
            Ønsker du å booke gravidfotografering?
          </div>
          <NavLink
            to={`/${ContactRoute}`}
            className="PhotoPrice__BookingButton"
          >
            Trykk her for å booke
          </NavLink>
        </PageSection>
      </div>
    </>
  );
}
