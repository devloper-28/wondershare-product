import React from "react";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import PaymentButton from "./components/PaymentButton";
import { Route, Router, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import TermsConditions from "./components/TermsConditions";
import CancellationsRefunds from "./components/CancellationsRefunds";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Dashboard from "./components/Dashboard";
// testing
const App = () => {


  return (
    <>
      <div>
        <div>


        </div>
        {/* Define Routes */}
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/cancellations-and-refunds" element={<CancellationsRefunds />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </>

  );
};

export default App;
