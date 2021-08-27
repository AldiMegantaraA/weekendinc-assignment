
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';
import HelpnTipsDetails from './pages/help-and-tips-detail/helpTipsDetail.component';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Help&Tips/:itemId' component={HelpnTipsDetails} />
        </Switch>
        <Footer/>
      </div>
      </>
  );
}

export default App;
