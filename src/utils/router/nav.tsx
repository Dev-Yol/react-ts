import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
import { INav } from "models/interfaces";

const _nav: INav[] = [
  {

    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    title: true,
    name: "Theme",
  },
  {

    name: "Colors",
    to: "/theme/colors",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {

    name: "Typography",
    to: "/theme/typography",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    title: true,
    name: "Components",
  },
  {

    name: "Base",
    to: "/base",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {

        name: "Accordion",
        to: "/base/accordion",
      },
      {

        name: "Breadcrumb",
        to: "/base/breadcrumbs",
      },
      {

        name: "Cards",
        to: "/base/cards",
      },
      {

        name: "Carousel",
        to: "/base/carousels",
      },
      {

        name: "Collapse",
        to: "/base/collapses",
      },
      {

        name: "List group",
        to: "/base/list-groups",
      },
      {

        name: "Navs & Tabs",
        to: "/base/navs",
      },
      {

        name: "Pagination",
        to: "/base/paginations",
      },
      {

        name: "Popovers",
        to: "/base/popovers",
      },
      {

        name: "Progress",
        to: "/base/progress",
      },
      {

        name: "Spinners",
        to: "/base/spinners",
      },
      {

        name: "Tables",
        to: "/base/tables",
      },
      {

        name: "Tooltips",
        to: "/base/tooltips",
      },
    ],
  },
  {

    name: "Buttons",
    to: "/buttons",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {

        name: "Buttons",
        to: "/buttons/buttons",
      },
      {

        name: "Buttons groups",
        to: "/buttons/button-groups",
      },
      {

        name: "Dropdowns",
        to: "/buttons/dropdowns",
      },
    ],
  },
  {

    name: "Forms",
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {

        name: "Form Control",
        to: "/forms/form-control",
      },
      {

        name: "Select",
        to: "/forms/select",
      },
      {

        name: "Checks & Radios",
        to: "/forms/checks-radios",
      },
      {

        name: "Range",
        to: "/forms/range",
      },
      {

        name: "Input Group",
        to: "/forms/input-group",
      },
      {

        name: "Floating Labels",
        to: "/forms/floating-labels",
      },
      {

        name: "Layout",
        to: "/forms/layout",
      },
      {

        name: "Validation",
        to: "/forms/validation",
      },
    ],
  },
  {

    name: "Charts",
    to: "/charts",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {

    name: "Icons",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {

        name: "CoreUI Free",
        to: "/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {

        name: "CoreUI Flags",
        to: "/icons/flags",
      },
      {

        name: "CoreUI Brands",
        to: "/icons/brands",
      },
    ],
  },
  {

    name: "Notifications",
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {

        name: "Alerts",
        to: "/notifications/alerts",
      },
      {

        name: "Badges",
        to: "/notifications/badges",
      },
      {

        name: "Modal",
        to: "/notifications/modals",
      },
      {

        name: "Toasts",
        to: "/notifications/toasts",
      },
    ],
  },
  {

    name: "Widgets",
    to: "/widgets",
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    title: true,
    name: "Extras",
  },
  {
    name: "Pages",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {

        name: "Login",
        to: "/login",
      },
      {

        name: "Register",
        to: "/register",
      },
      {

        name: "Error 404",
        to: "/404",
      },
      {

        name: "Error 500",
        to: "/500",
      },
    ],
  },
];

export default _nav;
