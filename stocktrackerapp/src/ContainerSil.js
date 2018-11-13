import React from 'react';
import './Container.css';
import SearchBox from './SearchBox';



class ContainerSil extends React.Component {
		onsearchChange =(event)=>{
	console.log(event.target.value);
}


render(){

	return(
			<div>
				<h1>Sil</h1>
				<SearchBox searchChange={this.onsearchChange}/>
			</div>
		);
}
}

export default ContainerSil;