import React from "react";

const Hotdogs =({hotdogs})=>{
//class Hotdogs extends Component{
    
        
    //const{hotdogs}=this.props;
    /*
    const hotdogList=hotdogs.map(hotdog=>{
    if(hotdog.Expiry>30){
    return(
        <div className='hotdog'>
        <div>Name: {hotdog.Name}</div>
        <div>Expiry: {hotdog.Expiry}</div>
        <div>Meat: {hotdog.Meat}</div>
        <p></p>
        </div>
    )
    }else{
        return null
    }
    })*/
    const hotdogList = hotdogs.map(hotdogs=>{
        return hotdogs.Expiry>0?(
            <div className='hotdog' key={hotdogs.id}>
            <div>Name: {hotdogs.Name}</div>
            <div>Expiry: {hotdogs.Expiry}</div>
            <div>Meat: {hotdogs.Meat}</div>
            <p></p>
            </div>
        ):null;
    })
    return(
        <div className="hotdog-list">
            {hotdogList}
        </div>
    )
}
export default Hotdogs