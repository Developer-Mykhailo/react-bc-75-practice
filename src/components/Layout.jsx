import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "./Loader/Loader";

function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}

export default Layout;
