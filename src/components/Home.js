import {Component as c}  from 'react'
function Home() {
    function array() {
        function square() {
            return function cube(b) {
                let cube = (b) * (b) * (b);
                console.log("in the cube function", cube)
                return cube;
            }

        }
        let cube = square();
        console.log("cube is", cube)
        function test(square, num) {
            console.log("square is", square)
            let result = square(num)
            console.log("in the test function result is", result);
            return result;
        }

        console.log("cube of no is", test(cube, 2))
        let  a = str=>str.trim();
        let input ="                 Hello javascript"
        console.log("a is ",  a("                                     1     hello world     "));
        
        const results=a(input);
        console.log("results is ", results);
      
    }

   console.log("component is ",c)
 
    return(
        <div>
            <h1>Home page </h1>
            <p>Hello this the home page of my website and i aM CHECKING IT .</p>
            <button onClick={array}>Test </button>
        </div>
    )
}
export default Home;