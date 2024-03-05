import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, type, name, image, url, keywords }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta
        name="keywords"
        content={keywords}
        />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* Additional tags */}
      {/* Add your additional tags here */}
    </Helmet>
  );
};

export default SEO;
