import React, { RefAttributes } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { CBadge } from "@coreui/react";
import { INav } from "models/interfaces";

export const AppSidebarNav = ({ items }: { items: INav[] }): JSX.Element => {
  const location = useLocation();
  const navLink = (
    name?: string,
    icon?: React.ReactElement,
    badge?: {
      color: string;
      text: string;
    }
  ) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item: INav, index: number) => {
    const { name, icon, badge, ...rest } = item;
    const Component = item.component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
            activeClassName: "active",
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };
  const navGroup = (item: INav, index: number) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to ? to : "")}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
