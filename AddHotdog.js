import React,{Component} from 'react'
class AddHotdog extends Component{
    state={
        name:null,
        units:null,
        meat:null,
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addHotdog(this.state);
    }
    render(){
        return(
        <div>
        <h3>Add a new hotdog (Units must be > 0)</h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" onChange={this.handleChange} />
            <p></p>
            <label htmlFor="units">Units: </label>
            <input type="text" id="units" onChange={this.handleChange} />
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