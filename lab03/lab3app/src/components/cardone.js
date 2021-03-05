import React from 'react';

class CardOne extends React.Component { //creates class 
  render(age){  //renders the class properties
    //displays class properties
    return <div class="one"> 
    <h2>About Me:</h2>
    <p>Age: {this.props.currentAge}</p>
    <p> Color: {this.props.favoriteColor}</p>
    <p>  Food: {this.props.favoriteFood} </p>
    <p> Sign: {this.props.zodiacSign}</p>
    
    
    </div>
  } 
 
}


export default CardOne;