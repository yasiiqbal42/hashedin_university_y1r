import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import ReactTile from "./components/ReactTile";
import Header from "./components/Header";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<DashBoard />} />
          <Route path="/courses" element={<DashBoard />} />
          <Route path="/my_wishlist/" element={<Wishlist />} />
          <Route path="/my_cart/" element={<Cart />} />
          <Route path="/courses/course_details/:id" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{
  /* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/home" element={<Homescreen />} />
    <Route path="/electric_cars/" element={<Homescreen />} />
    <Route path="/electric_cars/:id" element={<CarDetailScreen />} />
    <Route path="/suitability_tool/" element={<SuitabilityTool />} />
    <Route path="/my_booking/" element={<MyBooking />} />
    <Route path="/logout/" element={<SignOut />} />
    <Route path="/not_found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not_found" replace />} />
  </Routes>
</BrowserRouter>; */
}

export default App;
