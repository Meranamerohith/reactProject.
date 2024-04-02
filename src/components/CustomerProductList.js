import { useState } from "react";
import axios from 'axios';
import './ProductList.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
 
function CustomerProductList() { 
    
    const [productsArray, setProductsArray ] = useState([]); 
    
    useEffect(() => 
    {
        getProductsClick();
    }, []);
    
    function getProductsClick()
    {     
        let url = "http://localhost:3100/products"; 
        axios.get(url).then( (resData) => 
        {
            setProductsArray(resData.data);
        });       
    }


     
    let resultArray = productsArray.map((item, index) =>  
        <div  className="card">
            	<img src={item.productImage} height={100} width="100" alt="product"/>
                <br/>
				<span className="prdName">{item.productName}</span>  <br/>
				<span className="prdPrice"> ₹ {item.unitPrice.toFixed(2)}</span>
                <br/>
                <Link to="/">View Details</Link>				 
        </div>        
     );

    
     return (
        <> 
            {resultArray} 
        </>
    );
}

export default CustomerProductList;