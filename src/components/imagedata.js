import React,{ Component } from 'react';
//import ReactDOM from 'react-dom';

//import NavBar from './navbar';
import ToolBar from './toolbar';
import GridView from './gridview';
import ListView from './listview';

class MainImageData extends Component {
  	constructor(props)
	{
		super(props);
		this.state = { 
						data:[],
						view:'grid',
						showImage:'show',
						searchInput:'',
						pageCount:10
					};
		this.loadImageData = this.loadImageData.bind(this);
		this.showHideImgHandler = this.showHideImgHandler.bind(this);
		this.doSearch = this.doSearch.bind(this);
		this.updatePage = this.updatePage.bind(this);
		//self = this;
	}

	loadImageData()
	{
		/*this.serverRequest = $.get('data.json', function(result){
			this.setState({
				data:result
			});
		});*/
		// Using windows fetch API
		fetch('data.json').then((response) =>  {
			if(response.status !== 200)
			{
				console.log("Error while fetching data. Status Code: "+response.status);
				return;
			}
			return response.json();
			}).then((output) => {
				this.setState({
					data:output
				});
			//console.log(`Oroginal data => ${this.state.data}`);
		});
	}

	componentDidMount()
	{
		this.loadImageData();
	}

	componentWillUnMount()
	{
		this.serverRequest.abort();
	}
	updateView(val)
	{
		this.setState({view:val});
		//console.log("updateView -> "+val);
	}
	showHideImgHandler(imgVal)
	{
		(imgVal=='show')?this.setState({showImage:'hide'}):this.setState({showImage:'show'});
		//console.log("showHideImgHandler -> "+imgVal);
	}

	doSearch(searchInput)
	{
		//console.log("searchInput -> "+searchInput);
		this.setState({searchInput:searchInput});
	}
	updatePage(pageCount)
	{
		//console.log("pageCount -> "+pageCount);
		this.setState({pageCount:pageCount});
	}

	processFilteredData(fullData, pageCount, searchInput)
	{
		var filteredDataReturn=[];
		var filteredData=[];
		
		//console.log(`Full Data = ${fullData}`);
		// Apply Filtering here
		if(typeof searchInput !='undefined' && searchInput!='')
		{
			fullData.forEach(function(userObj){
				if(userObj.email.toLowerCase().indexOf(searchInput)!=-1)
				{
					filteredData.push(userObj);
				}
			});		
		}
		else
		{
			filteredData=fullData;
		}
		//console.log(`filteredData Data = ${filteredData}`);
		// Data based on Page Count
		filteredDataReturn = filteredData.slice(0,pageCount);
		return filteredDataReturn;
	}
	
    render() {
	  const {data,pageCount,searchInput,showImage, view} = this.state;
	  var filteredDataHolder = this.processFilteredData(data, pageCount, searchInput);
	  //var filteredDataHolder = this.state.data;
	  var showImageLocal = (showImage == 'show')?'show':'hide';
	  //var displayImageOption = (this.state.showImage == 'show')?'Hide Images':'Show Images';
	  return (
		<div className="container">
			<div className="dashboard">
				<div className="row">
					<div className="col-sm-24">
						<div className="panel panel-default">
							<div className="panel-heading">
								<ToolBar 
									updateView={this.updateView.bind(this)} 
									showImage={showImage} 
									showHideImgHandler={this.showHideImgHandler} 
									updatePage={this.updatePage}
									doSearch={this.doSearch}
									/>
							</div>
							{(view == 'grid')?<GridView gdata={filteredDataHolder} showImage={showImageLocal}/>:<ListView lData={filteredDataHolder} showImage={showImage}/>}
							{/*showView*/}
							{ /*<GridView gdata={this.state.data}/> */ }
							
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default MainImageData;