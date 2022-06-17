import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "../components";
import { Coin, Coins, Home } from "../pages";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:coinId" element={<Coin />} />

        {/* 404 routes redirect to Homepage  */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
