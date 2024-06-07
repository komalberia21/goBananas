import { useEffect, useState, useCallback } from "react";
import ProductTable from "./components/Table/Table";
import "./App.css";

const App = () => {
  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState("");
  const[loading,setLoading]=useState(false);

  //function to handle debounce
const debounceValue = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(null, args);
      }, wait);
    };};
    //function to fetch filter products
  const handleFilter = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${filter}`);
      const data = await response.json();
      const res = data.products;
      setResult(res);
      setLoading(false);
      console.log(res, "data");
    } catch (e) {
      console.log(e);
    }};
    const debounce = useCallback(debounceValue(handleFilter, 2000), [filter]);

//fetching products when the components mounts
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const res = data.products;
        setResult(res);
        setLoading(false)
      } catch (e) {
        console.log(e);
      }};
   fetchProducts();
  },[]);
//calling debounce function when user filters products
  useEffect(() => {
    if (filter.trim() !== "") {
      debounce();
    }
  }, [filter, debounce]);

  return (
    <div className="App">
      <div className="navbar">
        <div className="title">
          <h1>Products</h1>
        </div>
      <div className="search">
        <div>
          <input 
            onChange={(e) => setFilter(e.target.value)} 
            type="text" 
            placeholder="Try finding phone.." 
            value={filter}
          />
        </div>
      </div>
      </div>
      <div className="wrapper">
         {loading?"Loading":<ProductTable products={result} />}
      </div>
    </div>
  );
};

export default App;
