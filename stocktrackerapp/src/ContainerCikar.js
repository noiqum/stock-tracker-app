import React from 'react';
import './Container.css';
import SearchBox from './SearchBox';



class ContainerCikar extends React.Component {

onsearchChange =(event)=>{
	console.log(event.target.value);
}


render(){

	return(
			<div>
				<h1>Çıkar</h1>
				<SearchBox searchChange={this.onsearchChange}/>
			</div>
		);
}
}

export default ContainerCikar;