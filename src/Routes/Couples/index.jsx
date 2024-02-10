import ConfirmationImg from "../../Images/Confirmation/conf_SV_4.jpg";

import { NavLink } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import "./Couples.css";
import ContactRoute from "/src/Routes/Contact/Route";

export function Couples() {
  return (
    <>
      <div className="Couples">
        <PageSection>
          <DesignHeading>Parfotografering</DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            I kjærlighetens navn,
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            skap minner som varer livet ut!
          </div>

          <p className="PhotoPrice__TopContentText">
            For par er kjærlighetshistorien deres en reise, og hvert øyeblikk
            sammen utgjør en viktig del av den. Parfotografering gir dere
            muligheten til å fange de hjertevarme øyeblikkene som definerer
            deres unike kjærlighetshistorie. Det handler om å formidle
            kjærlighet, samhørighet og øyeblikk som skaper de mest dyrebare
            minner. Uansett om det er en spontan klem i parken, et
            kjærlighetsblikk som sier mer enn tusen ord eller en enkel romantisk
            kveld sammen, har hvert øyeblikk i deres forhold sin egen unike
            betydning. Parfotografering handler om å fange disse øyeblikkene som
            definerer deres reise som et par.
          </p>

          <img
            className="PhotoPrice__Img"
            src={ConfirmationImg}
            alt="Våken liten nyfødt"
          ></img>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__Choice">
            Du kan velge mellom å booke kun fotografering
          </div>
          <div className="PhotoPrice__PackageBoxRowShoot">
            <div className="PhotoPrice__PackageBoxShoot">
              <div className="PhotoPrice__PackageBoxHeading">
                PARFOTOGRAFERING
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
                1 time parfotografering på valgfri lokasjon
              </div>

              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder{" "}
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                10 høyoppløselige bildefiler{" "}
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                15% ekstra rabatt på bildeprodukter{" "}
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxPrice">Kr. 4299,-</div>
            </div>
            <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package2">
              <div className="PhotoPrice__PackageBoxHeader">
                <div className="PhotoPrice__PackageBoxHeading">Pakke 2</div>
                <div className="PhotoPrice__PackageBoxSubHeading">
                  den vegghengte pakken
                </div>
              </div>
              <div className="PhotoPrice__PackageBoxText">
                1 time parfotografering på valgfri lokasjon
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>

              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder{" "}
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
            <div className="PhotoPrice__PackageBox PhotoPrice__PackageBox--Package3">
              <div className="PhotoPrice__PackageBoxHeader">
                <div className="PhotoPrice__PackageBoxHeading">Pakke 3</div>
                <div className="PhotoPrice__PackageBoxSubHeading">
                  den minnefylte pakken
                </div>
              </div>
              <div className="PhotoPrice__PackageBoxText">
                1 time parfotografering på valgfri lokasjon
              </div>

              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Online bildegalleri hvor dere velger bilder{" "}
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
            Ønsker du å booke parfotografering?
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
