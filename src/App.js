import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import PropTypes from 'prop-types';




const products = [
  {
    name:"shoes",
    price:200,
    category:"clothes"
  },
  {
    name: "tv",
    price: 600,
    category : "Electronics"
  },
    {
      name: "chemise",
      price:99,
      category: "Clothes"
    }
];

ProductTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string
  }
  ))
}

function App() {
  return (
    <table >
        <thead>
        <tr>
        <th >  Name  </th>
        <th >  Price  </th>
        <th >  Category  </th>
        </tr>
        </thead>
        <tbody>
          <ProductTable data = {products} />
          <ProductTable data = {products} />
        </tbody>
    </table>
  );
}



export default App;