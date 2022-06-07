//import {useState} from 'react-dom'
import Cartdata from "./Cartdata";
import store from '../store/store'
import { useSelector} from "react-redux";
import Quantity from "./Quantity";
import { useState } from "react";

function Cart(){
    const cartdata =useSelector((state)=>state)
    let len=cartdata.length;
    console.log(cartdata);
    const [quantity, setquantity] = useState(0);
    function getQuantity(quantity,id){
      setquantity(quantity);
     
      store.dispatch({
        type:"QuantityUpdated",
        payload:{id:id,
          quantity:quantity
        }
      })
    }
  function Delete(id){
    console.log("hello")
    store.dispatch({
      type:"Deleted",
      payload:{id:id,
      }
    })
  }
  function total(){
    
            let total=0;
            for(let i=0;i<cartdata.length;i++)
            {
              total+=cartdata[i].Amount;
                console.log("Total", cartdata[i].Amount)
            }
            console.log("total",total)
            return total;
  }
    return(<>
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Cart</button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Item Details</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ol>
            {len>0 ? (cartdata.map((i)=>
              <li className="m-3 p-3" key={i.Id}> {i.Name}  <button  className="btn  btn-outline-danger float-end btn-sm" onClick={()=>Delete(i.Id)}><i className="bi bi-trash3-fill "></i></button>
                 Price={i.Price}<br/>
                 Discount={i.Discount}%<br/>
                 Discounted-Rate={i.DiscountedRate}<br/>
                 Qty = <Quantity  quantity={i.Quantity} getQ={(qty)=>getQuantity(qty,i.Id)}/> <br/>
                 <span className="h5">Amount={(i.Amount).toFixed(2)}</span><br/>
                <span>---------------</span>
              </li>
                 
            )  ):(<p className="h2 align-middle text-center">You Have no product to display </p>)
            }    
            </ol>
          </div>
        <div className="h2 p-3 bg-info text-center">Total: {total().toFixed(2)}</div>
        </div>
        </>
    )
}
export default Cart;