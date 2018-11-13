import React from 'react';



class SearchBox extends React.Component {
render(props){
	return(
			<div>
				<input 
				type='search'
				 placeholder='ürün ara'
				 onChange={this.props.searchChange}
				 />
				 <button>Ara</button>
			</div>

		);
}
}

export default SearchBox;