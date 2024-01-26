import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import "./PhotoProducts.css";
import DigitalImageImg from "/src/Images/Family/fam_l_10.jpg";
import AlbumImg from "/src/Images/Pregnant/preg_JA_1.jpg";
import BirthposterImg from "/src/Images/Prices/birthposter.jpg";
import WallImageImg from "/src/Images/Prices/canvas.jpg";
import PrintablesImg from "/src/Images/Prices/designpack.jpg";
import PhotoProductImg from "/src/Images/Prices/photocopy1.jpg";
import CardsImg from "/src/Images/Prices/takkekort.jpg";

export function PhotoProducts() {
  return (
    <>
      <div className="PhotoProducts">
        <PageSection>
          <DesignHeading>Prisliste bildeprodukter</DesignHeading>
        </PageSection>
        <PageSection>
          <p className="PhotoPrice__TopContentText">
            Mange synes at bildeprodukter som bestilles fra fotograf er dyrt i
            forhold til å bestille fra andre leverandører. Grunnen til dette er
            at kvaliteten på produktene fra trykkeriene som vi fotografer
            bruker, er mye bedre og derfor koster mer å produsere. Derfor vil
            jeg anbefale å investere i disse bildene nå, fremfor å måtte
            bestille nye produkter om noen få år.
          </p>
          <p className="PhotoPrice__TopContentText">
            Under finner du en prisliste på de ulike produktene du kan bestille
            hos meg. Om du ønsker en annen størrelse enn hva som står oppført
            eller du ønsker deg et spesifikt produkt, kan jeg sjekke opp om
            trykkeriet kan produsere det du ønsker.
          </p>
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={PhotoProductImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Bildekopier"
            text={
              <div className="ProductPriceSection__Text">
                Gi liv til de best dyrebare øyeblikkene med bildekopier av høy
                kvalitet. Min leverandør trykker hver enkelt bilde med
                presisjon, og kvalitetssjekker bildet før de sendes avgårde.
                Disse løse bildene er perfekte å ramme inn å gi bort i gave til
                den som har alt!
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 15x20cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 500,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 20x30cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 700,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 30x40cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 1000,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 40x50cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price"> Kr. 1375,-</div>
            }
            priceText5={false}
            price5={false}
          />
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={WallImageImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Veggbilder"
            text={
              <div className="ProductPriceSection__Text">
                Skap varige minner med våre førsteklasses vegg- og lerretsbilder
                av høyeste kvalitet. Våre dedikerte leverandører printer hvert
                bilde med presisjon og gjennomfører nøye kvalitetskontroller før
                de leveres til deg. Uansett om du velger trykk på lerret eller
                skumplate, tilbys begge alternativene til samme pris. Disse
                kunstverkene er ideelle for innramming og utgjør den perfekte
                gaven til dem som allerede har alt!
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Veggbilde 20x30cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 1800,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Veggbilde 30x40cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 2900,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Veggbilde 40x50cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 3500,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Veggbilde 50x70cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 4000,-</div>
            }
            priceText5={false}
            price5={false}
          />
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={AlbumImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Album"
            text={
              <div className="ProductPriceSection__Text">
                La de mest dyrebare øyeblikkene få evig liv med våre
                førsteklasses trykkede fotoalbum. Vår pålitelige leverandør
                håndterer hvert bilde med omhu og nøyaktighet, og hver side
                gjennomgår en grundig kvalitetskontroll før den blir sendt til
                deg. Disse fotoalbumene er enestående gaver å ramme inn og gi
                til noen som setter pris på det mest verdifulle.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                panorama liten - 20 sider
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 3500,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                kvadratisk 20x20 cm - 20 sider
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 5000,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                kvadratisk 25x25 cm - 20 sider
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 5500,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                kvadratisk 30x30 cm - 20 sider
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 6000,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                panorama stor - 20 sider
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 6500,-</div>
            }
          />
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={DigitalImageImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Digitale bildefiler"
            text={
              <div className="ProductPriceSection__Text">
                Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning.
                Med disse filene kan du printe så mange ganger du ønsker, lagre
                som backup eller bruke som ditt profilbilde på sosiale medier,
                men husk å kreditere meg som fotograf under bildet.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Minipakke med 3 digitale filer
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 1900,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Liten pakke med 5 digitale filer
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 2950,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Medium pakke med 10 digitale filer
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 5150,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Stor pakke med 15 digitale filer
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 7300,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Digital bildefil per stk.
              </div>
            }
            price5={<div className="ProductPriceSection__Price">Kr. 650,-</div>}
          />
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={CardsImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Takkekort"
            text={
              <div className="ProductPriceSection__Text">
                Ensidige takkekort inkluderer ditt valgte bilde og en personlig
                melding som gir en ekstra spesiell touch. Hvert kort leveres
                sammen med hvite konvolutter og er den perfekte måten å vise
                takknemlighet overfor alle som har deltatt i eller gitt gaver
                ved en betydningsfull anledning.
                <br />
                <br />
                Dere kan velge mellom et lite utvalg av design, kortene er nøye
                utformet for å forevige minnene fra din spesielle begivenhet og
                er trykket med høyeste kvalitet for å sikre at bildene kommer
                til sin fulle rett. Gi en personlig takk som varer med våre
                vakre ensidige takkekort.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                20 stk. ensidige takkekort 10x12 cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 760,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText">
                20 stk. ensidige takkekort 10x18 cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 820,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                20 stk. ensidige takkekort 16x16 cm
              </div>
            }
            price3={<div className="ProductPriceSection__Price">Kr. 850,-</div>}
            priceText4={
              <p className="Prices__TabsContentTextFees">
                Ekstra kort koster kr. 50,- per stk.
                <br />
                Ekstra bilde koster kr. 300,- per bilde på kortet
              </p>
            }
            price4={false}
            priceText5={false}
            price5={false}
          />
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={BirthposterImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Fødselsplakat"
            text={
              <div className="ProductPriceSection__Text">
                Jeg tilbyr nå personlig fødselsplakat i to ulike størrelser,
                hvor du velger om du ønsker å ha bilde på eller ikke. Du får
                mulighet til å velge blandt et lite utvalg forhåndsdefinerte
                design, og du velger selv hvilken informasjon du ønsker at skal
                være på plakaten. Disse plakatene er perfekte som dekorasjon
                under dåpsfesten eller til å henge på rommet til barnet.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Fødselsplakat u/bilde 20x30 cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 650,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Fødselsplakat m/bilde 20x30 cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 800,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Fødselsplakat u/bilde 30x40 cm{" "}
              </div>
            }
            price3={<div className="ProductPriceSection__Price">Kr. 850,-</div>}
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Fødselsplakat m/bilde 30x40 cm{" "}
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 1050,-</div>
            }
            priceText5={false}
            price5={false}
          />
        </PageSection>
        <PageSection>
          <div className="PhotoPrice__BottomDivider"></div>
        </PageSection>
        <PageSection>
          <ProductPriceSection
            outerClassName="Prices__Outer"
            reverse={true}
            imgSrc={PrintablesImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Helhetlig pakke med trykksaker til bryllup"
            text={
              <div className="ProductPriceSection__Text">
                Jeg designer gjerne en helhetlig pakke med trykksaker til deres
                store dag, enten det er jubileum, bryllup eller noe annet! De
                mest vanlige pakkene inkluderer invitasjoner, takkekort, menyer
                og bordkort.
                <br />
                <br />
                Priser varierer utifra hva dere ønsker i deres pakke, hvor mange
                dere ønsker av hver og om dere ønsker det trykket på et spesielt
                materiale. Jeg kan hjelpe dere med kun design, eller jeg kan
                levere en komplett pakke med design og ferdig trykkede
                produkter.
                <br />
                <br />
                Ta kontakt i dag for en uforpliktende prat for å avdekke deres
                ønsker, og eventuell pris.
              </div>
            }
            priceText1={false}
            price1={false}
            priceText2={false}
            price2={false}
            priceText3={false}
            price3={false}
            priceText4={false}
            price4={false}
            priceText5={false}
            price5={false}
          />
        </PageSection>
      </div>
    </>
  );
}
