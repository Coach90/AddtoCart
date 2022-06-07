import { useState ,useEffect} from "react";
function Quantity(props){
    const [Quantity,setQuantity]=useState(props.quantity)
    function Updatequantity(){
        let Qty=Quantity+1
        setQuantity(Qty)
        props.getQ(Qty)
    }
    function Decreasequantity(){
        if(Quantity>0)
        { let Qty=Quantity-1
            setQuantity(Qty)
            props.getQ(Qty)
           
        }
    }
    useEffect(() => {
        setQuantity(props.quantity);
      }, [props.quantity]); // <- add the count variable here
    

    return(
    <>
    <button className="btn btn-primary btn-sm mx-auto" onClick={Updatequantity}>+</button>
    <input className="m-2 w-25 " value={Quantity}  readOnly></input>
    <button className="btn btn-danger btn-sm mx-auto" onClick={Decreasequantity}>-</button>
   
    </> 
    )
}

Quantity.defaultProps={
    
    quantity:0
}
export default Quantity;  