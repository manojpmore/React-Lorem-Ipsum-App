import React, {Component} from 'react'
class ListView extends Component{
	render(){
		return (
			<div className="panel-body list-view">
				<div className="row">
					<div className="col-sm-24">
						<table className="table table-striped">
						<TableHeader />
						
						<tbody>
							{this.props.lData.map(dataObj => <TableRow email={dataObj.email} key={dataObj.id} id={dataObj.id} 
							imgSrc={dataObj.imgSrc} showImage={this.props.showImage} details={dataObj.details}/>)}											
						</tbody>
						</table>
					</div>
				</div>
			</div>		
			
		)
	}
}

class TableHeader extends Component
{
	render()
	{
		return (
				<thead>
				   <tr>
					   <th>
							Thumbnails
					   </th>
					   <th className="title">
							Title
					   </th>
					   <th>
							Description
					   </th>
					</tr>
				</thead>
			)
	}
}

class TableRow extends Component
{
	constructor()
	{
		super();
		this.state = {moreText:'More'}
	}

	toggleText()
	{
		(this.state.moreText=='More')?this.setState({moreText:'Less'}):this.setState({moreText:'More'});
	}
	render()
	{
		var ImgStyle = {
			  height: '30px',
			  width: '30px',
			  display: 'block'
		};
				
		var uid = this.props.id;

		return (
			<tr>
				<td width="50px;">
					{(this.props.showImage=='show')?<img  src={this.props.imgSrc}
								 data-holder-rendered="true"
								 style={ImgStyle} />:''}	
					
				</td>
				<td>
					{this.props.email}
				</td>
				<td>
					<p>
						<a onClick={this.toggleText.bind(this)} data-toggle="collapse" href={`#${uid}`} aria-expanded="false" aria-controls="collapseExample">
						{this.state.moreText}
					</a>
					</p>

					<div className="collapse" id={uid}>
					   <p>
					   {this.props.details}
					   </p>
					</div>
				</td>
			</tr>
		)
	}
}

export default ListView;