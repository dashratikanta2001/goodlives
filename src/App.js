import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homePage/Home";
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>

    </Router>
  );
}

export default App;
