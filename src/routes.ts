import { Stethoscope, Microscope, HeartPulse, Baby, Sparkles } from "lucide-react";
import { PageNotFound } from "./components";
import { AboutUs, Home } from "./pages";

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
      { name: "Power banks", path: "/products/power-banks", icon: null, element: PageNotFound, skip: false },
      { name: "Chargers", path: "/products/chargers", icon: null, element: PageNotFound, skip: false },
      { name: "Bluetooth Speakers", path: "/products/bluetooth-speakers", icon: null, element: PageNotFound, skip: false },
      { name: "Neckbands", path: "/products/neckbands", icon: null, element: PageNotFound, skip: false },
      { name: "Earbuds", path: "/products/earbuds", icon: null, element: PageNotFound, skip: false },
      { name: "Electronic Lighters", path: "/products/electronic-lighters", icon: null, element: PageNotFound, skip: false }]
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
    element: PageNotFound,
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

// ---------------- FLATTEN INTO ROUTES ----------------
// const routes = navItems.flatMap((item) => {
//   const childRoutes = item.children?.map((child) => ({
//     path: child.path,
//     element: child.element,
//   })) || [];

//   // Only include parent if it has its own path
//   if (item.path) {
//     return [{ path: item.path, element: item.element }, ...childRoutes];
//   }

//   return childRoutes;
// });

export const routes = navItems.flatMap((item) => {
  const parent = item.path
    ? [{ name: item.name, path: item.path, icon: item.icon, element: item.element, skip: item.skip }]
    : [];

  const children = item.children.length > 0 ? item.children?.map((child) => {
    return {
      name: child.name,
      path: child.path || "",
      element: child.element || PageNotFound,
      skip: child.skip || false,
      icon: child?.icon || null,
    }
  }) : [];

  return [...parent, ...children];
});


export default routes;
