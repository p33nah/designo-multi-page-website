import Home from './pages/home/Home';
import Nav from './components/navbar/Nav';
import './App.scss';
import {Switch,Route} from 'react-router-dom';
import Footer from './components/footer/Footer';
 
function App() {
  return (
    <div className="app">
        <Nav/>
        <Switch>
          <Route exact path="/designo-multi-page-website">
            <Home/>
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
