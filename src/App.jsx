import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Props = lazy(() => import("./pages/Props"));
const Todos = lazy(() => import("./pages/Todos"));
const Photos = lazy(() => import("./pages/Photos"));
const Points = lazy(() => import("./pages/Points"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Cocktails = lazy(() => import("./pages/Cocktails"));
const CocktailDetails = lazy(() =>
  import("./pages/CocktailDetails/CocktailDetails")
);
const SearchCocktails = lazy(() => import("./pages/SearchCocktails"));
const CocktailIngridients = lazy(() =>
  import("./components/Cocktails/CocktailIngridients")
);
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/searchCocktails" element={<SearchCocktails />} />
          <Route path="/cocktails/:cocktailId" element={<CocktailDetails />}>
            <Route path="ingridients" element={<CocktailIngridients />} />
          </Route>

          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/points" element={<Points />} />
          <Route path="/props" element={<Props />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
