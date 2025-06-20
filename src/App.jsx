import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
import { refreshUser } from "./redux/auth/authOperations";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/authSelectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/todos" component={<LoginPage />} />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/searchCocktails" element={<SearchCocktails />} />
          <Route path="/cocktails/:cocktailId" element={<CocktailDetails />}>
            <Route path="ingridients" element={<CocktailIngridients />} />
          </Route>

          <Route path="/photos" element={<Photos />} />
          <Route
            path="/todos"
            element={<PrivateRoute redirectTo="/login" component={<Todos />} />}
          />
          <Route path="/points" element={<Points />} />
          <Route path="/props" element={<Props />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
