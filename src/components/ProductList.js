import Quantity from "./Quantity";
import { useState, useTransition } from "react";
import store from '../store/store'
function ProductList(props){
  const [Id,setId]=useState(props.Id)
  const[Name,setName]=useState(props.Product_Name)
  const[Price,setPrice]=useState(props.Price)
  const[quantity,setquantity]=useState(0)
  const[Discount,setDiscount]=useState(props.Discount)
  const[DisRate,setDisRate]=useState((props.Price*((100-props.Discount)/100)).toFixed(2))
  const[Amount,setAmount]=useState(0)
  function tocart(){
      const Amount=DisRate*quantity;
       setAmount(Amount.toFixed(2));
   const tocart={"Id":Id,"Name":Name,"Price":Price,"Discount":Discount,"Quantity":quantity,"DiscountedRate":DisRate,"Amount":Amount}
   if(quantity>0){
   store.dispatch({
    type:"Item-Added",
    payload:tocart  
  })
  setquantity(0)
  }
  else{
    alert("Please enter the Quantity")
  }
  
  // console.log( store.getState()) 
  //  console.log(tocart)
  }
  function getQuantity(quantity){
    setquantity(quantity);

  }
  return(
    <> 
      <td> <span> {props.Id} </span></td>
      <td><span>{props.Product_Name}</span></td>
      <td>{props.Price} Rs</td>
      <td>{props.Discount}%</td>
      <td className="w-25"><Quantity quantity={quantity} getQ={getQuantity}/></td>
      
      <td><button className="btn btn-primary" onClick={tocart} >Add</button></td>
      
    </>
           
  )
}
export default ProductList;