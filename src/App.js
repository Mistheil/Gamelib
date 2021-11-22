import './App.css';
import { FaDiceD20 } from "react-icons/fa";
import { GiSecretBook } from "react-icons/gi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { IoLogoGameControllerB } from "react-icons/io";
import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import TopGames from "./TopGames";
import Search from "./Search";
import GameDetail from "./GameDetail";
import Profile from "./Profile";
import WelcomePage from "./WelcomePage";

function App() {
  
  return (
    <Router>
      <div className="App">
      <header>
       <div className="appHeader">
         <FaDiceD20 className="icon"/>
         <h2 id="titleHeader">Gamelib : Game Database</h2>
         <GiSecretBook className="icon"/>
       </div>
     </header>
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/topgames' component={TopGames} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/profile' component={Profile} />
          <Route path='/game/:name' component={GameDetail} />
        </Switch>
        
      </div>
      <footer>
       <NavLink to="/search" className="iconWrapper">
          <IoLogoGameControllerB className="icon" />
          Home
        </NavLink>
        <NavLink to="/topgames" className="iconWrapper">
          <BsQuestionSquareFill className="icon" />
          Recommendation
        </NavLink>
        <NavLink to="/Profile" className="iconWrapper">
          <HiInformationCircle className="icon" />
          About
        </NavLink>
     </footer>
    </Router>
  );
}

export default App;



