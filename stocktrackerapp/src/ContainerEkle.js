import React from 'react';
import './Container.css';
import 'tachyons';



class ContainerEkle extends React.Component {
render(){
	return(
			<div className='ContainerEkle'>
				<div className='box'>

				<span className='box1'>Ürün ekle</span>
				<div className='box2'>
					<form className='flex flex-column'>
						Kategori
	  					<div className='w-25 pa1 mr1'>
	  					<input  type="radio" name="kategori" value="bilgi-işlem"/> 
	  					bilgi-işlem
	  					</div>
	  					<div className='w-25 pa1 mr1'>
	  					<input type="radio" name="kategori" value="ofis malzemeleri"/> 
	  					ofis malzemeleri
	  					</div>
	  					<div className='w-25 pa1 mr1'>
	  					<input type="radio" name="kategori" value="mutfak"/>
	  					mutfak
	  					</div>
	  					<div className='w-25 pa1 mr1'>
	  					<input type='text' name="ürün adı" placeholder="ürün adı"/>
	  					</div>
	  					<div className='w-25 pa1 mr1'>
	  					<input type="text" name="barcode" placeholder="barcode"/>
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
	  					<button type="submit">Ekle</button>
	  					</div>
					</form>
				</div>
				</div>
			</div>
		);
}
}

export default ContainerEkle;