import GlobalStyle from './components/GlobalStyled'
import AboutMe from './pages/AboutMe';
import Nav from './components/Nav'
import ContactMe from './pages/ContactMe'
import MyWork from './pages/MyWork'

//Rouyter
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch>

      <Route path="/" exact>
        <AboutMe/>
      </Route>
      <Route path="/work">
        <MyWork/>

      </Route>
      <Route path="/contact">
        <ContactMe/>

      </Route>
      </Switch>

    </div>
  );
}

export default App;
