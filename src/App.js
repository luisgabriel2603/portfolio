import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";



function HomePage() {
  return (
    <div className="">
      <Navbar/>
      <SideBar/>
      <Home />
      <About/>      
    </div>
  );
}

export default HomePage;
