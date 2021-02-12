import React from 'react';

function MarketItem (props) { //function takes properties
  return( // uses the count property and returns number data 
    <div>
      <p>Item {props.count}</p> 
    </div>
  )
}

export default MarketItem;