import React from "react";
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
=======
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
=======
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
// SEO component definition
function SEO({ title, description, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6673c6b (seo for blog)
=======<meta property="og:type" content="website" />
=======

      <meta property="og:type" content="website" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======<meta property="og:type" content="website" />
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
>>>>>>> a402908 (meta tags added for about,blog and services pages)
=======

      <meta property="og:type" content="website" />
>>>>>>> e1bdce7 (seo about page)
=======
=======<meta property="og:type" content="website" />
>>>>>>> 8c664c7 (seo for blog)
=======
=======<meta property="og:type" content="website" />
>>>>>>> 6673c6b (seo for blog)
=======

      <meta property="og:type" content="website" />
=======
=======<meta property="og:type" content="website" />
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
>>>>>>> a402908 (meta tags added for about,blog and services pages)
=======

      <meta property="og:type" content="website" />
>>>>>>> e1bdce7 (seo about page)
=======
=======<meta property="og:type" content="website" />
>>>>>>> 8c664c7 (seo for blog)
=======
=======<meta property="og:type" content="website" />
>>>>>>> 6673c6b (seo for blog)
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
function Blog() {
  const title = "Blog";
  const description = "Dive into our Blog to know our daily updates";
  const image = "/path/to/image.jpg";
  return(
    <div className="my-0 bg-red-500">
     {/* Pass title, description, and image as props to the SEO component */}
     <SEO title={title} description={description} image={image} />
      Blog
    </div>
  );
  const title = "Blog";
  const description = "Dive into our Blog to know our daily updates";
  const image = "/path/to/image.jpg";
  return(
    <div className="my-0 bg-red-500">
     {/* Pass title, description, and image as props to the SEO component */}
     <SEO title={title} description={description} image={image} />
      Blog
    </div>
  );
=======
=======
>>>>>>> e5fc397 (seo about page)
=======
>>>>>>> e5fc397 (seo about page)
=======
>>>>>>> e5fc397 (seo about page)

// SEO component definition
function SEO({ title, description, name, type }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{"Blog"}</title>
      <meta name='description' content={"At QubicGen, we believe in sharing valuable insights, expert knowledge, and the latest trends in the tech and business world through our blog. Our blog is your go-to destination for thought-provoking articles, informative guides, and practical tips to help you stay ahead in today's rapidly evolving landscape."}/>
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content="Website" />
      <meta property="og:image" content={""}/>
      <meta property="og:url" content={""}/>
      <meta property="og:title" content={"Blog"} />
      <meta property="og:description" content={"At QubicGen, we believe in sharing valuable insights, expert knowledge, and the latest trends in the tech and business world through our blog. Our blog is your go-to destination for thought-provoking articles, informative guides, and practical tips to help you stay ahead in today's rapidly evolving landscape."} />
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content={"At QubicGen, we believe in sharing valuable insights, expert knowledge, and the latest trends in the tech and business world through our blog. Our blog is your go-to destination for thought-provoking articles, informative guides, and practical tips to help you stay ahead in today's rapidly evolving landscape."} />
      <meta name="twitter:title" content={'Blog'} />
      <meta name="twitter:description" content={"At QubicGen, we believe in sharing valuable insights, expert knowledge, and the latest trends in the tech and business world through our blog. Our blog is your go-to destination for thought-provoking articles, informative guides, and practical tips to help you stay ahead in today's rapidly evolving landscape."} />
      {/* End Twitter tags */}
    </Helmet>
  );
}



function Blog() {
  return <div>Blog</div>;
>>>>>>> e5fc397 (seo about page)
=======
=======
>>>>>>> a402908 (meta tags added for about,blog and services pages)
=======
>>>>>>> e1bdce7 (seo about page)

      <meta property="og:type" content="website" />
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
=======<meta property="og:type" content="website" />
=======

      <meta property="og:type" content="website" />
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
=======<meta property="og:type" content="website" />
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
=======

      <meta property="og:type" content="website" />
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
=======<meta property="og:type" content="website" />
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={window.location.href} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
=======

>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> d5f76a0 (meta tags added for about,blog and services pages)
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
function Blog() {
  const title = "Blog";
  const description = "Dive into our Blog to know our daily updates";
  const image = "/path/to/image.jpg";
  return(
    <div className="my-0 bg-red-500">
     {/* Pass title, description, and image as props to the SEO component */}
     <SEO title={title} description={description} image={image} />
      Blog
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
=======
>>>>>>> 971ad31 (meta tags added for About,blog and services pages)
}
export default Blog;
