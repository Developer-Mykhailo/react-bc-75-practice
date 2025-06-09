import { Navigate, Route, Routes } from "react-router-dom";
import Points from "./pages/Points";
import Props from "./pages/Props";
import Todos from "./pages/Todos";
import Photos from "./pages/Photos";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Cocktails from "./pages/Cocktails";
import CocktailDetails from "./pages/CocktailDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:cocktailId" element={<CocktailDetails />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/points" element={<Points />} />
        <Route path="/props" element={<Props />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
