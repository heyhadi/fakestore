import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar'
import FavoriteCard from '../components/Favorite'
import Footer from '../components/Footer'
import '../components/css/card-style.css'
// import useFetch from '../hooks/useFetch'
import {useSelector} from "react-redux"




export default function FavoritePage() {
  const [favorites]  = useSelector((state) => state)
//   const {data, isLoading} = useFetch('https://fakestoreapi.com/products')

  console.log(favorites);
//   if (isLoading) {
//     return <h2 className="loader text-center"></h2> 
//   }

  return (
    <div>
    <div className="badan">
      <Navbar/>
      <h1 className="text-center mb-3">My Favorite Products</h1>
      <div className="container-fluid d-flex mt-3 justify-content-center ">
        <div className="row row-cols-4">
        {
            favorites.map(favorite => {
                return <FavoriteCard key={favorite.product.id} product={favorite.product}/>
            })
        }
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}