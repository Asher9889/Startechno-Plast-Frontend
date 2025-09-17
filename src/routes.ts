// import { lazy } from "react";
import {
  Stethoscope,
  Microscope,
  HeartPulse,
  Baby,
  Sparkles,
  User,
  Building2,
} from "lucide-react";
import { PageNotFound } from "./components";
// import { lazy } from "react";

// Lazy load your pages (replace these with actual components)
// const Laparoscopy = lazy(() => import("./pages/laparoscopy/Laparoscopy"));
// const Practology = lazy(() => import("./pages/practology/Practology"));
// const PilesPage = lazy(() => import("./pages/proctology/PilesPage"));
// const FistulaPage = lazy(() => import("./pages/proctology/FistulaPage"));
// const FissurePage = lazy(() => import("./pages/proctology/FissurePage"));
// const PilonidalPage = lazy(() => import("./pages/proctology/PilonidalPage"));
// const RectalPage = lazy(() => import("./pages/proctology/RectalPage"));

// const HerniaPage = lazy(() => import("./pages/laproscopy/HerniaPage"));
// const GallstonesPage = lazy(() => import("./pages/laproscopy/GallstonesPage"));
// const AppendicitisPage = lazy(() => import("./pages/laproscopy/AppendicitisPage"));
// const InguinalPage = lazy(() => import("./pages/laproscopy/InguinalPage"));
// const UmbilicalPage = lazy(() => import("./pages/laproscopy/UmbilicalPage"));

// const CircumcisionPage = lazy(() => import("./pages/urology/CircumcisionPage"));
// const GynaecologyPage = lazy(() => import("./pages/GynaecologyPage"));
// const AestheticsPage = lazy(() => import("./pages/AestheticsPage"));
// const PatientPage = lazy(() => import("./pages/PatientPage"));
// const ServicesPage = lazy(() => import("./pages/ServicesPage"));
// const CompanyPage = lazy(() => import("./pages/CompanyPage"));

// ---------------- NAV DATA WITH ROUTES ----------------

