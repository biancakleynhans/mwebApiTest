import providerInfoJson from "./providerInfo.json";
import campainsJson from "./campaigns.json";
import promoJson from "./promocodes.json";
import promoProdsJson from "./promocodeProducts.json";

const baseURL = "https://apigw.mweb.co.za/prod/baas/proxy";
const campaignsURL = `${baseURL}/marketing/campaigns/fibre?channels=120&visibility=public`;
const logoBaseURL = "https://www.mweb.co.za/media/images/providers";

// INTERFACES

export interface iCampain {
  links: any[];
  code: string;
  name: string;
  description: string;
  category: string;
  urlSlug: string;
  isStandardCampaign: boolean;
  isDefaultCampaign: boolean;
  isPrivateCampaign: boolean;
  promocodes: string[];
}
export interface iProvider {
  code: string;
  name: string;
  url: string;
}
export interface iProduct {
  productCode: string;
  productName: string;
  category: string;
  subcategory: string;
  consumerCategory: string;
  productDescription: string;
  productRate: 549;
  productDiscountType: string;
  productDiscountAmount: number;
  productDiscountPeriod: number;
  productDiscountSequence: number;
  onceOffCharge: boolean;
  summary: string;
  isHero: boolean;
  heroOption: string;
  heroTagLine: string;
  heroImage: string;
  sellOnline: true;
  accessLimit: -1;
  accessLimitUnits: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  highlight1Icon: string;
  highlight2Icon: string;
  highlight3Icon: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  includes: any[];
  highlights: string[];
  technicalTerms: string;
  lineSpeed: number;
  parameters: any[];
  friendlyName: string;
  invoiceRollupDescription: string;
  minimumContractMonths: 0;
  productType: string;
  chargePeriod: string;
  highlight4: string;
  highlight5: string;
  highlight6: string;
  highlight4Icon: string;
  highlight5Icon: string;
  highlight6Icon: string;
  displayPrice: 0;
  tagLine: string;
}
export interface iPromo {
  promoCode: string;
  promoCodeDescription: string;
  products: any[];
  promoCodeTagLine: string;
}

// FUNCTIONS
export function GetCampains(): Promise<Response> {
  try {
    return fetch(campaignsURL);
  } catch {
    return new Promise(() => campaignsURL);
  }
}

export function GetPromCodeProducts(promocodes: string[]): Promise<Response> {
  try {
    let promProdUri = `${baseURL}/marketing/products/promos/${promocodes.join(",")}?sellable_online=true`;
    return fetch(promProdUri);
  } catch {
    return new Promise(() => promoProdsJson);
  }
}

export function GetProvidersInfo() {
  return providerInfoJson;
}
