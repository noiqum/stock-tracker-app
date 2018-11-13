import React from 'react';


class Navigation extends React.Component {

	render(props){
		return (
				<div>
				<nav className="db dt-l w-100 border-box pa3 ph5-l">
  					<a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Raporlar">
   		 				<img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name"/>
 					 </a>
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
