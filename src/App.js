import GlobalStyle from './components/GlobalStyled'
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav'
import ContactMe from './pages/ContactMe'
import MyWork from './pages/MyWork'
import MovieDetail from './pages/MovieDetail'
//Rouyter
import { Switch, Route, useLocation } from 'react-router-dom'

//animate 
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle/>
      
      <Nav/>
      <AnimatePresence exitBeforeEnter>

        <Switch location={location} key={location.pathname}>

        <Route path="/" exact>
          <AboutMe/>
        </Route>
        <Route path="/work" exact>
          <MyWork/>

        </Route>
        <Route path="/work/:id">
          <MovieDetail/>

        </Route>
        <Route path="/contact">
          <ContactMe/>

        </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
