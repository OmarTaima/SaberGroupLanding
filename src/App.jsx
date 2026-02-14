import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Home />
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;
