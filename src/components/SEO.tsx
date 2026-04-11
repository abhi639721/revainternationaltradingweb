import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  structuredData?: object;
}

const SEO = ({
  title = "Fruity Motion Studio | Premium Indian Fruit & Vegetable Exporter",
  description = "Fruity Motion Studio (Reva International LLP) is a leading exporter of premium Cavendish bananas, mangoes, grapes, and fresh vegetables from India to global markets.",
  canonical = "https://revaitrading.com", // Replace with actual domain when live
  ogType = "website",
  ogImage = "/favicon.png",
  twitterHandle = "@FruityMotion",
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("Fruity Motion Studio") 
    ? title 
    : `${title} | Fruity Motion Studio`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
