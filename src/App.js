import { Component } from 'react';


export default class App extends Component {
  state={name:"naveen",
  msg:"please subscribe",
value:"subcribe",
backgroundColor:"red"
}


  clicked=()=>{
    this.setState({value:"subscribed",msg:"thanks for subscribing",backgroundColor:"blue"})
    
    }
 
  render() { 
    const {name,value,msg,backgroundColor}=this.state

   

    return (
      <div style={{backgroundColor:backgroundColor}}>
        <h1>welcome to the screen {name}</h1>
        <p>{msg}</p>
     <button onClick={this.clicked}>{value}</button>
      </div>
    );
  }
}
