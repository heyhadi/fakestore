import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'
import useFetch from '../hooks/useFetch'

export default function Detail(props) {

    const { id } = useParams();
    const [products, setProducts] = useState({});
    const { data, error, isLoading } = useFetch(`https://fakestoreapi.com/products/${id}`);

    useEffect(() => {
       
        setProducts(data);
        
    }, [data]);

  if (isLoading) {
    return <h2 className="loader text-center"></h2> 
  }
    return (
        <div>

        <Navbar/>
            <div class="container">
            <h1 class="my-4" >Product Details</h1>
                <div class="row">
                    <div class="col-md-7">
                        <img class="img-fluid" src={products.image} alt="" style={{height:"570px"}}/>
                    </div>
                    <div class="col-md-4">
                        <h1 class="my-4" >{products.title}</h1>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        
                        <h2 class="my-3 price " >${products.price} --- <span className="discount">30% OFF</span></h2>

                        <h3 class="my-3 ">Products Description</h3>
                            <p className="pro-description">{products.description}</p>
                        <h3 class="my-3">Category : {products.category}</h3>
                        <button type="button" class="btn btn-success btn-block">CHECKOUT</button>
                   
                </div>

            </div>
            <h3 class="my-4">Related Products</h3>

            <div class="row">

                <div class="col-md-3 col-sm-6 mb-4">
                <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                </div>

                <div class="col-md-3 col-sm-6 mb-4">
                <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                </div>

                <div class="col-md-3 col-sm-6 mb-4">
                <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                </div>

                <div class="col-md-3 col-sm-6 mb-4">
                <a href="#">
                        <img class="img-fluid" src="http://placehold.it/500x300" alt=""/>
                    </a>
                </div>
         </div>
    
    </div>

</div>
    )
}


