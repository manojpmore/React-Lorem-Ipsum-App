import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component
{
	render()
	{
		return (
			<div className="container">
			   <div className="col-sm-6">
				   <Link className="well center-block" to="/idata">Data</Link>
			   </div>
			</div>
		
		);
	}
}
export default Home;