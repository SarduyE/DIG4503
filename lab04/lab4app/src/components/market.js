import React, {Component} from 'react';
import MarketItem from './marketItem';

class Market extends Component {
  constructor(props){
    super(props) //sends back data to component 
    this.state = {
      count: 0
    };
  };

// sets the state of the count and adds a button element to display when clicked
render(){
  return(
      <div>
          <MarketItem count={this.state.count}/>
          <button onClick={() => this.setState({count: this.state.count+1})}>Add Item</button> 
      </div>
  )
}
}

export default Market;