import React from 'react';

class CardTwo extends React.Component { //creates class 
  render(address){  //renders the class properties 
    //displays class properties
    return <div class="three"> 
    <h2>Contact:</h2>
    <p>Address: {this.props.myAddress}</p>
    <p>Phone: {this.props.myPhone}</p>
    <p>E-mail: {this.props.myEmail}</p>
    
    </div>
  } 
 
}


export default CardTwo;