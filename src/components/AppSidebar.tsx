import React from "react";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import AppSidebarNav  from "./AppSidebarNav";
import { logoNegative } from "assets/brand/logo-negative";
import { sygnet } from "assets/brand/sygnet";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useSelector } from "react-redux";
import { AppState } from "models/interfaces";


const AppSidebar = () => {
  const show = useSelector(({app}:{app:AppState}) => app.sidebarShow)
  return (
    <CSidebar position="fixed"  visible={show}>
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
