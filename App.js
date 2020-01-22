import React, {Component} from 'react';
import Hotdogs from './Hotdogs';
import AddHotdog from './AddHotdog';
class App extends Component{  
  state={
    hotdogs:[
      {name: 'Polish', units:50, meat:'Pork',id:1},
      {name: 'Beef', units:30, meat:'Beef',id:2},
      {name: 'Valu-Hotdog', units:356, meat:'Mystery Meat',id:3}
     ]
  }
  addHotdog=(hotdog)=>{
    hotdog.id=Math.random();
    console.log(this.state);
    let hotdogs= [...this.state.hotdogs,hotdog]; // spread array, copying array
    this.setState({
      hotdogs: hotdogs
    }) 
  }
  render(){
    return(
    <div myclass="App">
      <h2>Catalogue of Hotdogs</h2>
      <Hotdogs hotdogs={this.state.hotdogs}/>
      <AddHotdog addHotdog={this.addHotdog}/>
    </div>
    );
  }
}

export default App;
