import API from '../src/api';
import { useEffect, useState, useMemo, useReducer } from "react";
import "./App.css";
import ProductList from "./components/body/ProductList";
import Navbar from "./components/navbar/Navbar";
import reducer from './reducer';

const fetcher = new API();
function App() {
  const [globalData, setGlobalData] = useState([]);
  const [cartData, dispatch] = useReducer(reducer, []);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetcher.get({ endpoint: 'products' }).then((data) => {
      setGlobalData(data);
    });
  }, []);

  const addtoCartHandler = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  }

  const deleteFromCartHandler = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };
  const filteredData = useMemo(() => {
    return searchTerm.length ? globalData.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase())) : globalData;
  }, [searchTerm, globalData ]);

  // console.log('filteredData', filteredData);
  return (
    <>
      <Navbar
        onSearch={setSearchTerm}
        cartCount={cartData.length}
        cartData={cartData}
      />
      <ProductList products={filteredData} onAddToCart={addtoCartHandler} onRemoveItem={deleteFromCartHandler} />
    </>
  );
}

export default App;
