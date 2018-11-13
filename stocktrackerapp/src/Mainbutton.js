import React from 'react';


class Mainbutton extends React.Component {
	render(props){
		return (
			<div className=" w5 h4 pa3 mr2 br4 grow shadow-3 bg-animate hover-bg-lightest-blue" onClick={this.props.onclick}>	
			<img className='w-20' src={this.props.src} />
			<p className='f3'>{this.props.buttonname}</p>
			</div>
			);
	}

}

export default Mainbutton;