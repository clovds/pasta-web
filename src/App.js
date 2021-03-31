import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SidebarLogin from "./components/SidebarLogin";
import { AnimatedRoutes, RouteTransition } from "./animation";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import { useDispatch } from "react-redux";
import { keepLoginAction } from "./redux/action";
import { CartPage } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) dispatch(keepLoginAction());
  }, [dispatch]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <SidebarLogin isOpen={isOpenLogin} toggle={toggleLogin} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} toggleLogin={toggleLogin} />
      <AnimatedRoutes exitBeforeEnter initial={false}>
        <RouteTransition exact path="/" slideUp={100}>
          <LandingPage />
        </RouteTransition>
        <RouteTransition path="/menu" slide={100}>
          <MenuPage />
        </RouteTransition>
        <RouteTransition path="/cart" slide={100}>
          <CartPage />
        </RouteTransition>
      </AnimatedRoutes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
