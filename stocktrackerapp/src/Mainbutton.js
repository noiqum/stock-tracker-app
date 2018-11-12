import React from 'react';


class Mainbutton extends React.Component {
	render(props){
		return (
			<div className="outline w-25 pa3 mr2 br4 grow shadow-5 bg-animate hover-bg-lightest-blue">	
			<img src={this.props.src} />
			<p className='f2'>{this.props.buttonname}</p>
			</div>
			);
	}

}

export default Mainbutton;