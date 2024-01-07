import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div className="appCon">
      <Header/>
      <Routes>
        <Route path="/" element={<AboutMe/>}/>
      </Routes>
    </div>
  )
}

export default App;