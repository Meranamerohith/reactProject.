import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
 
function AdminProductList() { 
    
    const [productsArray, setProductsArray ] = useState([]); 
    
    useEffect( () =>
    {
        getProductsClick();
    },[]);



    function getProductsClick()
    {     
        let url = "http://localhost:3100/products"; 
        axios.get(url).then( (resData) => 
        {
            
            setProductsArray(resData.data);
        });       
    }



    let resultArray = productsArray.map((item, index) =>  
        <tr key={index}>
            <td>   {item.id}  </td>
            <td>   {item.productName}  </td>
            <td>   {item.category}  </td> 
            <td>   {item.description}</td>
            <td>   {item.unitPrice}</td>
            <td>   <img src = {item.productImage} height={100} width="100" alt="product"/> </td>       
        </tr>
    );

    
    return (
        <>
        <div className="div">
            <input type="button" value="Get Products" onClick={getProductsClick} />
            {productsArray.length > 0 && (
                <table border="2" width="600" cellspacing="0" cellpadding="5">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>product Name</th>
                            <th>category</th>
                            <th>description</th>
                            <th>unitPrice</th>
                            <th>productImage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultArray}
                    </tbody>
                </table>
            )}
            </div>
        </>
    );
}

export default AdminProductList;