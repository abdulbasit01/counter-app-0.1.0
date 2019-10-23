import React, { Component } from 'react';
import Counter from "./counter"
class Counters extends Component {
    state = { 
        counter:[{id : 0, value :0}]
        
     }
    render() { 
        return ( 
            <div>
                {this.state.counter.map(counter => <Counter onDelete={this.handleDelte} value={counter.value} key={counter.id}/>)}  
            </div>
         );
    }
}
 
export default Counters;