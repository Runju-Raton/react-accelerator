import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HeroSection from "./HeroSection.jsx";
import TaskBoard from "./Task/TaskBoard.jsx";

const App = () => {
  return (
    <div>
        <Header></Header>
        <div className="flex flex-col justify-center items-center">
            <HeroSection></HeroSection>
            <TaskBoard></TaskBoard>
        </div>
        <Footer></Footer>
    </div>
  );
};

export default App;
