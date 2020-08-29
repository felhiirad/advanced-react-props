import React from 'react';


const ProductTable = (props) =>  {
    return(props.data.map((elm) =>{
            return (
            <tr >
                <td >{elm.name}</td>
                <td>{elm.price}$</td>
                <td >{elm.category}</td>
            </tr>
            );
            }))
        }
    



export default ProductTable;