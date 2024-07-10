import './App.css'
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import Skype from "./Components/Skype.js.jsx";
import Footer2 from "./Components/Footer2.jsx";
import Academy from "./Components/Academy.jsx";
import CourseList from "./Components/CourseList.jsx";

function App() {

  return (
    <>
        <div className="bg-[#F6F6F6]">
            <Header />
            <Body />
            <Footer />
            <Skype />
            <Footer2 />
            <Academy />
            <CourseList />
        </div>
    </>
  )
}

export default App
