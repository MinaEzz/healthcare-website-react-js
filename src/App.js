import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Regist from "./components/regist/Regist";
import Main from "./components/Main";
import About from "./components/about/About";
import Blogs from "./components/blogs/blogs";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Contact from "./components/contact us/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Main />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
