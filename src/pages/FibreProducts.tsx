import React, { useEffect, useState } from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle } from "@ionic/react";
import { GetCampains, GetPromCodeProducts, GetProvidersInfo, iCampain, iProduct, iProvider } from "../api/Api";
import Header from "../components/Header";
import CardInfo from "../components/CardInfo";
import { arrowDown, arrowUp } from "ionicons/icons";

/*Helper functions*/
function getSummarizedProduct(prod: iProduct) {
  //   console.log("???", prod);
  const provider = prod.subcategory.replace("Uncapped", "").replace("Capped", "").trim();
  return { productCode: prod.productCode, productName: prod.productName, productRate: prod.productRate, provider };
}

function getImgUrl(product: any, PROVIDER: iProvider[]): string {
  let url = "";
  // console.log("help", product.provider);
  PROVIDER.map((prov) => {
    // console.log(prov.code, product.provider, "=> ", prov.code === product.provider.toLowerCase());
    if (prov.code === product.provider.toLowerCase()) {
      url = prov.url;
    }
  });
  // console.log("url: ", url);
  return url;
}

function sortPrice(arr: any[], price: { min: number; max: number; label: string }) {
  console.log("SORT", arr, price); //productRate
  let newArr: any[] = [];
  arr.forEach((entry) => {
    if (entry.productRate >= price.min && entry.productRate <= price.max) {
      console.log("can add", entry);
      newArr.push(entry);
    }
  });
  return newArr.sort((pa, pb) => pa.productRate - pb.productRate);
}

function sortSpeed(arr: any[], isSpeed: boolean) {
  //   console.log("SORT", arr); //productName
  let newArr: any[] = [];
  if (isSpeed) {
    console.log("going up", isSpeed);
    newArr = arr.sort((a, b) => b.productName.localeCompare(a.productName)); //.sort((pa, pb) => pb.productName - pa.productName);
  } else {
    console.log("going down", isSpeed);
    newArr = arr.sort((pa, pb) => pa.productName - pb.productName);
  }

  console.log("??", newArr);
  return newArr;
}

const priceRanges = [
  { min: 0, max: 699, label: "R0 - R699" },
  { min: 700, max: 999, label: "R700 - R999" },
  { min: 1000, max: 9999, label: "R1000+" },
  { min: 0, max: 9999, label: "All products" }
];

