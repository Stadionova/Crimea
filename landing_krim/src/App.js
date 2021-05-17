import MainPage from './MainPage/MainPage';
import './App.css';
import Trip from './Trip/Trip';
import { Route } from "react-router-dom";
import Equipment from './Equipment/Equipment';
import Contacts from './Contacts/Contacts';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <Route path='/main' component={MainPage} />
      <Route path='/trip' component={Trip} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/contacts' component={Contacts} />
    </div>
  );
}

export default App;
