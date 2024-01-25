import HeadshotsImg from "../../Images/Portrait/port_T_01.jpg";

import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import "./Headshots.css";
import ContactRoute from "/src/Routes/Contact/Route";

export function Headshots() {
  return (
    <>
      <div className="Headshots">
        <PageSection>
          <DesignHeading>Headshots / CV-foto / Profilbilde</DesignHeading>
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
            Konfirmantfotografering gir deg muligheten til å fange øyeblikkene
            som definerer denne viktige tiden i livet ditt. Uavhengig av om det
            er en tid preget av refleksjon, spenning eller feiring, har hvert
            øyeblikk sin egen spesielle betydning. Jeg er dedikert til å hjelpe
            deg med å bevare denne overgangen til ung voksen alder på en måte
            som er autentisk og meningsfull for deg. Gjennom mine bilder kan du
            se tilbake på denne spesielle tiden og gjenoppleve øyeblikkene som
            markerer din reise mot selvstendighet.
          </p>

          <img
            className="PhotoPrice__Img"
            src={HeadshotsImg}
            alt="Våken liten nyfødt"
          ></img>
        </PageSection>
        <PageSection>
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
                Online bildegalleri hvor dere velger bilder{" "}
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
            </div>{" "}
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
            Ønsker du å booke fotografering av headshots?
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
