import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutPage from "../../layout/LayoutPage";

const CustomerServicePage = lazy(() => import("../pages/CustomerServicePage"));
const DeliveryPage = lazy(() => import("../pages/DeliveryPage"));
const LandinPage = lazy(() => import("../pages/LandinPage"));
const NewsLetterPage = lazy(() => import("../pages/NewsLetterPage"));
const ListProductPage = lazy(() => import("../pages/ListProductPage"));
const StoresPage = lazy(() => import("../pages/StoresPage"));

const HymRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route
          path="/"
          element={
            <Suspense fallback="Cargando...">
              <LandinPage />
            </Suspense>
          }
          index
        />
        <Route
          path="/customerService"
          element={
            <Suspense fallback="Cargando...">
              <CustomerServicePage />
            </Suspense>
          }
        />
        <Route
          path="/delivery"
          element={
            <Suspense fallback="Cargando...">
              <DeliveryPage />
            </Suspense>
          }
        />
        <Route
          path="/newsLetter"
          element={
            <Suspense fallback="Cargando...">
              <NewsLetterPage />
            </Suspense>
          }
        />
        <Route
          path="/:type/:subType"
          element={
            <Suspense fallback="Cargando...">
              <ListProductPage />
            </Suspense>
          }
        />
        <Route
          path="/stores"
          element={
            <Suspense fallback="Cargando...">
              <StoresPage />
            </Suspense>
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default HymRouter;
