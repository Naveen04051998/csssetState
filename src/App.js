import { Component } from 'react';


export default class App extends Component {
  state={name:"naveen",
  msg:"please subscribe",
value:"subcribe",
backgroundColor:"red",
num:0
}


  clicked=()=>{
    this.setState({value:"subscribed",msg:"thanks for subscribing",backgroundColor:"blue"})
    
    }
   onIncrement=()=>{
      this.setState((prevState) => ({ num: prevState.num + 1 }))
    }
 
  render() { 
    const {name,value,msg,backgroundColor}=this.state

   

    return (
      <div style={{backgroundColor:backgroundColor}}>
        <h1>welcome to the screen {name}</h1>
        <p>{msg}</p>
     <button onClick={this.clicked}>{value}</button>
   <button onClick={this.onIncrement}>click</button>
      </div>
    );
  }
}
