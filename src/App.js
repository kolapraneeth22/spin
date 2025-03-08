
import './App.css';
import Header from './Components/HeaderComp/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DropdownSection from './Components/DropdownSection';
import Slideshow from './Components/Slideshow';

function App() {
  return (
    <Router>
      <Header />
      <DropdownSection />
      <Slideshow />

      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch> */}
    </Router>
  );
}

export default App;
