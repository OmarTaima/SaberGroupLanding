import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import { getFullUrl, getDefaultOgImage, SITE_NAME } from "../utils/ogMeta";

const Home = () => {
  const pageUrl = getFullUrl('/');
  const ogImage = getDefaultOgImage();

  return (
    <main>
      <Helmet>
        <title>Saber Group — Home</title>
        <meta name="description" content="Saber Group — Premium creative marketing." />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Saber Group — Home" />
        <meta property="og:description" content="Saber Group — Premium creative marketing." />
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Helmet>

      {/* <Hero />
      <About /> */}
      <ContactUs />
      <Footer />
    </main>
  );
};

export default Home;
