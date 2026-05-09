import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experts from "./pages/Experts";
import ExpertDetails from "./pages/ExpertDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";

import Navbar from "./components/Navbar";

function App() {

  return (

    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="page-container">
          <Routes>
            <Route
              path="/"
              element={<Experts />}
            />
            <Route
              path="/experts/:id"
              element={<ExpertDetails />}
            />
            <Route
              path="/booking/:id"
              element={<Booking />}
            />
            <Route
              path="/my-bookings"
              element={<MyBookings />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
