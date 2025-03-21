export type VotesType = {
  count: number;
  value: number;
};

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[];
};

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
};

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: any;
  count: number;
  images: string[];
  discount?: string;
  currentPrice: number;
};

export type ProductTypeList = {
  id: string;
  name: string;
  price: string;
  images: string[];
  image: string;
  discount?: string;
  currentPrice?: number;
};

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: any;
  count: number;
  // color: string;
  // size: string;
};

export type GtagEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};
export type title = string;
