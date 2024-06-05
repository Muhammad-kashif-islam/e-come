import FetchItems from "./components/FetchItems";
import Footer from "./components/includes/Footer";
import Header from "./components/includes/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <FetchItems />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
