import React from 'react';
import Mainbutton from './Mainbutton';
import SearchBox from './SearchBox';
import './App.css';
import Navigation from './Navigation';
import Container from './Container';




class App extends React.Component {

constructor(){
	super()
	this.state ={
		searchfield:'',
		item:[],
	}
}

onsearchChange=(event)=>{
	console.log(event.target.value);
}
render(){
	return (
		<div>
			<Navigation/>
			<div className="flex justify-around">
				<Mainbutton buttonname={'Ekle'} src={'ekle.png'}/>
				<Mainbutton buttonname={'Çıkar'} src= {'cikar.png'}/>
				<Mainbutton buttonname={'Sil'} src={'sil.png'}/>
			</div>
			<div className="flex">
				<p>açılır kapanır alan </p>
				<Container/>
			</div>
			<div>
				<SearchBox searchChange={this.onsearchChange}/>
			</div>
		</div>
		);
	}
}

export default App ;