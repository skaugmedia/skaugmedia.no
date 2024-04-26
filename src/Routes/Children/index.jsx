import { NavLink, useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import ChildrenImg2 from "../../Images/Kids/H_6.jpg";
import ChildrenImg from "../../Images/Kids/LG_01.jpg";
import ChildrenImg1 from "../../Images/Kids/LP_7.jpg";
import "./Children.css";
import pageName from "./PageName";
import Gallery from "/src/Data/Photography/Kids";
import ContactRoute from "/src/Routes/Contact/Route";
import PhotographyRoute from "/src/Routes/Photography/Route";

export function Children() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Produkter og tjenester relatert til fotografi av barn og småbarn"
        canonical={location.pathname}
      />
      <div className="Children">
        <PageSection>
          <DesignHeading h1>Barnefotografering</DesignHeading>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__TopContentHeader">
            De første årene flyr avgårde,
          </div>
          <div className="PhotoPrice__TopContentSubHeader">
            husk å stoppe tiden i bilder!
          </div>

          <p className="PhotoPrice__TopContentText">
            En spennende reise begynner fra tidlig barndom til ung voksen alder,
            det er ideelt å fotografere barnet ditt jevnlig for å fange deres
            utvikling, men jeg forstår at tiden kan være begrenset. Derfor
            tilbyr jeg barnefotografering for alle alderstrinn, helt fra de er
            fylt seks måneder og opp til konfirmasjonstid. Hver alderstrinn har
            sin egen unike sjarm og personlighet, og jeg er dedikert til å fange
            disse øyeblikkene på en måte som er autentisk og meningsfull for
            deg.
          </p>

          <p className="PhotoPrice__TopContentText">
            Jeg anbefaler at 1-årsfotografering gjennomføres rundt din baby's
            første bursdag, da dette ofte er en tid fylt med smil, latter og
            nysgjerrighet. Likevel, hvis tiden ikke strekker til og du ønsker å
            dokumentere dette spesielle øyeblikket senere, er det også mulig.
            Det vil være mulig å velge 1-års fotografering med eller uten
            cake-smash.
          </p>
          <p className="PhotoPrice__TopContentText">
            Ønsker du 1-års fotografering med cakesmash? Kake til cake-smash
            koster kr. 800,-
          </p>

          <img
            className="PhotoPrice__Img"
            src={ChildrenImg}
            alt="Herlig baby i blomstereng"
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
                BARNEFOTOGRAFERING
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
                Lån av klær er inkludert i prisen
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
                Lån av klær er inkludert i prisen
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
                Visningstime 1-3 uker etter fotograferingen
              </div>
              <div className="PhotoPrice__PackageBoxDivider"></div>
              <div className="PhotoPrice__PackageBoxText">
                Lån av klær er inkludert i prisen
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
            Ønsker du å booke barnefotografering?
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
              src={ChildrenImg1}
              alt="En liten gutt som studerer epler utendørs."
            ></img>
            <img
              className="PhotoPrice__GalleryImage"
              src={ChildrenImg2}
              alt="En herlig jente som er veldig blid og fornøyd."
            ></img>
          </div>
        </PageSection>
      </div>
    </>
  );
}
