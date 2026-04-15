import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  structuredData?: object | object[];
  keywords?: string;
}

const SEO = ({
  title = "Reva International Trading LLP | Premium Indian Fresh Produce Exporter",
  description = "Reva International Trading LLP is a leading exporter of premium Cavendish bananas, mangoes, grapes, and fresh vegetables from India to global markets.",
  canonical = "https://revaitrading.com",
  ogType = "website",
  ogImage = "/favicon.png",
  twitterHandle = "@RevaTrading",
  structuredData,
  keywords = "Reva, Reva International, Reva International Trading LLP, Reva Trading, Banana Exporter India, Alfonso Mango Export, Fresh Fruit Export, Indian Vegetable Supplier",
}: SEOProps) => {
  const brandName = "Reva International Trading LLP";
  const brandVariations = "Reva, Reva International, Reva Trading";
  
  const fullTitle = title.includes("Reva") 
    ? title 
    : `${title} | ${brandName}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}, ${brandVariations}`} />
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
