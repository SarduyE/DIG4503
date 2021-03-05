import React from 'react';
import HomePage from './components/homepage';
import CardOne from './components/cardone';
import CardTwo from './components/cardtwo';

function submit() {
  alert('Your information was submitted!'); //fires when button is clicked 
}
function App() { //defines variables
 const fname = 'Elizabeth';
 const lname = 'Sarduy';
 const age = '24';
 const fcolor= 'Purple';
 const ffood='Sushi';
 const zodiac='Scorpio';
 const address='123 Main St.';
 const phone='111-111-1111';
 const email='esarduy@knights.ucf.edu';

 return ( //passes attributes
<div class="display">
   <HomePage firstName={fname} lastName={lname} />
   <CardOne currentAge={age} favoriteColor={fcolor} favoriteFood={ffood} zodiacSign={zodiac} />
   <CardTwo myAddress={address} myPhone={phone} myEmail={email} />
   
   <button onClick={submit}>Submit</button> 

   </div>
 )

}


export default App;
