import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
//-----Start preline Config-----?
import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";
import { HelmetProvider } from "react-helmet-async";
import { ScrollProvider } from "./components/scroll-context/ScrollContext.tsx";
import { ReactQueryProvider } from "./providers";
import { DialogProvider } from "./providers";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;

//-----End preline Config-----?
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <ReactQueryProvider> 
        <DialogProvider>
        <ScrollProvider>
          <App />
        </ScrollProvider>
        </DialogProvider>
      </ReactQueryProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
