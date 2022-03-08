import API from '../src/api';
import { useEffect, useState, useMemo } from "react";
import "./App.css";
import ProductList from "./components/body/ProductList";
import Navbar from "./components/navbar/Navbar";
const fetcher = new API();

function App() {
  const [globalData, setGlobalData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    fetcher.get({ endpoint: 'products' }).then((data) => {
      setGlobalData(data);
    });
  }, []);

  const addtoCartHandler = (product) => {
    const newCartData = [...cartData, product];
    setCartData(newCartData);
  }
  const filteredData = useMemo(() => {
    return searchTerm.length ? globalData.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase())) : globalData;
  }, [searchTerm, globalData ]);

  console.log('filteredData', filteredData);
  return (
    <>
      <Navbar
        onSearch={setSearchTerm}
        cartCount={cartData.length}
      />
      <ProductList products={filteredData} onAddToCart={addtoCartHandler} />
    </>
  );
}

export default App;
