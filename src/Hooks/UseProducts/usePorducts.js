import { useEffect, useState } from "react"

const useProducts = () => {
  const [porducts, setProducts] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);
  return [porducts, setProducts];
}

export default useProducts;