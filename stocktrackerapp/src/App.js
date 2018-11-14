import React from 'react';
import Mainbutton from './Mainbutton';
import SearchBox from './SearchBox';
import './App.css';
import Navigation from './Navigation';
import Container from './Container';
import Loader from './Loader';
import Signin from './Signin';




class App extends React.Component {

constructor(){
	super()
	this.state ={
		searchfield:'',
		item:[],
		user:{
			name:'noi',
		},
		click:''
	}
}



onClickEkle =(event)=>{
	this.setState({click:'ekle'});
	console.log('ekle');
}
onClickCikar =(event)=>{
	this.setState({click:'cikar'});
	console.log('çıkar');
}
onClickSil =(event)=>{
	this.setState({click:'sil'});
	console.log('sil');
}
render(){
	return (
		<div>
			<Navigation user={this.state.user}/>
			<div className="flex justify-around">
				<Mainbutton buttonname={'Ekle'} src={'ekle.png'} onclick={this.onClickEkle}/>
				<Mainbutton buttonname={'Çıkar'} src= {'cikar.png'} onclick={this.onClickCikar}/>
				<Mainbutton buttonname={'Sil'} src={'sil.png'} onclick={this.onClickSil}/>
			</div>
			<div className="flex justify-center pv5 tc">
				<Container clicked={this.state.click}/>
			</div>
			<div>
			<Signin/>
			</div>
		</div>
		);
	}
}

export default App ;