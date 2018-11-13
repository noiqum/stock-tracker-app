import React from 'react';
import './Container.css';
import ContainerEkle from './ContainerEkle';
import ContainerCikar from './ContainerCikar';
import ContainerSil from './ContainerSil';



class Container extends React.Component {
constructor(clicked){
	super(clicked);

}

render(){

	return(
			<div >
					    {(() => {
        switch (this.props.clicked) {
          case "ekle":   return <ContainerEkle/>;
          case "cikar": return <ContainerCikar/>;
          case "sil":  return <ContainerSil/>;
          default:      return <div></div>;
        }
      })()}
			</div>
		);
}
}

export default Container;