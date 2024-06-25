import About from "./components/About";
import Home from "./components/Home";
import MyExperiences from "./components/MyExperiences";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";



function HomePage() {
  return (
    <>
      <Navbar >

        <SideBar />
        <Home />
        <About />

        <MyExperiences />

        <Projects />
      </Navbar>
    </>
  );
}

export default HomePage;
