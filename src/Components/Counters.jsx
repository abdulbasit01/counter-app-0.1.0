import React, { Component } from 'react';
import Counter from "./counter"
class Counters extends Component {
    state = { 
        counter:[{id : 0, value :0},{id : 1, value :1}]
        
     }
     handleDelete= (counterId)=>{
        //  console.log("Button pressed", counterId);
        const counter=this.state.counter.filter(c => c.id!=counterId);
        this.setState({counter: counter})
     }
    render() { 
        return ( 
            <div>
                {this.state.counter.map(counter => <Counter onPress={this.handleDelete} onDelete={this.handleDelte} value={counter.value} key={counter.id} id ={counter.id}/> )}  
            </div>
         );
    }
}
 
export default Counters;