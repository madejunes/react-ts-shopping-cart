export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface StateInterface {
  products: ProductInterface[];
}

export interface ActionInterface {
  type: string;
  payload: unknown;
}