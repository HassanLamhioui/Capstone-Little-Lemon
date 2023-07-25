import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage.js";
import BookingPage from "./Pages/BookingPage.js";
import Footer from "./components/Footer.js";
import HeaderElement from "./components/HeaderElement.js";
import About from "./Pages/About.js";
import Menu from "./Pages/Menu.js"
import OrderOnline from "./Pages/OrderOnline.js"
import Login from "./Pages/Login.js"
function App() {
  return (
    <Router>
      <HeaderElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
