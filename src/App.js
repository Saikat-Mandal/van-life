import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vans from "./components/pages/Vans";
import VansDetail from "./components/pages/VansDetail";
import Reviews from "./components/Host/Reviews";
import Income from "./components/Host/Income";
import Dashboard from "./components/Host/Dashboard";
import HostNavbar from "./components/Host/HostNavbar";
import Layout from "./components/UiComponents/Layout";
import HostVans from "./components/Host/HostVans";
import HostVanDetail from "./components/Host/HostVanDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="host" element={<HostNavbar />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
          <Route path="/vans/:id" element={<VansDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
