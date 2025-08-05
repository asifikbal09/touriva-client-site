import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
      <h1 className="h-200">This is MainLayout Component</h1>
      <Footer/>
    </div>
  )
};
export default MainLayout;