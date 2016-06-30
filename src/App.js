import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import MainImageData from './components/imagedata';
import Home from './components/home';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
  	
    render() {
	  
	  return (
		<Router history={browserHistory} >
			<Route path='/' component={Container}>
				<IndexRoute component={Home} />
				<Route path='/idata' component={MainImageData} />
				<Route path='*' component={NotFound} />
			</Route>
		</Router>
    );
  }
}

const NotFound = () => (
		<h1>Sorry. The requested page is not Found</h1>)

const Container = (props) => (
	<div>	
		<NavBar />
		{props.children}
	</div>	
)

export default App;