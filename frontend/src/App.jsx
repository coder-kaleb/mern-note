import { Route, Routes } from "react-router-dom";
import DashboardNote from "./pages/DashboardNote";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>This is home</h1>} />
        <Route path="/dashboard" element={<DashboardNote />} />
      </Routes>
    </>
  );
}
