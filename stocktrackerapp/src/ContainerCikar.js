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
				<div className='ContainerEkle'>
				<div className='box'>

				<span className='box1'>Ürün Çıkar</span>
				<div className='box2'>
						<form className='flex flex-column'>
		  					<div>
								<SearchBox   searchChange={this.onsearchChange}/>
							</div>
		  					<div className='w-25 pa1 mr1'>
		  						<input  type="radio" name="birim" value="kutu"/> 
		  					kutu
		  					</div>
		  					<div className='w-25 pa1 mr1'>
		  						<input type="radio" name="birim" value="paket"/> 
		  					paket
		  					</div>
		  					<div className='w-25 pa1 mr1'>
		  						<input type="radio" name="birim" value="adet"/>
		  					adet
		  					</div>
		  					<div>
		  						<input className='w-25 pa1 mr1' type="text" name="adet" placeholder="sayı"/>
		  					</div>
		  					<div>
		  						<button type="submit">Çıkar</button>
		  					</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		);
}
}

export default ContainerCikar;