export default function FibreProducts() {
  //PROVIDER
  const [providers, setproviders] = useState<iProvider[]>([]);
  const [provideSelected, setprovideSelected] = useState<any[]>([]);
  const [isprovUp, setisprovUp] = useState<boolean>(false);
  //CAMPAIN
  const [isBtn, setisBtn] = useState<boolean>(true);
  const [campains, setcampains] = useState<iCampain[]>([]);
  const [campainSelected, setcampainSelected] = useState<string>("");
  const [selectedCampain, setselectedCampain] = useState<iCampain>({} as iCampain);
  //   PRODUCTS
  const [productsProvider, setproductsProvider] = useState<any[]>([]);

  //   FILTER BTNS
  const [isSpeed, setisSpeed] = useState(false);
  const [isPrice, setisPrice] = useState(false);
  const [price, setprice] = useState({ min: 0, max: 9999, label: "All products" });

  useEffect(() => {
    ProvidersSetUp();
    CampainSetup();
    ProductsUpdate(selectedCampain.promocodes);
  }, []);

  useEffect(() => {
    console.log("PROVIDER PRODUCTS=> ", productsProvider);
  }, [productsProvider]);

  useEffect(() => {
    console.log("PROVIDERS => ", provideSelected, isprovUp);
    if (isprovUp) {
      setisprovUp(false);
    }
  }, [isprovUp]);

  useEffect(() => {
    console.log("CAMPAINS=> ", campains);
    if (selectedCampain.promocodes !== undefined && productsProvider.length === 0) {
      ProductsUpdate(selectedCampain.promocodes);
    }
  }, [campains]);

  useEffect(() => {
    console.log("CAMPAINS=> ", selectedCampain);
    if (selectedCampain.promocodes !== undefined && productsProvider.length === 0) {
      ProductsUpdate(selectedCampain.promocodes);
    }
  }, [selectedCampain]);

  useEffect(() => {}, [price]);

  /*Startup and setup*/
  function ProvidersSetUp(): void {
    let p = GetProvidersInfo();
    let arr: any = [];

    if (provideSelected.length === 0) {
      for (let i = 0; i < p.length; i++) {
        if (p[i].code === "vumatel") {
          //   console.log("setting default provider", p[i].code);
          arr.push("vumatel");
        } else {
          arr.push(null);
        }
      }
    } else {
      arr = provideSelected;
    }

    setproviders(p);
    setprovideSelected(arr);
    // console.log("Providers setup complete: ", p, arr);
  }

  function CampainSetup(): void {
    GetCampains()
      .then((response) => response.json())
      .then((data) => {
        // console.log("DATA CAMPAIN", data.campaigns);
        if (data.campaigns.length > 0) {
          //   let re = campains.filter((z) => z.name === data.campaigns[0].name);
          //   console.log("RE", re[0]);
          setcampains(data.campaigns);
          setcampainSelected(data.campaigns[0].name);
          setselectedCampain(data.campaigns[0]);
          //   console.log("Campains Complete", data.campaigns[0].name, data.campaigns);
        }
      });
  }

  /*Add and remove Providers*/
  function ProviderUpdate(name: string) {
    let clone = provideSelected;
    let index = clone.indexOf(name);
    let has = clone.includes(name);
    let pos: number = -1;
    providers.forEach((x, index) => {
      //   console.log("x", x.code, name, index, (pos = x.code === name ? index : -1));
      if (x.code === name) {
        pos = index;
      }
    });

    if (has && index !== -1) {
      //   console.log("there was old now not selected", clone);
      //   console.log("ADD PROVIDER: ", name, index, has, pos, clone[index]);
      clone[pos] = null;
      setprovideSelected(clone);
      setisprovUp(true);

      //   Add new products
      //   console.log("??", selectedCampain, selectedCampain?.promocodes);
      ProductsUpdate(selectedCampain.promocodes);
    } else {
      //   console.log("does not exsit yet so add now", clone[pos]);
      //   console.log("ADD PROVIDER: ", name, index, has, pos, clone[pos]);
      clone[pos] = name;
      setprovideSelected(clone);
      setisprovUp(true);

      //   Add new products
      //   console.log("??", selectedCampain, selectedCampain?.promocodes);
      ProductsUpdate(selectedCampain.promocodes);
    }
  }

  /* Products updated */
  function ProductsUpdate(promocodes: string[]): void {
    // console.log("before", promocodes, productsProvider);
    // let arr: any = [];
    let arr2: any = [];
    if (promocodes !== undefined) {
      GetPromCodeProducts(promocodes)
        .then((response) => response.json())
        .then((data) => {
          //   console.log("data", data);
          if (data.length > 0) {
            data.forEach((p: any) => {
              p.products.forEach((b: iProduct) => {
                let a = getSummarizedProduct(b);
                provideSelected.forEach((element) => {
                  if (element !== null && a.provider.toLowerCase() === element) {
                    arr2.push(a);
                  }
                });
              });
            });

            // console.log("done", arr2);
            setproductsProvider(arr2);
          }
        });
    }
  }

  function onCampainSeleceted(e: any) {
    //   Get and save the new campain selected
    console.log("OLD:", campainSelected, "new", e.detail.value);

    // clear out all old values
    setselectedCampain({} as iCampain);
    setcampainSelected("");
    setproductsProvider([]);

    // set new values
    setcampainSelected(e.detail.value);
    let re = campains.filter((z) => z.name === e.detail.value);
    console.log("RE", re);
    setselectedCampain(re[0]);
    setisBtn(!isBtn);

    // Get products
    ProductsUpdate(re[0].promocodes);
  }

  function displayProducts() {
    if (productsProvider.length > 0) {
      console.log("DISPLAY:", isPrice, ",", price, ">>", isSpeed, ">>", productsProvider);
      let speedOnly = sortSpeed(productsProvider, isSpeed);
      let priceOnly = sortPrice(productsProvider, price);
      let priceAndSpeed = sortSpeed(sortPrice(productsProvider, price), isSpeed);

      let check = isSpeed && !isPrice ? speedOnly : !isSpeed && isPrice ? priceOnly : [];
      let final = check.length === 0 ? priceAndSpeed : check;

      console.log(final, "END", check.length, speedOnly, priceOnly, priceAndSpeed);

      return (
        <>
          {final.map((prod, index) => {
            return (
              <IonCol size='4'>
                <CardInfo key={index} prod={prod} providerImg={getImgUrl(prod, providers)} campainName={campainSelected} />;
              </IonCol>
            );
          })}
        </>
      );
    } else {
      return <>No Products loaded...</>;
    }
  }

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonTitle size='large' color='secondary'>
            Fibre Products
          </IonTitle>
        </IonCol>
      </IonRow>

      {/* Providers */}
      <IonRow>
        <IonCol>
          <IonLabel class='ion-text-wrap'>Select a Fibre infrastructure provider below, browse the products available and complete coverage search</IonLabel>
          <br />

          {providers.map((entry, index) => {
            return (
              <IonButton
                fill={provideSelected[index] !== null ? "outline" : "clear"}
                key={index}
                onClick={() => {
                  ProviderUpdate(entry.code);
                }}>
                <img className='btnIMG' src={entry.url} alt={entry.name} />
              </IonButton>
            );
          })}
        </IonCol>
      </IonRow>

      {/* F   Campains    B  */}
      <IonRow className='ion-align-items-center'>
        <IonCol className='ion-align-self-center'>
          <p>Filter by: </p>

          <IonButton color={isSpeed ? "primary" : "light"} onClick={() => setisSpeed(!isPrice)}>
            Speed {isSpeed ? <IonIcon icon={arrowDown} /> : <IonIcon icon={arrowUp} />}
          </IonButton>

          <IonButton color={isPrice ? "primary" : "light"} onClick={() => setisPrice(!isPrice)}>
            Price
          </IonButton>
          <br />
          {isPrice && (
            <IonSelect value={price} onIonChange={(e) => setprice(e.detail.value)} placeholder='Please select price range'>
              {priceRanges.map((entry, index) => (
                <IonSelectOption key={index} value={entry}>
                  {entry.label}
                </IonSelectOption>
              ))}
            </IonSelect>
          )}
        </IonCol>
        {/* Campains  */}
        <IonCol className='ion-align-self-center'>
          <p>Deal type: </p>
          {isBtn ? (
            <IonButton
              expand='full'
              onClick={() => {
                setisBtn(!isBtn);
              }}>
              {campainSelected}
            </IonButton>
          ) : (
            <IonSelect style={{ backgroundColor: "var(--ion-color-primary)", color: "white" }} value={campainSelected} onIonChange={(e) => onCampainSeleceted(e)}>
              {campains.map((camp, index) => {
                return (
                  <IonSelectOption key={index} value={camp.name}>
                    <IonLabel class='ion-text-wrap'>{camp.name}</IonLabel>
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          )}
        </IonCol>
        <IonCol></IonCol>
      </IonRow>

      {/* Products */}
      <IonRow>{displayProducts()}</IonRow>
    </IonGrid>
  );
}
