import React from 'react'
import './css/card-style.css'
import {useHistory} from 'react-router-dom'
import {addFavorite} from '../store/actions/favorites'
import {useDispatch} from 'react-redux'

export default function Product(props)  {
    const history = useHistory()
    const dispatch = useDispatch()

    const detail = () => {
        history.push(`/products/${props.product.id}`)
    }

    const handleAddFavorite = () => {
        dispatch(addFavorite(props.product))
    }
    

    // render() {
        return (
            <div className="container mt-5">
                <div className="col-md-4 mt-5 mx-auto " style={{marginBottom: '10px'}}>
                    <div className="card product-card" style={{width: "20rem"}}>
                    <img src={props.product.image} className="card-img-top product-card-img-top" alt="..." style={{height:"370px"}}/>
                        <div className="pt-4 mb-3">
                        <b><p className="card-title product-card-title" style={{textAlign: 'center'}}>{props.product.title}</p></b>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price: <b className="text">${props.product.price}</b></li>
                        <li className="list-group-item">Category: <b className="text-category">{props.product.category}</b></li>
                        </ul>
                        <button onClick={handleAddFavorite}  type="button" class="btn btn-link"><img src="https://img.icons8.com/color/48/000000/add-to-favorites.png" className= "image" alt="img"/><span className="tooltiptext2">Click to add to favorites</span></button>
                        
                        <div onClick={detail} className="btn btn-success detail">Detail</div>
                        
                    </div>
                </div>
            </div>
        )
    
}
