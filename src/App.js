import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./Pages/HomePage.js";
import BookingPage from "./Pages/BookingPage.js";
import Footer from "./components/Footer.js";
import HeaderElement from "./components/HeaderElement.js";

function App() {
  return (
    <Router>
      <HeaderElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
