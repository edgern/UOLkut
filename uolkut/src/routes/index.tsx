import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/header";
import Signin from "../pages/Signin";
import Recovery from "../pages/accountRecover";
import Profile from "../pages/Profile";
import Edit from "../pages/EditProfile";
import Signup from "../pages/Signup";
import Footer from "../components/Footer/footer";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Signin />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profile/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
