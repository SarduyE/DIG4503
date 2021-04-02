import React from "react";

class NameSearch extends React.Component {
  readName(event) {
    event.preventDefault(); // prevents default event 

    let element = document.querySelector("#name"); // selecting name id 

    // grabs element data, creates json object and returns a response 
    fetch("/employees/" + element.value) 
    .then((res) => {
      return res.json();
    }) 
    .then((processed) => {

      let reporting = document.querySelector("#reportingArea");

      
      if(processed.error) { // if object has an error set reporting to error message
        reporting.innerHTML = processed.error;
      } else { 
        reporting.innerHTML = processed.age; // sets reporting to processed age from database.json
      }
    });
    element.value = "";

}
render() {
  return(
    <div>
      <h2> Name </h2>
    <form onSubmit={this.readName}>
      <input id = "name" type="text"/>
      <button>Submit</button>
    </form>
    </div>
  );
}
}

export default NameSearch;