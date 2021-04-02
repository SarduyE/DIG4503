import React from "react";

class AgeSearch extends React.Component{
  readAge(event){
    event.preventDefault(); //prevents default event 

    let element = document.querySelector("#age");

    // grabs element data, creates json object and returns a response 
    fetch("/ages/" + element.value)
    .then((res) => {
      return res.json();
    })
    .then((processed) => {
      let reporting = document.querySelector("#reportingArea");

      if (processed.error) { // if object has an error set reporting to error message
        reporting.innerHTML = processed.error;
      } else {
        reporting.innerHTML = processed.name; // sets reporting to processed age from database.json
      }
    });
    element.value = "";
  }
  render () {
    return(
      <div>
      <h2> Age </h2>
      <form onSubmit={this.readAge}>
      <input id="age" type="text" />
      <button>Submit</button>
    </form>
    </div>
    )
  }

}

export default AgeSearch;