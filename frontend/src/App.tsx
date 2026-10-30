
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Results from "./pages/Result";
import History from "./pages/History";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
             
            </>
          }
        />

        <Route
          path="/features"
          element={
            <>
              <Navbar />
              <Features />
              <Footer/>
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        />

        <Route
          path="/results"
          element={
            <>
              <Navbar />
              <Results />
            </>
          }
        />

        <Route
          path="/history"
          element={
            <>
              <Navbar />
              <History />
            </>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

    