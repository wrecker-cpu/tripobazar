import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import CreateProfile from "./components/SignUpPage/CreateProfile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import ProtectedRoute from "../utils/ProtectedRoute";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import HomePage from "./components/HomePage/HomePage";
import SearchDestinationPage from "./components/SearchDestination/SearchDestinationPage";
import CareersPage from "./components/Careers/CareersPage";
import DestinationPage from "./components/Destinations/DestinationPage";
import TravelTips from "./components/Travel-Tips/TravelTips";
import AdminPanel from "./components/AdminPanel/AdminPanel";
function App() {
  const location = useLocation(); // Get the current route

  // Conditionally hide Footer on specific routes
  const hideFooterOnRoutes = ["/signup", "/createprofile", "/login"];
  const shouldShowNavbar = !hideFooterOnRoutes.includes(location.pathname);
  const shouldShowFooter = !hideFooterOnRoutes.includes(location.pathname);

  return (
    <div className="bg-[#F8F8F8] ">
      {shouldShowNavbar && <Navbar />}
      {/* Always show Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/createprofile" element={<CreateProfile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aboutus/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/searchpage" element={<SearchDestinationPage />} />
          <Route path="/aboutus/careers" element={<CareersPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/traveltips" element={<TravelTips />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Route>
      </Routes>
      {/* Conditionally show the Footer based on the current route */}
      {shouldShowFooter && <Footer />}
    </div>
  );
}

// Wrap App component with Router to ensure `useLocation` works properly
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
