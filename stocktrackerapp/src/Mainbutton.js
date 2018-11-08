import React from 'react';


class Mainbutton extends React.Component {
	render(props){
		return (
			<div>
				

			<p>wait for it </p>
			<img src={this.props.src} />
			<p>{this.props.buttonname}</p>



			</div>
			);
	}

}

export default Mainbutton;