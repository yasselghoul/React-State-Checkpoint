import React, { Component } from 'react';

class App extends Component{
    constructor(props){
     super(props);
     this.state =
    {
      person : {
    fullName:"Mohamed khalfaoui Aziz",
      bio:"i'm developer",
      imgSrc:"aziz.jpg",
      profession:"FullStack Developer",
    },

      show:true,
      timer:0,
      intervall:null,
    }
    this.Show=()=>{
        this.setState({
          show: !this.state.show
        })
      }
      
}
componentDidMount(){
    console.log('hello')
    this.setState({
      intervall:setInterval(
        ()=>({timer: this.state.timer +1}),
        1000
      )
    })

  };
render(){
    const { person, show } = this.state;
    return(
    <>
      <button onClick={(this.Show)}>{show ? "Hide" : "Show"} Profile</button>
      
    {this.state.show && (
      <>
      <img src={person.imgSrc} alt ={person.fullName}/>
      <h1>{person.fullName}</h1>
      <p>{person.bio}</p>
      <p>{person.profession}</p>
      
      </>
      
    )}
   <p>{this.state.timer}</p>
    </>

)}
}
export default App;