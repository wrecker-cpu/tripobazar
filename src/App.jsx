import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import CreateProfile from "./components/SignUpPage/CreateProfile";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation(); // Get the current route

  // Conditionally hide Footer on specific routes
  const hideFooterOnRoutes = ["/signup", "/createprofile","/login"];
  const shouldShowFooter = !hideFooterOnRoutes.includes(location.pathname);

  return (
    <>
      <Navbar /> {/* Always show Navbar */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/createprofile" element={<CreateProfile />} />
      </Routes>

      {/* Conditionally show the Footer based on the current route */}
      {shouldShowFooter && <Footer />}
    </>
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
