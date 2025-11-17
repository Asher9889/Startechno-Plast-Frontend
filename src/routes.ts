import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Baby,
  Sparkles,
} from "lucide-react";
import { PageNotFound } from "./components";
import {
  AboutUs,
  Home,
  ContactUsPage,
  BluetoothSpeakerPage,
  ChargerPage,
  EarbudsPage,
  ElectronicLighterPage,
  NeckBandPage,
  PowerBankPage,
} from "./pages";

// ---------------- NAV DATA WITH ROUTES ----------------

export const navItems = [
  {
    name: "Home",
    path: "/",
    element: Home,
    skip: false,
    icon: Stethoscope,
    children: [],
  },
  {
    name: "Products",
    path: "/products",
    skip: false,
    icon: Microscope,
    children: [
      {
        name: "Power banks",
        path: "/products/power-banks",
        icon: null,
        element: PowerBankPage,
        skip: false,
      },
      {
        name: "Chargers",
        path: "/products/chargers",
        icon: null,
        element: ChargerPage,
        skip: false,
      },
      {
        name: "Bluetooth Speakers",
        path: "/products/bluetooth-speakers",
        icon: null,
        element: BluetoothSpeakerPage,
        skip: false,
      },
      {
        name: "Neckbands",
        path: "/products/neckbands",
        icon: null,
        element: NeckBandPage,
        skip: false,
      },
      {
        name: "Earbuds",
        path: "/products/earbuds",
        icon: null,
        element: EarbudsPage,
        skip: false,
      },
      {
        name: "Electronic Lighters",
        path: "/products/electronic-lighters",
        icon: null,
        element: ElectronicLighterPage,
        skip: false,
      },
    ],
  },
  {
    name: "About",
    path: "/about",
    skip: false,
    icon: HeartPulse,
    element: AboutUs,
    children: [],
  },
  {
    name: "Contact",
    path: "/contact",
    skip: false,
    icon: Baby,
    element: ContactUsPage,
    children: [],
  },
  {
    name: "Blogs",
    path: "/blogs",
    skip: false,
    icon: Sparkles,
    children: [],
  },
  // Patient Service

  // Our Company
];

export const routes = navItems.flatMap((item) => {
  const parent = item.path
    ? [
        {
          name: item.name,
          path: item.path,
          icon: item.icon,
          element: item.element,
          skip: item.skip,
        },
      ]
    : [];

  const children =
    item.children.length > 0
      ? item.children?.map((child) => {
          return {
            name: child.name,
            path: child.path || "",
            element: child.element || PageNotFound,
            skip: child.skip || false,
            icon: child?.icon || null,
          };
        })
      : [];

  return [...parent, ...children];
});

export default routes;
