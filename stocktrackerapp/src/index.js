import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import tachyons from 'tachyons';
import Mainbutton from './Mainbutton';


ReactDOM.render(
	<div>
	<Mainbutton buttonname={'Ekle'} src={'ekle.png'}/>
	<Mainbutton buttonname={'Çıkar'} src= {'cikar.png'}/>
	<Mainbutton buttonname={'Sil'} src={'sil.png'}/>
	</div>
, document.getElementById('root'));


