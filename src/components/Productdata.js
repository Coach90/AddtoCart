import ProductList from '../components/ProductList'
function Productdata(){
let result= [
    {
      "id": 1,
      "Product_Name": "Ghee",
      "Price": "480.75",
      "Discount": "5",
    },
    {
      "id": 2,
      "Product_Name": "Milk",
      "Price": "47.5",
      "Discount": "10",
    },
    {
      "id": 3,
      "Product_Name": "Paneer",
      "Price": "280.75",
      "Discount": "5",
    },
    {
      "id": 4,
      "Product_Name": "Curd",
      "Price": "150",
      "Discount": "7",
    },
    {
      "id": 5,
      "Product_Name": "Butter",
      "Price": "380.75",
      "Discount": "5",
    },
    {
      "id": 6,
      "Product_Name": "Khoya",
      "Price": "280.5",
      "Discount": "5",
    },
    {
      "id": 7,
      "Product_Name": "Toned Milk",
      "Price": "30.75",
      "Discount": "5",
    }

  
  ]
   return(
        
        <table  className="table table-striped table-hover">
            <tbody>
            <tr  className="table-primary text-center">
                <td>Sno</td>
                <td>Name</td>
                <td>Price</td>
                <td>Discount</td>
                <td>Quantity</td>
                <td>Buy it </td> 
            </tr>
            {result.map((item) =>
            <tr className='text-center' key={item.id}>
            <ProductList  Id={item.id}  Product_Name={item.Product_Name} Price={item.Price} Discount={item.Discount}  />
            </tr>)}
            </tbody >
            </table>
        
)           
        
        {/* <h1 > Hello in the Table data </h1>
        <table  className="table table-striped table-hover">
            <tbody >
            <tr  className="table-primary">
                <td>Date</td>
                <td>Milk-type</td>
                <td>Liter</td>
                <td>Fat</td>
                <td>Clr</td>
                <td>Snf</td>
                <td>Rate</td>
                <td>Total</td>
            </tr>
            {result.map((item)=>
            <tr key={item.id} >
                <td>{item.date}</td>
                <td>{item.milk_type}</td>
                <td>{item.liter}</td>
                <td>{item.fat}</td>
                <td>{item.clr}</td>
                <td>{item.snf}</td>
                <td>{item.rate}</td>
                <td>{item.total}</td>
            </tr>)}
            </tbody> 
        </table> */}
    





}
export default Productdata;