import { useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./PhotoProducts.css";
import DigitalImageImg from "/src/Images/Family/fam_l_10.jpg";
import AlbumImg from "/src/Images/Pregnant/preg_JA_1.jpg";
import BirthposterImg from "/src/Images/Prices/birthposter.jpg";
import WallImageImg from "/src/Images/Prices/canvas.jpg";
import PrintablesImg from "/src/Images/Prices/designpack.jpg";
import PhotoProductImg from "/src/Images/Prices/photocopy1.jpg";
import CardsImg from "/src/Images/Prices/takkekort.jpg";

export function PhotoProducts() {
  const location = useLocation();
  return (
    <>
      <SkaugHelmet
        title={pageName}
        description="Prisliste for bildeprodukter som kan bestilles ved fotografi"
        canonical={location.pathname}
      />
      <div className="PhotoProducts">
        <PageSection>
          <DesignHeading h1>Prisliste bildeprodukter</DesignHeading>
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
            title="Bildekopi på fotopapir"
            text={
              <div className="ProductPriceSection__Text">
                Gi liv til de best dyrebare øyeblikkene med bildekopier av høy
                kvalitet. Min leverandør trykker hver enkelt bilde med
                presisjon, og kvalitetssjekker bildet før de sendes avgårde til
                meg, før jeg igjen sjekker at alt ser riktig ut. Disse løse
                bildene er perfekte å ramme inn å gi bort i gave til den som har
                alt!
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 14x18cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">fra Kr. 299,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 15x20cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">fra Kr. 389,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 20x20cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">fra Kr. 489,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 20x30cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">fra Kr. 599,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 30x40cm
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">fra Kr. 939,-</div>
            }
            priceText6={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 40x50cm
              </div>
            }
            price6={
              <div className="ProductPriceSection__Price">fra Kr. 1379,-</div>
            }
            priceText7={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 40x80cm
              </div>
            }
            price7={
              <div className="ProductPriceSection__Price">fra Kr. 1859,-</div>
            }
            priceText8={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 50x70cm
              </div>
            }
            price8={
              <div className="ProductPriceSection__Price">fra Kr. 2049,-</div>
            }
            priceText9={false}
            price9={false}
          />
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
            title="Trykk på skumplate"
            text={
              <div className="ProductPriceSection__Text">
                Ta godt vare på bildene dine ved å bestille spesialtilpassede
                laminerte fotopapirtrykk montert på kapa-plate. Du kan enkelt
                velge de mest minneverdige øyeblikkene og omgjøre dem til vakre
                veggbilder som vil pryde ditt hjem med personlig stil. Uansett
                om det er hjertelige familieportretter, romantiske øyeblikk
                eller naturlige skjønnheter, vil vårt høykvalitetsprodukt og
                omhyggelig håndverk gjøre hvert bilde til enestående kunstverk.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Skumplate 14x18cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 829,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText1">
                Skumplate 15x20cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 1089,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText1">
                Skumplate 20x20cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 1259,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Skumplate 20x30cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 1579,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Skumplate 30x40cm
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 1959,-</div>
            }
            priceText6={
              <div className="ProductPriceSection__PriceText">
                Skumplate 40x50cm
              </div>
            }
            price6={
              <div className="ProductPriceSection__Price">Kr. 2479,-</div>
            }
            priceText7={
              <div className="ProductPriceSection__PriceText">
                Skumplate 40x80cm
              </div>
            }
            price7={
              <div className="ProductPriceSection__Price">Kr. 2799,-</div>
            }
            priceText8={
              <div className="ProductPriceSection__PriceText">
                Skumplate 50x70cm
              </div>
            }
            price8={
              <div className="ProductPriceSection__Price">Kr. 2949,-</div>
            }
            priceText9={false}
            price9={false}
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
            imgAlt="Lerretsbilder med mor og datter"
            title="Trykk på lerret"
            text={
              <div className="ProductPriceSection__Text">
                Skap varige minner med våre førsteklasses lerretsbilder av
                høyeste kvalitet. Våre dedikerte leverandører printer hvert
                bilde med presisjon og gjennomfører nøye kvalitetskontroller før
                de leveres til deg.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Lerret 20x25cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">fra Kr. 1579,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText1">
                Lerret 20x30cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">fra Kr. 1799,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText1">
                Lerret 30x40cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">fra Kr. 2699,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Lerret 40x40cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">fra Kr. 3289,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Lerret 40x50cm
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">fra Kr. 3499,-</div>
            }
            priceText6={
              <div className="ProductPriceSection__PriceText">
                Lerret 40x80cm
              </div>
            }
            price6={
              <div className="ProductPriceSection__Price">fra Kr. 4189,-</div>
            }
            priceText7={
              <div className="ProductPriceSection__PriceText">
                Lerret 50x70cm
              </div>
            }
            price7={
              <div className="ProductPriceSection__Price">fra Kr. 4359,-</div>
            }
            priceText8={
              <div className="ProductPriceSection__PriceText">
                Lerret 60x60cm
              </div>
            }
            price8={
              <div className="ProductPriceSection__Price">fra Kr. 5749,-</div>
            }
            priceText9={
              <div className="ProductPriceSection__PriceText">
                Lerret 60x80cm
              </div>
            }
            price9={
              <div className="ProductPriceSection__Price">fra Kr. 5999,-</div>
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
            imgSrc={AlbumImg}
            imgAlt="En gravid kvinne i snøvær"
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
                S album 15x15cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">fra Kr. 2999,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                S album liggende 16x12cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">fra Kr. 3199,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                M album 20x20cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">fra Kr. 4399,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                L album 25x25 cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">fra Kr. 6499,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                XL album 30x30 cm{" "}
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">fra Kr. 8399,-</div>
            }
            priceText6={
              <div className="ProductPriceSection__PriceText">
                XL album liggende 30x22 cm{" "}
              </div>
            }
            price6={
              <div className="ProductPriceSection__Price">fra Kr. 8699,-</div>
            }
            priceText7={false}
            price7={false}
            priceText8={false}
            price8={false}
            priceText9={false}
            price9={false}
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
            imgAlt="Familie med mor og to barn"
            title="Digitale bildefiler"
            text={
              <div className="ProductPriceSection__Text">
                Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning.
                Med disse filene kan du printe så mange ganger du ønsker, lagre
                som backup eller bruke som ditt profilbilde på sosiale medier,
                men husk å kreditere meg som fotograf under bildet.
                <br />
                Det minste antallet digitale bildefiler du kan bestille er:
                pakken med 3 digitiale bildefiler. Etter kjøp av en bildepakke
                kan du kjøpe enkeltbilder for kr. 650,- per stk.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                3 digitale filer
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 2299,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                6 digitale filer
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 3799,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                10 digitale filer
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 5299,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                15 digitale filer
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 7199,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                20 digitale filer
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 7799,-</div>
            }
            priceText6={
              <div className="ProductPriceSection__PriceText">
                25 digitale filer
              </div>
            }
            price6={
              <div className="ProductPriceSection__Price">Kr. 8899,-</div>
            }
            priceText7={
              <div className="ProductPriceSection__PriceText">
                Digital bildefil per stk. etter pakke
              </div>
            }
            price7={<div className="ProductPriceSection__Price">Kr. 650,-</div>}
            priceText8={false}
            price8={false}
            priceText9={false}
            price9={false}
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
            imgAlt="Takkekort med ulike design"
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
            price1={<div className="ProductPriceSection__Price">Kr. 759,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText">
                20 stk. ensidige takkekort 10x18 cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 819,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                20 stk. ensidige takkekort 16x16 cm
              </div>
            }
            price3={<div className="ProductPriceSection__Price">Kr. 849,-</div>}
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
            imgAlt="Fødselsplakat med en herlig nyfødt"
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
            price1={<div className="ProductPriceSection__Price">Kr. 549,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Fødselsplakat m/bilde 20x30 cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 799,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Fødselsplakat u/bilde 30x40 cm
              </div>
            }
            price3={<div className="ProductPriceSection__Price">Kr. 849,-</div>}
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Fødselsplakat m/bilde 30x40 cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 1049,-</div>
            }
            priceText5={false}
            price5={false}
            priceText6={false}
            price6={false}
            priceText7={false}
            price7={false}
            priceText8={false}
            price8={false}
            priceText9={false}
            price9={false}
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