export const navItems = [
  {
    name: "Proctology",
    path: "/c/proctology",
    element: "Practology",
    icon: Stethoscope,
    children: [
      { label: "Piles Treatment", path: "/treatment/piles", element: PageNotFound  },
      { label: "Fistula Treatment", path: "/treatment/fistula", element: PageNotFound },
      { label: "Fissure Treatment", path: "/treatment/fissure", element: PageNotFound },
      { label: "Pilonidal Sinus Treatment", path: "/treatment/pilonidal-sinus", element: PageNotFound },
      { label: "Rectal Prolapse", path: "/treatment/rectal-prolapse", element: PageNotFound },
    ],
  },
  // https://purecheckup.com/c/laparoscopy/
  {
    name: "Laproscopy",
    path: "/c/laproscopy",
    element: "Laparoscopy",
    icon: Microscope,
    children: [
      { label: "Hernia Surgery", path: "/treatment/hernia", element: PageNotFound },
      { label: "Gallstones Treatment", path: "/treatment/gallstone", element: PageNotFound },
      { label: "Appendicitis", path: "/treatment/appendicitis", element: PageNotFound },
      { label: "Inguinal Hernia Treatment", path: "/treatment/inguinal-hernia", element: PageNotFound },
      { label: "Umbilical Hernia Treatment", path: "/treatment/umbilical-hernia", element: PageNotFound }]
  },
  {
    name: "Urology",
    path: "/c/urology",
    icon: HeartPulse,
    children: [
      { label: "Circumcision", path: "/treatment/circumcision", element: PageNotFound },
      { label: "Stapler Circumcision", path: "/treatment/stapler-circumcision", element: PageNotFound },
      { label: "Laser Circumcision", path: "/treatment/laser-circumcision", element: PageNotFound },
      { label: "Kidney Stones Treatment", path: "/treatment/kidney-stones-treatment", element: PageNotFound },
      { label: "Hydrocele", path: "/treatment/hydrocele", element: PageNotFound },
      { label: "EWSL", path: "/treatment/eswl", element: PageNotFound },
      { label: "RIRS", path: "/treatment/rirs", element: PageNotFound },
      { label: "PCNL", path: "/treatment/pcnl", element: PageNotFound },
      { label: "URSL", path: "/treatment/ursl", element: PageNotFound },
      { label: "Frenuloplasty Surgery", path: "/treatment/frenuloplasty-surgery", element: PageNotFound },
      { label: "Balanitis", path: "/treatment/balanitis", element: PageNotFound },
      { label: "Balanoposthitis", path: "/treatment/balanoposthitis", element: PageNotFound },
      { label: "Paraphimosis", path: "/treatment/paraphimosis", element: PageNotFound },
      { label: "Foreskin Infection", path: "/treatment/foreskin-infection", element: PageNotFound },
      { label: "Tight Foreskin", path: "/treatment/tight-foreskin", element: PageNotFound },
      { label: "Phimosis", path: "/treatment/phimosis", element: PageNotFound },
      { label: "Corn Removal", path: "/treatment/corn-removal", element: PageNotFound },
      { label: "Vasectomy", path: "/treatment/vasectomy", element: PageNotFound },
      { label: "Testicular Torsion", path: "/treatment/testicular-torsion", element: PageNotFound },
      { label: "Epididymal Cyst", path: "/treatment/epididymal-cyst", element: PageNotFound },
      { label: "Toenail Removal", path: "/treatment/toenail-removal", element: PageNotFound }
    ],
  },
  {
    name: "Gynaecology",
    path: "/c/gynaecology",
    icon: Baby,
    element: PageNotFound
  },
  {
    name: "Aesthetics",
    path: "/c/aesthetics/",
    icon: Sparkles,
    children: [
      { label: "Plastic Surgeries", path: "/aesthetics/plastic-surgeries", element: PageNotFound  },
      { label: "Cosmetic Surgery", path: "/aesthetics/cosmetic-surgery", element: PageNotFound  },
    ],
  },
 // Patient Service
  {
    name: "Patient",
    icon: User,
    // element: PageNotFound, // Replace with Patient component
    children: [
      { label: "Hindi Blog", path: "/blogs/hindi-blog", element: PageNotFound },
      { label: "English Blog", path: "/blogs/english-blog", element: PageNotFound },
      { label: "FAQ", path: "/faq", element: PageNotFound },
      { label: "Patient Help", path: "/patient-help", element: PageNotFound },
      { label: "No Cost EMI", path: "/no-cost-emi", element: PageNotFound },
      { label: "Health Insurance", path: "/health-insurance", element: PageNotFound },
    ],
  },

  // Our Company
  {
    name: "Our Company",
    icon: Building2,
    // element: PageNotFound, // Replace with Company component
    children: [
      { label: "About Us", path: "/about-us", element: PageNotFound },
      { label: "Contact Us", path: "/contact-us", element: PageNotFound },
      { label: "Privacy Policy", path: "/privacy-policy", element: PageNotFound },
      { label: "Doctors Section", path: "/doctor-section", element: PageNotFound },
    ],
  },

  {
    name: "Footer",
    icon: Building2,
    // element: PageNotFound, // Replace with Company component
    children: [
      { label: "Surgery", path: "/c/surgery", element: PageNotFound },
      { label: "Laser Surgery", path: "/surgery/laser-surgery", element: PageNotFound },
      { label: "Laproscopy Surgery ", path: "/surgery/laparoscopic-surgery", element: PageNotFound },
    ],
  },
];

// ---------------- FLATTEN INTO ROUTES ----------------
const routes = navItems.flatMap((item) => {
  const childRoutes = item.children?.map((child) => ({
    path: child.path,
    element: child.element,
  })) || [];

  // Only include parent if it has its own path
  if (item.path) {
    return [{ path: item.path, element: item.element }, ...childRoutes];
  }

  return childRoutes;
});


export default routes;
