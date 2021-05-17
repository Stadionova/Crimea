import MainPage from './MainPage/MainPage';
import './App.css';
import Trip from './Trip/Trip';
import { Route } from "react-router-dom";
import Equipment from './Equipment/Equipment';
import Contacts from './Contacts/Contacts';
import EachDay from './EachDay/EachDay';

function App() {
  return (
    <div className="App">
      <Route path='/main' component={MainPage} />
      <Route path='/trip' component={Trip} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/contacts' component={Contacts} />
      <Route path='/day' component={EachDay} />
    </div>
  );
}

export default App;
