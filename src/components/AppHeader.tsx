import React from "react";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CBadge
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilBell, cilCart, cibReact, cilMenu } from "@coreui/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppState, AppStoreState } from "models/interfaces";
import { ActionTypes, actionCreator } from "utils/actions";
import { AppProfileDropdown, AppCartDropDown } from "./header";

const AppHeader: React.FC = (): JSX.Element => {

  const dispatch = useDispatch()
  const show = useSelector(({ app }: { app: AppState }) => app.sidebarShow)
  const toggleSidebar = () => {
    dispatch(actionCreator(ActionTypes.TOGGLE_SIDEBAR, { sidebarShow: !show }))
  }

  const iconStyle = { color: "white" }
  return (
    <CHeader position="sticky" className="mb-2 bg-dark text-light">
      <CContainer fluid>
        <CHeaderToggler
          onClick={toggleSidebar}
        >
          <CIcon icon={cilMenu} style={{ ...iconStyle, color: 'red' }} size="xl" />
        </CHeaderToggler>
        <CHeaderBrand className="d-none d-md-flex me-auto">
          <CIcon icon={cibReact} height={30} style={iconStyle} />
        </CHeaderBrand>
        <CHeaderNav className="ms-3">
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} style={{ color: "white" }} size="xl" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">

              <AppCartDropDown />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">

              <AppProfileDropdown />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
