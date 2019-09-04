import React from 'react';

import Navigation from './components/navigation/navigation.component';
import Home from './components/home/home.component';
import SignIn from './components/sign-in/sign-in.component';
import Register from './components/register/register.component';
import Particles from 'react-particles-js';

import './App.css';


const particlesOptions ={
	particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700
      }
    }
         
  }
} 

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      route: 'SignIn',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: ''
      }
    }
  }

  onRouteChange =(route) => {
    if(route === 'SignOut') {
      this.setState({isSignedIn: false})
    } else if (route === 'Home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

	render() {
  return (
    <div className="App">
   <Particles className='particles'
              params={particlesOptions}
            />
     <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
     { this.state.route === 'Home' 
     ? <Home />
     : (
      this.state.route ==='SignIn' 
      ? <SignIn onRouteChange={this.onRouteChange}/>
      : <Register onRouteChange={this.onRouteChange}/>
      )
    }
    </div>
  );
 }
}

export default App;
