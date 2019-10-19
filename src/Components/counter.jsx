import React, {Component} from 'react';
class Counter extends Component {
    state={ 
        counter:0,
        //imageUrl:'https://picsum.photos/200',

    };
    style1={
        fontWeight:"bold",
        padding:5,
    };
    newStyle={
        fontWeight:"bold",
        fontSize:20,
    };
    render() {
        let classes="badge m-2 badge-";
        this.state.counter==0 ? classes+="warning" : classes+="secondary";
        return (
            <div> {/* we use React.fragmant insted of div*/}
                {/* <img src={this.state.imageUrl}/> */}
                <span style={this.style1} className={classes}>{this.doSomething()}</span>
                <button style={this.newStyle} className="btn btn-secondary btn-small">Incremenet</button>
            </div>
        );
    }
    doSomething() {
        return this.state.counter===0 ? "Zero": this.state.counter;    
        
    }
}
 
export default Counter;