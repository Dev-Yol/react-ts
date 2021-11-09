import { CNavLinkProps } from "@coreui/react/dist/components/nav/CNavLink";
import React, { RefAttributes } from "react";
export interface INav {
  component?: React.ForwardRefExoticComponent<
    CNavLinkProps & RefAttributes<HTMLLIElement> & any
  >;
  name?: string;
  to?: string;
  title?: boolean;
  icon?: React.ReactElement|any;
  badge?: {
    color: string;
    text: string;
  };
  items?: INav[];
}


export interface ActionInterface {
  type:string , 
  payload:any
}

export interface AppStoreState {
  cart: IProduct[];
  products: IProduct[];
  selectedProduct: IProduct | null;
}

export interface AppState {
  sidebarShow?: boolean,
  sideMenu: string[],
  loading: boolean,
  notify: boolean,
  isInit: boolean,
  notification: {
    type: string, message: string
  }
}

export interface IProduct {
  id: number,
  inStock: boolean,
  name: string;
  price: number;
  image: string;
  rating?: number;
  numReviews?: number;
  description: string;
  isFavorite?:boolean
}