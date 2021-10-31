import { CNavLinkProps } from "@coreui/react/dist/components/nav/CNavLink";
import React, { RefAttributes } from "react";
export interface INav {
  component: React.ForwardRefExoticComponent<
    CNavLinkProps & RefAttributes<HTMLLIElement> & any
  >;
  name?: string;
  to?: string;
  icon?: React.ReactElement;
  badge?: {
    color: string;
    text: string;
  };
  items?: INav[];
}
