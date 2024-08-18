import SearchBar from "./pages/SearchBar.jsx";
import NavBar from "./pages/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./pages/Footer.jsx";
import Women from "./pages/Women.jsx";
import Men from "./pages/Men.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <SearchBar />
      <NavBar />
    <Men/>
      <Footer />
    </div>
  );
}

export default App;
