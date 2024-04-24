import { Suspense } from "react";
import "./App.css";
import { routes } from "./constants/routes";
import { Route, Routes } from "react-router-dom";
import Loader from "./globals/Loader";
import ThemeToggler from "./globals/ThemeToggler";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return <Route path={route.url} element={route.page} key={index} />;
          })}
        </Routes>
      </Suspense>
      {/* <ThemeToggler /> */}
    </>
  );
}

export default App;
