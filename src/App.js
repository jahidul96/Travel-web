import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./componetnts/Footer";
import Lastfooter from "./componetnts/Lastfooter";
import Navbar from "./componetnts/Navbar";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";




function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <>
        <div >
          <Footer />
        </div>

        <Lastfooter />
      </>
    </BrowserRouter>
  );
}

export default App;
