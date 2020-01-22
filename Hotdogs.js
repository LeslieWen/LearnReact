import React from "react";

const Hotdogs =({hotdogs})=>{
    const hotdogList = hotdogs.map(hotdog=>{
        if (hotdog.units>0){
        return(
            <div className='hotdog' key={hotdog.id}>
            <div>Name: {hotdog.name}</div>
            <div>Unit: {hotdog.units}</div>
            <div>Meat: {hotdog.meat}</div>
            <p></p>
            </div>
        )
    }else{
        return null
    }
    })

    return(
        <div className="hotdog-list">
            {hotdogList}
        </div>
    )
}
export default Hotdogs