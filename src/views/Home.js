import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import Product from '../components/Products'
import Footer from '../components/Footer'
import '../components/css/card-style.css'
import useFetch from '../hooks/useFetch'
// import {fetchProducts} from '../store/actions/products'
// import { useSelector, useDispatch } from 'react-redux'




export default function Home() {
  const [products, setProducts] = useState([])
  const {data, isLoading} = useFetch('https://fakestoreapi.com/products')

  useEffect(() => {
    setProducts(data)
  }, [data])

  if (isLoading) {
    return <h2 className="loader text-center"></h2> 
  }

  return (
    <div>
    <div className="badan">
      <Navbar/>
      <h1 className="text-center mb-3">Product list</h1>
      <div className="container-fluid d-flex mt-3 justify-content-center ">
        <div className="row row-cols-4">
        {
            products.map(product => {
                return <Product key={product.id} product={product}/>
            })
        }
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}