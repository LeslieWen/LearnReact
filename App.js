import React, {Component} from 'react';
import Hotdogs from './Hotdogs';
import AddHotdog from './AddHotdog';
class App extends Component{  
  state={
    hotdogs:[
      {Name: 'Polish', Expiry:50, Meat:'Pork'},
      {Name: 'Beef', Expiry:30, Meat:'Beef'},
      {Name: 'Valu-Hotdog', Expiry:356, Meat:'Mystery Meat'}
     ]
  }
  
  render(){
    return(
    <div myClass="App">
      <h2>List of Hotdogs</h2>
      <Hotdogs hotdogs={this.state.hotdogs}/>
      <AddHotdog/>
    </div>
    );
  }
}

export default App;
