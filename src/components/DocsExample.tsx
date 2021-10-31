import PropTypes from "prop-types";
import React, { ReactElement } from "react";
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilCode, cilMediaPlay } from "@coreui/icons";

import packageJson from "../../package.json";
interface IDocExample {
  children?: ReactElement;
  href?: string;
}
const DocsExample = (props: IDocExample) => {
  const { children } = props;

  const _href = "#";

  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink href="#" active>
            <CIcon icon={cilMediaPlay} className="me-2" />
            Preview
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href={_href} target="_blank">
            <CIcon icon={cilCode} className="me-2" />
            Code
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  );
};

export default React.memo(DocsExample);
