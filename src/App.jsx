import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, RecipeDetails, Blogs, Contact, BlogDetails } from "./pages";
import { Header, Footer } from "./components/layout";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<RecipeDetails />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
