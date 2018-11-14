import React from 'react';


class Navigation extends React.Component {

	render(props){
		return (
				<div>
				<nav className="db dt-l w-100 border-box pa3 ph5-l">
					<a className="link dim underline dark-gray f6 f5-l dib mr3" href="#" title="Ürünler">Ürünler</a>
					<a className="link dim underline dark-gray f6 f5-l dib" href="#" title="Raporlar">Raporlar</a>
 				 <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
   					 <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="User">{this.props.user.name}</a>
   					 <a className="link dim underline dark-gray f6 f5-l dib" href="#" title="Sign Out">Sign Out</a>

  				</div>	
  				</nav>
				</div>


		);
	}

}


export default Navigation;
