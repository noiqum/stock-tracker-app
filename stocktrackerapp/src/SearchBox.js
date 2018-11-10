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

			</div>

		);
}
}

export default SearchBox;