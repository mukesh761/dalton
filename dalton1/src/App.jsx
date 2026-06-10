import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage.jsx";
import ProgramsPage from "./pages/ProgramsPage.jsx";
import SubjectsPage from "./pages/SubjectsPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from './Pages/LoginPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import { useContext, useEffect } from "react";
import { userContext } from "./context/User.context";

function App() {
  const {islogin ,setislogin}=useContext(userContext)
  useEffect(() => {
    const loggedIn=(localStorage.getItem("islogin"));
    setislogin(loggedIn)

  }, [islogin])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={islogin?<HomePage/>:<LoginPage/>} />
        <Route path="/login" element={islogin?<HomePage/>:<LoginPage/>} />
        <Route path="/signup" element={islogin?<HomePage/>:<SignupPage/>}/>
        <Route path="/programs" element={islogin?<ProgramsPage />:<LoginPage/>} />
        <Route path="/subjects" element={islogin?<SubjectsPage />:<LoginPage/>} />
        <Route path="/results" element={islogin?<ResultsPage />:<LoginPage/>} />
        <Route path="/about" element={islogin?<AboutPage/>:<LoginPage/>}/>
        <Route path="/resources" element={islogin?<ResourcesPage/>:<LoginPage/>} />
        <Route path="/contact" element={islogin?<ContactPage/>:<LoginPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;