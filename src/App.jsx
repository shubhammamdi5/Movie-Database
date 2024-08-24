import MainMenu from "./Components/MainMenu";
import Home from "./Components/Home";
import "./Components/style.css";
import { Route, Routes } from "react-router-dom";


function App() 
{
 
  return (
    <>
      <Routes>
        <Route path="/mainmenu" element={<MainMenu />} />  
      </Routes>  
      <Home></Home>   
    </>
  );
}

export default App;



// let API_key = "&api_key=16b4796b594ef1aa6be150589df9c835";
// let base_url = "https://api.themoviedb.org/3";
// let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=60c1ca95f34c85fa90920bf5aa5a62e4