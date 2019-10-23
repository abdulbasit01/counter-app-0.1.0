import React, {Component} from 'react';
class Counter extends Component {
    state={ 
        counter:this.props.value,
        //imageUrl:'https://picsum.photos/200',
        products:["Product1", "Product2", "Product3"],

    };
    handleEventsAdd=()=>{
        this.setState({counter: this.state.counter + 1})
        console.log("Clicked!!!",this)
    }
    handleEventsSub =()=>{
        this.state.counter!=0 ? this.setState({counter: this.state.counter -1}): null;
           }
    renderProducts(){
            // {if(this.state.products.length===0)return <p>there are no tags</p>;
            // return <ul>{this.state.products.map(products => <li key ={products}>{products}</li>)}</ul> ;     
            // }
    }
    render() {
        return (
            <div className="costom-div"> 
                {/* {this.renderProducts()} */}
                {/* <input type="text" value ={this.state.counter}></input> */}
                <label className="label label-success">{this.state.counter}</label>
                <br></br>
                <span ><img src={require('./images/images.jpeg')} onClick={this.handleEventsAdd} className="img-fluid"/> <img src={require('./images/images.png')} onClick={this.handleEventsSub} className="img-fluid"/>
                <button onClick={()=>this.props.onPress(this.props.id)}>
                    change
                </button>
                </span>
                
            </div>
        );
    }
    
}
 
export default Counter;