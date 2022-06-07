
function reducer(state=[],action){
    if (action.type==="Item-Added")
    {  let updates = [...state];
       
        const idindex = updates.findIndex(item => item.Id == action.payload.Id);
       
        if(idindex==-1)
        {
            return [
            ...state,
            {   
                ...action.payload
            }
        ]
        }
        else{
           updates[idindex].Quantity += action.payload.Quantity;
           updates[idindex].Amount=( updates[idindex].Quantity*updates[idindex].DiscountedRate);
           
           return updates;
            
        }
        

    }
    else if (action.type==="QuantityUpdated")
    {
        let updates = [...state];
        
        const idindex = updates.findIndex(item => item.Id == action.payload.id);
        
        updates[idindex].Quantity = action.payload.quantity;
        updates[idindex].Amount=(action.payload.quantity*updates[idindex].DiscountedRate)
        if(  updates[idindex].Quantity>0)
        {
        
        return updates
        }
        else{
           
           let Finarry= [...updates.slice(0,idindex),...updates.slice(idindex+1)]
           console.log("in the else",Finarry)
           return Finarry;
        }     
         
    }
    if (action.type==="Deleted")
    {
        let refre = [...state];
       
        const idindex = refre.findIndex(item => item.Id === action.payload.id);
        let Finarry= [...refre.slice(0,idindex),...refre.slice(idindex+1)]
        
       return Finarry;
    }
    return state;

}
export default reducer;