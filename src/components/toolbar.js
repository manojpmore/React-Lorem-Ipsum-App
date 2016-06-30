import React, {Component} from 'react'
class ToolBar extends Component{
	render(){
		return (
			<ul className="list-inline clearfix">
				<li>
					<div className="navbar-form">
						<PageCount callPageCount = {(val) => this.props.updatePage(val)}/>	

						<Filter callDoSearch={(val) => this.props.doSearch(val)}/>	

						<DataViewOption onClick={(val) => this.props.updateView(val)} showImage={this.props.showImage} showHideImgClick={(val) => this.props.showHideImgHandler(val)}/>
							
					</div>
				</li>                           
			</ul>		
		)
	}
}

class PageCount extends Component
{
	render()
	{
		return (
				<div className="form-group">
						<select className="form-control" onChange={(e) => this.props.callPageCount(e.target.value)}>
							<option value="10">10</option>
							<option value="50">50</option>
							<option value="100">100</option>
							<option value="200">200</option>
							<option value="500">500</option>
							<option value="1000">1000</option>
						</select>
				</div>	
			)
	}
}

class Filter extends Component
{
	/*doFilterSearch(e)
	{
		var inputVal = e.target.value;
		console.log("inputVal -> "+inputVal);
		this.props.callDoSearch(inputVal);
	}*/
	render()
	{
		return (
				<div className="form-group">
					<input type="search" ref="searchInput" placeholder="Search" className="search form-control" onChange={(e) => this.props.callDoSearch(e.target.value)} />
				</div>
			)
	}
}

class DataViewOption extends Component
{
	constructor() 
	{
		super();
		this.toggleView = this.toggleView.bind(this);
		//this.state = { imageAction:'show' }
    }

	toggleView(val)
	{
		//e.preventDefault();
		//console.log("Thisval -> "+val);
		//console.log(e);
		this.props.onClick(val);		
	}
	showHideImgChange(val)
	{
		//console.log("showHideImgChange -> "+val);
		this.props.showHideImgClick(val);
		
	}
	render()
	{
		/*var displayImageOption = 'Hide Images';
		if(this.state.imageAction == 'hide')
		{
			displayImageOption = 'Show Images';
		}*/
		
		return (
			<div className="btn-group" data-toggle="buttons">
				<label className="btn btn-primary active" onClick={() => this.toggleView('grid')}>  
					<input type="radio" name="options" id="gridOption" autoComplete="off" defaultChecked />
					Grid
				</label>
				<label className="btn btn-primary" onClick={() => this.toggleView('list')}>
					<input type="radio" name="options" id="listOption" autoComplete="off" /> List
				</label>
				<label>
					<input className="btn btn-primary" type="button" name="tog" id="toggleImage" value={(this.props.showImage == 'show')?'Hide Images':'Show Images'} onClick={() => this.showHideImgChange(this.props.showImage)}/>
				</label>
			</div>
		)
	}
}

//module.exports = NavBar;
export default ToolBar;