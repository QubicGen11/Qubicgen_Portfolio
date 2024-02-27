import React from 'react';
import { Helmet } from 'react-helmet-async';

// SEO component definition
function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{"Services"}</title>
      <meta name='description' content={'At QubicGen, our comprehensive expertise spans multiple industries, empowering us to deliver customized solutions across a spectrum of specialized services. From harnessing the power of Intelligent Automation to crafting innovative Web Development solutions, optimizing SAP systems, managing intricate Databases, fortifying Cyber Security measures, conducting rigorous Testing protocols, driving Digitization initiatives, to orchestrating impactful Digital Marketing strategies, we are committed to elevating your business to new heights of success.'}/>
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content="Website" />
      <meta property="og:image" content={""}/>
      <meta property="og:url" content={""}/>
      <meta property="og:title" content={"Services"} />
      <meta property="og:description" content={'At QubicGen our comprehensive expertise spans multiple industries, empowering us to deliver customized solutions across a spectrum of specialized services. From harnessing the power of Intelligent Automation to crafting innovative Web Development solutions, optimizing SAP systems, managing intricate Databases, fortifying Cyber Security measures, conducting rigorous Testing protocols, driving Digitization initiatives, to orchestrating impactful Digital Marketing strategies, we are committed to elevating your business to new heights of success.'} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content={"At QubicGen our comprehensive expertise spans multiple industries, empowering us to deliver customized solutions across a spectrum of specialized services. From harnessing the power of Intelligent Automation to crafting innovative Web Development solutions, optimizing SAP systems, managing intricate Databases, fortifying Cyber Security measures, conducting rigorous Testing protocols, driving Digitization initiatives, to orchestrating impactful Digital Marketing strategies, we are committed to elevating your business to new heights of success."} />
      <meta name="twitter:title" content={'Services'} />
      <meta name="twitter:description" content={'At QubicGen our comprehensive expertise spans multiple industries, empowering us to deliver customized solutions across a spectrum of specialized services. From harnessing the power of Intelligent Automation to crafting innovative Web Development solutions, optimizing SAP systems, managing intricate Databases, fortifying Cyber Security measures, conducting rigorous Testing protocols, driving Digitization initiatives, to orchestrating impactful Digital Marketing strategies, we are committed to elevating your business to new heights of success.'} />
      {/* End Twitter tags */}
    </Helmet>
  );
}

// Services component definition
function Services() {
  // Define SEO props for Services page
  const seoProps = {
    title: "Services Page Title",
    description: "Description of services provided",
    name: "@yourtwitterhandle",
    type: "website"
  };

  return (
    <div>
      {/* Include SEO component with SEO props */}
      <SEO {...seoProps} />
      {/* Your Services content */}
      <div>Services</div>
    </div>
  );
}
=======
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
// Services component definition
function Services() {
  // Define values for title, description, and image
  const title = "Services";
  const description = "Our expertise extends across various industries, enabling us to provide tailored services in Intelligent Automation, Web Development, SAP, Database, Cyber Security, Testing, Digitization, Digital Marketing.";
  const image = "/path/to/image.jpg";
  return(
    <div className="my-0 bg-red-500">
     {/* Pass title, description, and image as props to the SEO component */}
     <SEO title={title} description={description} image={image} />
      Services
    </div>
  );
}
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
// SEO component definition
function SEO({ title, description, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
// Services component definition
function Services() {
  // Define values for title, description, and image
  const title = "Services";
  const description = "Our expertise extends across various industries, enabling us to provide tailored services in Intelligent Automation, Web Development, SAP, Database, Cyber Security, Testing, Digitization, Digital Marketing.";
  const image = "/path/to/image.jpg";
  return(
    <div className="my-0 bg-red-500">
     {/* Pass title, description, and image as props to the SEO component */}
     <SEO title={title} description={description} image={image} />
      Services
    </div>
  );
}
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
export default Services;
