import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class NavBar extends Component{
	
	render(){
		return (
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
								aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<Link className="navbar-brand" to='/'>My Demo App</Link>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							{/*<li className="active"><a href="#">Home</a></li>
							<li><a href="#about">Data</a></li> */}
							<li><IndexLink to='/' activeStyle={{color:'#fff'}} >Home</IndexLink></li>
							<li><IndexLink to='/idata' activeStyle={{color:'#fff'}} >Data</IndexLink></li>
						</ul>
					</div>
				</div>
			</nav>		
		)
	}
}
//module.exports = NavBar;
export default NavBar;