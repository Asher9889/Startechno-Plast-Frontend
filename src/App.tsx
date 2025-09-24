import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import { Footer, Header, PageNotFound } from './components';
import { Toaster } from 'sonner';

async function loadPreline() {
  return import('preline/dist/index.js');
}

export type Theme = 'light' | 'dark';

function App() {
  const [theme, _] = useState("light");
  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);

 

  useEffect(() => {
    // Remove any existing theme stylesheets
    document.querySelectorAll('link[data-theme]').forEach(link => {
      if (link.getAttribute('data-theme') !== theme) {
        link.remove();
      }
    });

    // Don't reload if already loaded
    if (!document.querySelector(`link[data-theme="${theme}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      
      // Use different paths for development and production
      const isDev = import.meta.env.DEV;
      link.href = isDev 
        ? `/src/themes/${theme}.css` 
        : `/themes/${theme}.css`;
        
      link.dataset.theme = theme;
      link.onerror = () => {
        console.error(`Failed to load ${theme} theme`);
        // Optionally load a fallback theme
      };
      document.head.appendChild(link);
    }
  }, [theme]);



  return (
    <div className=''>
      <Header />
      <Toaster richColors position="top-center" closeButton expand={true} />
      {/* <ContactUsFloating /> */}
      <Routes>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={r.element ? <r.element /> : <PageNotFound />}
          />
        ))}

        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Catch-all route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
