import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, type, name, url, keywords }) => {
  const image = 'https://res.cloudinary.com/defsu5bfc/image/upload/v1711438314/QubicGen/SEO/Robotic-process-automation_s1nuei.png';
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:updated_time" content="2024-03-05T16:00:00Z" />
      
      {/* Twitter card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* Additional tags */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={name} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Additional tags inspired by powerful websites */}
      <meta name="theme-color" content="#000000" /> {/* Define the theme color */}
      <meta name="apple-mobile-web-app-capable" content="yes" /> {/* Allow full screen in iOS */}
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> {/* Define the status bar style in iOS */}
      <meta name="application-name" content={name} /> {/* Define the name of the web application */}
      <meta name="msapplication-TileColor" content="#000000" /> {/* Define the color of the Windows tile */}
      <meta name="msapplication-config" content="/browserconfig.xml" /> {/* Define the path to the browser configuration file */}
      <meta name="format-detection" content="email=no,telephone=no,address=no" /> {/* Disable auto detection */}
    </Helmet>
  );
};

export default SEO;
