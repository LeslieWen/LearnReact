import React,{Component} from 'react'
class AddHotdog extends Component{
    state={
        name:null,
        expiry:null,
        meat:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
        <div>
        <h3>Add a new hotdog</h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={this.handleChange} />
            <p></p>
            <label htmlFor="expiry">Expiry: </label>
            <input type="text" id="expiry" onChange={this.handleChange} />
            <p></p>
            <label htmlFor="meat">Meat: </label>
            <input type="text" id="meat" onChange={this.handleChange} />
            <button>Submit</button>
        </form>
        </div>
        )
    }
}
export default AddHotdog