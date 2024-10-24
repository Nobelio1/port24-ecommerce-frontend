import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HymRouter from "../modules/hym/routes/HymRouter"
import AuthRouter from "../modules/auth/routes/AuthRouter"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/hm/*" element={<HymRouter />} />
          <Route path="/auth" element={<AuthRouter />} />
          <Route path="/*" element={<Navigate to="/hm"/>} />
      </Routes>
    </BrowserRouter>
  )
}
