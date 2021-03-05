import React from 'react';

class HomePage extends React.Component { //creates class 
  render(fname, lname){  //renders the class properties 
    //displays class properties
    return <div class="two"> <h1>Hello, {this.props.firstName} {this.props.lastName} </h1>

    
    </div>
  } 
 
}

export default HomePage;