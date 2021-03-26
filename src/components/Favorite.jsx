import React from 'react'
import './css/card-style.css'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

export default function Favoritard(props)  {
    const history = useHistory()
    const favorites = useSelector((state) => state.favorite.favorites)

    const detail = () => {
        history.push(`/products/${props.product.id}`)
    }
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
                        
                        <div onClick={detail} className="btn btn-success detail">Detail</div>
                        
                    </div>
                </div>
            </div>
        )
    
}
