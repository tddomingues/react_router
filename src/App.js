//importando css
import "./App.css";

//importando react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//importando pages
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Info from "./pages/Info";
import SearchItems from "./pages/SearchItems";
import NotFound from "./pages/NotFound";

//importando components
import NavBar from "./components/NavBar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1 className="titulo">Loja Tiago Domingues</h1>
      <BrowserRouter>
        <Search />
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/search" element={<SearchItems />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
