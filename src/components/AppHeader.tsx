import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CButton,
  CFormInput,
  CInputGroup,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilCart, cibAndroid, cibReact } from "@coreui/icons";

import { AppHeaderDropdown } from "./header/index";

const AppHeader: React.FC = (): JSX.Element => {
  return (
    <CHeader position="sticky" className="mb-2 bg-dark text-light">
      <CContainer fluid>
        <CHeaderBrand className="d-none d-md-flex me-auto">
          <CIcon icon={cibReact} height={30} style={{ color: "white" }} />
        </CHeaderBrand>
        {/* <CHeaderNav>
          <CNavItem>
            <CInputGroup style={{ width: "600px" }}>
              <CFormInput placeholder="Search" aria-label="Search" />
              <CButton type="button" color="primary" variant="outline">
                <CIcon icon={cilSearch} size="lg" />
              </CButton>
            </CInputGroup>
          </CNavItem>
        </CHeaderNav> */}
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} style={{ color: "white" }} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilCart} style={{ color: "white" }} size="lg" />
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
