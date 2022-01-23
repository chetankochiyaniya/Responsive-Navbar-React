import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';


const App = () => {
  return (<>
        <Navbar/>
     <Switch>
         <Route exact path='/'><Home/></Route>
         <Route exact path='/about'><About/></Route>
         <Route exact path='/service'><Service/></Route>
         <Route exact path='/contact'><Contact/></Route>
         <Route exact path='/home' ><Home/></Route>
         <Route component={Home}/>
     </Switch>     
  </>
      
  )
};

export default App;
