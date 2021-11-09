// import React, { RefAttributes } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import PropTypes from "prop-types";

// import { CBadge } from "@coreui/react";
// import { INav } from "models/interfaces";

// export const AppSidebarNav = ({ items }: { items: INav[] }): JSX.Element => {
//   const location = useLocation();
//   const navLink = (
//     name?: string,
//     icon?: React.ReactElement,
//     badge?: {
//       color: string;
//       text: string;
//     }
//   ) => {
//     return (
//       <>
//         {icon && icon}
//         {name && name}
//         {badge && (
//           <CBadge color={badge.color} className="ms-auto">
//             {badge.text}
//           </CBadge>
//         )}
//       </>
//     );
//   };

//   const navItem = (item: INav, index: number) => {
//     const { name, icon, badge, ...rest } = item;
//     const Component = item.component;
//     return (
//       <Component
//         {...(rest.to &&
//           !rest.items && {
//             component: NavLink,
//           })}
//         key={index}
//         {...rest}
//       >
//         {navLink(name, icon, badge)}
//       </Component>
//     );
//   };
//   const navGroup = (item: INav, index: number) => {
//     const { component, name, icon, to, ...rest } = item;
//     const Component = component;
//     return (
//       <Component
//         idx={String(index)}
//         key={index}
//         toggler={navLink(name, icon)}
//         visible={location.pathname.startsWith(to ? to : "")}
//         {...rest}
//       >
//         {item.items?.map((item, index) =>
//           item.items ? navGroup(item, index) : navItem(item, index)
//         )}
//       </Component>
//     );
//   };

//   return (
//     // <React.Fragment>
//     //   {items &&
//     //     items.map((item, index) =>{
//     //       if (!item.items) {
//     //         return navItem(item, index)
//     //       }
//     //     }
//     //       // item.items ? navGroup(item, index) : navItem(item, index)
//     //     )}
//     // </React.Fragment>
//   );
// };
import { cilSpeedometer, cilPuzzle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CSidebarBrand, CSidebarNav, CNavTitle, CNavItem, CBadge, CNavGroup, CSidebarToggler } from '@coreui/react'
import { INav } from 'models/interfaces';
import React, { useEffect } from 'react'

// sidebar nav config
import navigation from "utils/router/nav";
const AppSidebarNav = () => {
  const navGroup = (item: INav, index: number): JSX.Element => {
    return <CNavGroup toggler={item.name} key={`group -${index}-${item.name}`}>
      {item.items?.map((subItem: INav, idx: number) => {
        return navItem(subItem, idx)
      })}
    </CNavGroup>
  }
  const navItem = (item: INav, index: number): JSX.Element => {
    const { name, icon, badge } = item;
    return (
      <CNavItem href={item.to} key={`item -${index}-${item.name}`}>
        {navLink(name, icon, badge)}
      </CNavItem>
    );
  };
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
  return (<CSidebarNav>
    {
      navigation && navigation.map((item: INav, index: number) => {
        if (item.title) {
          return <CNavTitle key={`title-${index}`}>{item.name}</CNavTitle>
        } else if (!item.items && !item.title) {
          return navItem(item, index*99)
        } else {
          return navGroup(item, index)
        }
      })
    }
  </CSidebarNav>
  )
}

export default React.memo(AppSidebarNav)
