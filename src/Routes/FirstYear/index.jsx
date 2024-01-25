import FirstYearImg from "../../Images/Kids/firstyear.jpg";

import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import "./FirstYear.css";
import ContactRoute from "/src/Routes/Contact/Route";

export function FirstYear() {
  return (
    <>
      <div className="FirstYear">
        <PageSection>
          <DesignHeading>Mitt første år fotografering</DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            Barnets første år går fort,
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            bestill en full pakke med 4 fotograferinger i løpet av et år!
          </div>

          <p className="PhotoPrice__TopContentText">
            Et barns første år er en reise fylt med uforglemmelige øyeblikk, og
            hvert steg på veien utgjør en unik del av deres vekst. Mitt første
            år-pakken gir deg muligheten til å forevige disse spesielle
            øyeblikkene som definerer barnets utvikling. I denne pakken handler
            om å fange hvert stadium i barnets første år, nyfødtfotografering,
            fotografering ved 4 måneders alder, 8 måneders alder og når barnet
            fyller 1år.
          </p>

          <p className="PhotoPrice__TopContentText">
            Fotograferingen gjelder kun for barnet, men om du ønsker familie- og
            søskenbilder også, koster dette kr. 500,- per fotografering.
          </p>
          <p className="PhotoPrice__TopContentText">
            1-års fotograferingen er ikke inkludert cakesmash, men om du ønsker
            dette, koster cakesmash kr. 800,-
          </p>

          <img
            className="PhotoPrice__Img"
            src={FirstYearImg}
            alt="Våken liten nyfødt"
          ></img>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__PackageBoxRowShoot">
            <div className="PhotoPrice__PackageBoxShoot">
              <div className="PhotoPrice__PackageBoxHeading">
                MITT FØRSTE ÅR FOTOGRAFERING
              </div>
              <div className="PhotoPrice__PackageBoxSubHeading">
                nyfødtfotografering, 4mnd fotografering, 8mnd fotografering og
                1-årsfotografering
              </div>
              <div className="PhotoPrice__PackageBoxText">
                2-3 timer naturlig nyfødtfotografering hjemme hos dere eller på
                valgfri lokasjon
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                4 måneders fotografering hjemme hos dere eller på valgfri
                lokasjon opptil 1 time
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                8 måneders fotografering hjemme hos dere eller på valgfri
                lokasjon opptil 1 time
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                1-års fotografering hjemme hos dere eller på valgfri lokasjon
                opptil 1 time med mulighet for cakesmash
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>

              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder{" "}
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                1 digital bildefil fra hver fotografering inkludert - totalt 4
                digitale bildefiler
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 6999,-</div>
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
            <div className="Prices__TextInfoHeader">Ønsker du cake-smash?</div>
            <div className="Prices__TextInfo">
              Ved cake-smash til fotografering av 1-åringer kommer et tillegg på
              kr. 800,-
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
              Ønsker du at jeg skal komme til deg?{" "}
            </div>
            <div className="Prices__TextInfo">
              Jeg kommer gjerne til deg, men all kjøring utover 30km fra
              Jessheim, vil faktureres med kr. 10,- per km. I tillegg vil betalt
              parkering under fotograferingen faktureres i sin helhet.{" "}
            </div>
          </div>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
          <div className="PhotoPrice__BookingText">
            Ønsker du å booke mitt første år pakken?
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
