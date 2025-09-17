// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";
import { seoData } from "../../config";

interface SEOProps {
  page: keyof typeof seoData;
}

const SEO = ({ page }: SEOProps) => {
  const meta = seoData[page];

  if (!meta) return null;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <link rel="canonical" href={meta.canonical} />

      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
};


export default SEO;