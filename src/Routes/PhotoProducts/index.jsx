import { useLocation } from "react-router-dom";
import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { SkaugHelmet } from "../../Components/SkaugHelmet";
import pageName from "./PageName";
import "./PhotoProducts.css";
import DigitalImageImg from "/src/Images/Family/fam_hs_1.jpg";
import ImageBoxImg from "/src/Images/Newborn/l_newborn_1.jpg";
import PrintablesImg from "/src/Images/Prices/designpack.jpg";
import PhotoProductImg from "/src/Images/Prices/photocopy1.jpg";
import AlbumImg from "/src/Images/WeddingPrice/album_dark.jpg";
import BirthposterImg from "/src/Images/WeddingPrice/birthposter.jpg";
import CardsImg from "/src/Images/WeddingPrice/designpack.jpg";
import LaminatedFrameImg from "/src/Images/WeddingPrice/laminatedframe.jpg";
import LaminatedImg from "/src/Images/WeddingPrice/laminert.jpg";
import WoodPlateImg from "/src/Images/WeddingPrice/rund_treplate.jpg";
import KapaImg from "/src/Images/WeddingPrice/skumplate.jpg";

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
            imgAlt="En bildekopi i ramme av en gravid kvinne"
            title="Bildekopi på fotopapir"
            text={
              <div className="ProductPriceSection__Text">
                Bildekopier av høy kvalitet, på fotopapir. Ønsker du en annen
                størrelse, er det mulighet for at trykkeriet kan trykke din
                størrelse.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 13x18cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 399,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText1">
                Bildekopi 15x20cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 499,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 20x20cm
              </div>
            }
            price3={<div className="ProductPriceSection__Price">Kr. 599,-</div>}
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 20x30cm
              </div>
            }
            price4={<div className="ProductPriceSection__Price">Kr. 699,-</div>}
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Bildekopi 30x40cm
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 1399,-</div>
            }
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
            imgSrc={LaminatedImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Laminerte forstørrelser"
            text={
              <div className="ProductPriceSection__Text">
                Laminerte bildekopier som er montert på kartong. Disse kan
                plasseres i rammer eller de kan brukes som de er på veggen.
                Ønsker du en annen størrelse, er det mulighet for at trykkeriet
                kan trykke din størrelse.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Laminert forstørrelse 14x18cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 699,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText1">
                Laminert forstørrelse 15x20cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 899,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Laminert forstørrelse 20x30cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 1399,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Laminert forstørrelse 30x40cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 1899,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Laminert forstørrelse 40x50cm
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 2399,-</div>
            }
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
            imgSrc={KapaImg}
            imgAlt="En bildekopi i ramme av en konfirmant"
            title="Trykk på skumplate"
            text={
              <div className="ProductPriceSection__Text">
                Laminerte bildekopier montert på skumplate. Disse kan fint
                brukes direkte på veggen som er, ved å kun montere oppheng på
                baksiden. Ønsker du en annen størrelse, er det mulighet for at
                trykkeriet kan trykke din størrelse.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Skumplate 14x18cm
              </div>
            }
            price1={<div className="ProductPriceSection__Price">Kr. 699,-</div>}
            priceText2={
              <div className="ProductPriceSection__PriceText1">
                Skumplate 15x20cm
              </div>
            }
            price2={<div className="ProductPriceSection__Price">Kr. 899,-</div>}
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Skumplate 20x30cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 1399,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                Skumplate 30x40cm
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 1899,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                Skumplate 40x50cm
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 2399,-</div>
            }
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
            imgSrc={LaminatedFrameImg}
            imgAlt="Lerretsbilder med mor og datter"
            title="Laminert bilde i ramme"
            text={
              <div className="ProductPriceSection__Text">
                Du kan bestille et laminert bilde montert på kartong, og
                plassert i ramme. Du kan velge mellom en sort eller eikefarget
                treramme. Dette er en bestselger hos meg.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Laminert bilde 30x40cm i ramme
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 2399,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Laminert bilde 40x50cm i ramme
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 2999,-</div>
            }
            priceText3={false}
            price3={false}
            priceText4={false}
            price4={false}
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
            imgSrc={WoodPlateImg}
            imgAlt="Lerretsbilder med mor og datter"
            title="Trykk på rund treplate"
            text={
              <div className="ProductPriceSection__Text">
                Laminert bilde som er montert på en rund treplate. Disse kan
                også fås i andre størrelser og andre former. (Bilde som viser
                dette produktet kommer etterhvert.)
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Touch Art Nature 20x20 cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 1899,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Touch Art Nature 30x30 cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 2299,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Touch Art Nature 40x40 cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 3999,-</div>
            }
            priceText4={false}
            price4={false}
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
            imgSrc={ImageBoxImg}
            imgAlt="En gravid kvinne i snøvær"
            title="Bildeboks"
            text={
              <div className="ProductPriceSection__Text">
                En lekker bildeboks med 10 stk. laminerte bilder som gjør at du
                lett kan bytte ut dekoren i rommet. Kjøp gjerne med et staffeli
                eller en kloss til å stille dem ut med. Det er mulighet for å
                bestille boksen i ulike størrelser og med flere bilder oppi.
                (Bilde som viser dette produktet kommer etterhvert.)
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Bildeboks 15x20cm med 10 bilder
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">fra Kr. 6199,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Bildeboks 20x25cm med 10 bilder
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">fra Kr. 7499,-</div>
            }
            priceText3={
              <p className="Prices__TabsContentTextFees">
                Ekstra bilde per stk. Kr. 250,-
                <br />
                Staffeli i treverk Kr. 159,-
                <br />
                Akrylkloss med spor Kr. 199,-
                <br />
                Eikekloss med spor Kr. 219,-
              </p>
            }
            price3={false}
            priceText4={false}
            price4={false}
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
            imgSrc={AlbumImg}
            imgAlt="En gravid kvinne i snøvær"
            title="Album"
            text={
              <div className="ProductPriceSection__Text">
                La de mest dyrebare øyeblikkene få evig liv med førsteklasses
                trykkede fotoalbum. Ønsker du bilde eller preg på forsiden,
                flere sider eller en eske til å oppbevare albumet i, vil dette
                variere prisen.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                Album 15x15cm
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">fra Kr. 3199,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                Album 20x20cm
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">fra Kr. 4199,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                Album 25x25cm
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">fra Kr. 6399,-</div>
            }
            priceText4={
              <p className="Prices__TabsContentTextFees">
                Preg på cover Kr. 250,-
                <br />
                Bilde på cover Kr. 700,-
                <br />
                Eske til album Kr. 1300,-
                <br />
                Ekstra oppslag per stk. Kr. 250,-
              </p>
            }
            price4={false}
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
            imgSrc={DigitalImageImg}
            imgAlt="Familie med mor og to barn"
            title="Digitale bildefiler"
            text={
              <div className="ProductPriceSection__Text">
                Det minste antallet digitale bildefiler du kan bestille er:
                pakken med 3 digitiale bildefiler. Etter kjøp av en bildepakke
                kan du kjøpe enkeltbilder for kr. 650,- per stk. Du får bildene
                du bestiller i både farger og sorthvitt.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                3 digitale filer
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 2399,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                6 digitale filer
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 3999,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                10 digitale filer
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 5399,-</div>
            }
            priceText4={
              <div className="ProductPriceSection__PriceText">
                15 digitale filer
              </div>
            }
            price4={
              <div className="ProductPriceSection__Price">Kr. 7399,-</div>
            }
            priceText5={
              <div className="ProductPriceSection__PriceText">
                20 digitale filer
              </div>
            }
            price5={
              <div className="ProductPriceSection__Price">Kr. 8399,-</div>
            }
            priceText6={
              <div className="ProductPriceSection__PriceText">
                25 digitale filer
              </div>
            }
            price6={
              <div className="ProductPriceSection__Price">Kr. 9399,-</div>
            }
            priceText7={
              <div className="ProductPriceSection__PriceText">
                Digital bildefil per stk. etter pakke
              </div>
            }
            price7={<div className="ProductPriceSection__Price">Kr. 650,-</div>}
            priceText8={
              <p className="Prices__TabsContentTextFees">
                Ønsker du å kjøpe digitale filer av de samme bildene du har
                bestilt fysiske produkter av, koster det kr. 399,- per bilde.
              </p>
            }
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
                Dere kan velge mellom et lite utvalg av design og om du ønsker
                ensidet, tosidet eller foldekort, alle leveres med enkle
                konvolutter.
              </div>
            }
            priceText1={
              <div className="ProductPriceSection__PriceText1">
                25 stk. ensidige takkekort
              </div>
            }
            price1={
              <div className="ProductPriceSection__Price">Kr. 1199,-</div>
            }
            priceText2={
              <div className="ProductPriceSection__PriceText">
                25 stk. tosidige takkekort
              </div>
            }
            price2={
              <div className="ProductPriceSection__Price">Kr. 1399,-</div>
            }
            priceText3={
              <div className="ProductPriceSection__PriceText">
                25 stk. foldekort
              </div>
            }
            price3={
              <div className="ProductPriceSection__Price">Kr. 1799,-</div>
            }
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
                Du får mulighet til å velge blandt et lite utvalg
                forhåndsdefinerte design, og du velger selv hvilken informasjon
                du ønsker at skal være på plakaten. Disse plakatene er perfekte
                som dekorasjon under dåpsfesten eller til å henge på rommet til
                barnet.
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
            price2={<div className="ProductPriceSection__Price">Kr. 999,-</div>}
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
