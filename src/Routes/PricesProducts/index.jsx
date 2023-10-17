import DesignHeading from "../../Components/Headings/DesignHeading";
import { PageSection } from "../../Components/PageSection";
import { ProductPriceSection } from "../../Components/ProductPriceSection";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import pageName from "./PageName";
import "./PricesProducts.css";
import AlbumImg from "/src/Images/ProductPrices/album.jpg";
import CanvasImg from "/src/Images/ProductPrices/canvas.jpg";
import PrintPackImg from "/src/Images/ProductPrices/designpack.jpg";
import DigitalImg from "/src/Images/ProductPrices/digital_files.jpg";
import PhotocopyImg from "/src/Images/Prices/photocopy.jpg";

export function PricesProducts() {
  useDocumentTitle(pageName);
  return (
    <>
      <PageSection innerClassName="pricesProducts">
        <div className="prices-content">
          <DesignHeading className="prices-heading">{pageName}</DesignHeading>
        </div>
      </PageSection>
      <PageSection>
        <div className="Prices__Header">Gavekort</div>
        <div className="Prices__Text">
          Hos meg kan du kjøpe gaven til den som har alt- nemlig et gavekort!
          Perfekt for den kommende mammaen, besteforeldre som ønsker bilder av
          hele familien og alle de andre som ønsker å stoppe tiden! Gavekortet
          gjelder ikke for design-tjenestene mine.
          <div className="Prices__TextAdditional">
            *Minstepris ved kjøp av gavekort er kr. 100,-
          </div>
          <div className="Prices__PriceBox">
            <div className="Prices__PriceText">Valgfri sum</div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <ProductPriceSection
          outerClassName="Prices__Outer"
          imgSrc={DigitalImg}
          imgAlt="Et forlovet par"
          title={
            <div className="ProductPriceSection__Header">Digitale filer</div>
          }
          text={
            <div className="ProductPriceSection__Text">
              Om du ønsker, kan du kjøpe digitale bildefiler i høy oppløsning.
              Med disse filene kan du printe så mange ganger du ønsker, lagre
              som backup eller bruke som ditt profilbilde på sosiale medier, men
              husk å kreditere meg som fotograf under bildet.
            </div>
          }
          priceText1={
            <div className="ProductPriceSection__PriceText1">
              Minipakke med 3 digitale filer
            </div>
          }
          price1={<div className="ProductPriceSection__Price">Kr. 3600,-</div>}
          priceText2={
            <div className="ProductPriceSection__PriceText">
              Liten pakke med 5 digitale filer
            </div>
          }
          price2={<div className="ProductPriceSection__Price">Kr. 5500,-</div>}
          priceText3={
            <div className="ProductPriceSection__PriceText">
              Medium pakke med 10 digitale filer
            </div>
          }
          price3={<div className="ProductPriceSection__Price">Kr. 6800,-</div>}
          priceText4={
            <div className="ProductPriceSection__PriceText">
              Stor pakke med 15 digitale filer
            </div>
          }
          price4={<div className="ProductPriceSection__Price">Kr. 7700,-</div>}
          priceText5={
            <div className="ProductPriceSection__PriceText">
              Enkeltfiler i tillegg til pakke
            </div>
          }
          price5={<div className="ProductPriceSection__Price">Kr. 650,-</div>}
        />
      </PageSection>
      <PageSection>
        <ProductPriceSection
          outerClassName="Prices__Outer"
          imgSrc={PhotocopyImg}
          imgAlt="En bildekopi i ramme av en konfirmant"
          reverse={true}
          title={<div className="ProductPriceSection__Header">Bildekopier</div>}
          text={
            <div className="ProductPriceSection__Text">
              Gi liv til de best dyrebare øyeblikkene med bildekopier av høy
              kvalitet. Min leverandør trykker hver enkelt bilde med presisjon,
              og kvalitetssjekker bildet før de sendes avgårde. Disse løse
              bildene er perfekte å ramme inn å gi bort i gave til den som har
              alt!
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
          price2={<div className="ProductPriceSection__Price">Kr. 800,-</div>}
          priceText3={
            <div className="ProductPriceSection__PriceText">
              Bildekopi 30x40cm
            </div>
          }
          price3={<div className="ProductPriceSection__Price">Kr. 1200,-</div>}
          priceText4={
            <div className="ProductPriceSection__PriceText">
              Bildekopi 40x50cm
            </div>
          }
          price4={<div className="ProductPriceSection__Price">Kr. 2000,-</div>}
          priceText5={false}
        />
      </PageSection>
      <PageSection>
        <ProductPriceSection
          outerClassName="Prices__Outer"
          imgSrc={CanvasImg}
          imgAlt="Veggbilder av en mor og hennes barn"
          title={<div className="ProductPriceSection__Header">Veggbilder</div>}
          text={
            <div className="ProductPriceSection__Text">
              For å skape et hjem er det for mange viktig å henge opp bilder på
              veggene. Trykk på lerret og hard skumplate har samme pris, og de
              gir begge et matt utrykk. Begge typene tar seg svært bra ut på
              veggen, alene eller i klynger med flere bilder.
            </div>
          }
          priceText1={
            <div className="ProductPriceSection__PriceText1">
              Veggbilde 20x30cm
            </div>
          }
          price1={<div className="ProductPriceSection__Price">Kr. 2000,-</div>}
          priceText2={
            <div className="ProductPriceSection__PriceText">
              Veggbilde 30x40cm
            </div>
          }
          price2={<div className="ProductPriceSection__Price">Kr. 3500,-</div>}
          priceText3={
            <div className="ProductPriceSection__PriceText">
              Veggbilde 40x50cm
            </div>
          }
          price3={<div className="ProductPriceSection__Price">Kr. 4800,-</div>}
          priceText4={
            <div className="ProductPriceSection__PriceText">
              Veggbilde 50x70cm
            </div>
          }
          price4={<div className="ProductPriceSection__Price">Kr. 6700,-</div>}
          priceText5={false}
        />
      </PageSection>
      <PageSection>
        <ProductPriceSection
          outerClassName="Prices__Outer"
          imgSrc={AlbumImg}
          imgAlt="Et bilde av en herlig baby"
          reverse={true}
          title={<div className="ProductPriceSection__Header">Album</div>}
          text={
            <div className="ProductPriceSection__Text">
              Et album er en hyllest til de uforglemmelige øyeblikkene du vil se
              igjen og igjen. Hver side er en vakker reise og en fortelling bare
              albumet og dere som var til stede kan fortelle.
            </div>
          }
          priceText1={
            <div className="ProductPriceSection__PriceText1">
              panorama liten - 20 sider{" "}
            </div>
          }
          price1={<div className="ProductPriceSection__Price">Kr. 5000,-</div>}
          priceText2={
            <div className="ProductPriceSection__PriceText">
              kvadratisk 20x20 cm - 20 sider{" "}
            </div>
          }
          price2={<div className="ProductPriceSection__Price">Kr. 7000,-</div>}
          priceText3={
            <div className="ProductPriceSection__PriceText">
              kvadratisk 25x25 cm - 20 sider{" "}
            </div>
          }
          price3={<div className="ProductPriceSection__Price">Kr. 7700,-</div>}
          priceText4={
            <div className="ProductPriceSection__PriceText">
              kvadratisk 30x30 cm - 20 sider{" "}
            </div>
          }
          price4={<div className="ProductPriceSection__Price">Kr. 8500,-</div>}
          priceText5={
            <div className="ProductPriceSection__PriceText">
              panorama stor - 20 sider{" "}
            </div>
          }
          price5={<div className="ProductPriceSection__Price">Kr. 9000,-</div>}
        />
      </PageSection>
      <PageSection>
        <ProductPriceSection
          outerClassName="Prices__Outer"
          imgSrc={PrintPackImg}
          imgAlt="Takkekort fra et brudepar"
          title={
            <div className="ProductPriceSection__Header">
              helhetlig pakke med trykksaker til bryllup
            </div>
          }
          text={
            <div className="ProductPriceSection__Text">
              Jeg designer gjerne en helhetlig pakke med trykksaker til deres
              store dag, enten det er jubileum, bryllup eller noe annet! De mest
              vanlige pakkene inkluderer invitasjoner, takkekort, menyer og
              bordkort. <p />
              Priser varierer utifra hva dere ønsker i deres pakke, hvor mange
              dere ønsker av hver og om dere ønsker et spesielt materiale.Jeg
              kan hjelpe dere med kun design, eller jeg kan levere en komplett
              pakke med design og ferdig trykkede produkter.
              <p />
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
        />
      </PageSection>
    </>
  );
}
