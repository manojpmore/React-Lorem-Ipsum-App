import React, {Component} from 'react'
class GridView extends Component{
	render(){
		return (
			<div className="panel-body grid-view">
				<div className="row">
			
					{/* This needs to be looped*/}
					{/* ImageDetails Component */}
					{this.props.gdata.map(dataObj => <ImageDetails email={dataObj.email} key={dataObj.id} id={dataObj.id} 
					 imgSrc={dataObj.imgSrc} showImage={this.props.showImage} details={dataObj.details}/>)}											
					{/* <ImageDetails /> ImageDetails Component */}

				</div>
			</div>		
		)
	}
}

class ImageDescription extends Component
{
	constructor()
	{
		super();
		this.state = {moreText:'More'};
	}

	toggleText()
	{
		(this.state.moreText=='More')?this.setState({moreText:'Less'}):this.setState({moreText:'More'});
	}

	render()
	{
		var uid = this.props.uid;
		return (
				<div>
					<p>
						<a role="button" data-toggle="collapse" href={`#${uid}`}
						   aria-expanded="false" aria-controls="collapseExample" onClick={this.toggleText.bind(this)}>
							{this.state.moreText}
						</a>
					</p>
					<div className="collapse" id={`${uid}`}>
						<p>
							{this.props.details}
						</p>
					</div>				   
				</div>	
			)
	}
}

class DataImage extends Component
{
	render()
	{
		var ImgStyle = {
			  height: '200px',
			  width: '100%',
			  display: 'block'
		};
		return (
				<img data-src="holder.js/100%x200" alt="100%x200"
								 src={this.props.imgSrc}
								 data-holder-rendered="true"
								 style={ImgStyle} />
			)
	}
}

class ImageDetails extends Component
{
	render()
	{
		return (
			<div className="col-sm-12 col-md-8">
				<div className="thumbnail">
					{/* Display image only when the showImage value is show */}
					{(this.props.showImage=='show')?<DataImage imgSrc={this.props.imgSrc} />:''}

					<div className="caption">
						<h3>{this.props.email}</h3>
						{/* Image Description */}
						 <ImageDescription uid={this.props.id} details={this.props.details}/>
						{/* Image Description */}
					</div>
				</div>
			</div>
		)
	}
}

//module.exports = NavBar;
export default GridView;